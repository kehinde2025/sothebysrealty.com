import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),

      {
        name: "telegram-api",

        configureServer(server) {
          server.middlewares.use(
            "/api/send-telegram",
            async (req, res) => {
              if (req.method !== "POST") {
                res.statusCode = 405;
                res.setHeader("Content-Type", "application/json");

                res.end(
                  JSON.stringify({
                    success: false,
                    message: "Method not allowed",
                  })
                );

                return;
              }

              try {
                let body = "";

                req.on("data", (chunk) => {
                  body += chunk;
                });

                req.on("end", async () => {
                  try {
                    const formData = JSON.parse(body);

                    const message = `
🏠 NEW RENTAL APPLICATION

━━━━━━━━━━━━━━━━━━

PERSONAL INFORMATION

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Current Address: ${formData.address}

━━━━━━━━━━━━━━━━━━

PERSONAL DETAILS

Gender: ${formData.gender}
Currently Employed: ${formData.employed}

━━━━━━━━━━━━━━━━━━

EMPLOYMENT & FINANCIAL

Current Work: ${formData.currentWork}
Monthly Salary: ${formData.monthlySalary}
Move-in Amount: ${formData.moveInAmount}

━━━━━━━━━━━━━━━━━━

RENTAL DETAILS

Preferred Move-in Date: ${formData.moveInDate}
Lease Duration: ${formData.leaseDuration}

━━━━━━━━━━━━━━━━━━

ADDITIONAL INFORMATION

Bankruptcy: ${formData.bankruptcy}
Disability Assistance: ${formData.disability}
Pet: ${formData.pet}

━━━━━━━━━━━━━━━━━━

APPLICATION FEE

Payment Method: ${formData.payment}

━━━━━━━━━━━━━━━━━━

APPLICATION CONFIRMED: ${
                      formData.confirmed ? "YES" : "NO"
                    }

━━━━━━━━━━━━━━━━━━
`;

                    const telegramResponse = await fetch(
                      `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
                      {
                        method: "POST",

                        headers: {
                          "Content-Type": "application/json",
                        },

                        body: JSON.stringify({
                          chat_id: env.TELEGRAM_CHAT_ID,
                          text: message,
                        }),
                      }
                    );

                    const telegramResult =
                      await telegramResponse.json();

                    if (!telegramResponse.ok || !telegramResult.ok) {
                      console.error(
                        "Telegram error:",
                        telegramResult
                      );

                      res.statusCode = 500;
                      res.setHeader(
                        "Content-Type",
                        "application/json"
                      );

                      res.end(
                        JSON.stringify({
                          success: false,
                          message:
                            "Telegram could not receive the application.",
                        })
                      );

                      return;
                    }

                    res.statusCode = 200;
                    res.setHeader(
                      "Content-Type",
                      "application/json"
                    );

                    res.end(
                      JSON.stringify({
                        success: true,
                        message:
                          "Application sent successfully.",
                      })
                    );
                  } catch (error) {
                    console.error(
                      "Request processing error:",
                      error
                    );

                    res.statusCode = 500;
                    res.setHeader(
                      "Content-Type",
                      "application/json"
                    );

                    res.end(
                      JSON.stringify({
                        success: false,
                        message:
                          "Could not process the application.",
                      })
                    );
                  }
                });
              } catch (error) {
                console.error("API error:", error);

                res.statusCode = 500;
                res.setHeader(
                  "Content-Type",
                  "application/json"
                );

                res.end(
                  JSON.stringify({
                    success: false,
                    message: "Server error.",
                  })
                );
              }
            }
          );
        },
      },
    ],
  };
});