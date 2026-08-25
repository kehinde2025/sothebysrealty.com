export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Method not allowed",
        });
    }

    try {
        const {
            fullName,
            email,
            phone,
            address,
            gender,
            employed,
            currentWork,
            monthlySalary,
            moveInAmount,
            moveInDate,
            leaseDuration,

            // NEW FIELDS
            preferredLocation,
            budget,
            scheduleViewing,

            bankruptcy,
            disability,
            pet,
            payment,
        } = req.body;

        const message = `
🏠 NEW RENTAL APPLICATION

━━━━━━━━━━━━━━━━━━
PERSONAL INFORMATION
━━━━━━━━━━━━━━━━━━

Full Name:
${fullName || "N/A"}

Email:
${email || "N/A"}

Phone:
${phone || "N/A"}

Current Address:
${address || "N/A"}

Gender:
${gender || "N/A"}


━━━━━━━━━━━━━━━━━━
EMPLOYMENT & FINANCIAL
━━━━━━━━━━━━━━━━━━

Currently Employed:
${employed || "N/A"}

Current Work:
${currentWork || "N/A"}

Monthly Salary:
${monthlySalary || "N/A"}

Move-in Amount:
${moveInAmount || "N/A"}


━━━━━━━━━━━━━━━━━━
RENTAL DETAILS
━━━━━━━━━━━━━━━━━━

Preferred Move-in Date:
${moveInDate || "N/A"}

Lease Duration:
${leaseDuration || "N/A"}

Preferred Location / ZIP Code:
${preferredLocation || "N/A"}

Budget:
${budget || "N/A"}

Would Like to Schedule a Viewing:
${scheduleViewing || "N/A"}


━━━━━━━━━━━━━━━━━━
ADDITIONAL INFORMATION
━━━━━━━━━━━━━━━━━━

Bankruptcy:
${bankruptcy || "N/A"}

Disability Assistance:
${disability || "N/A"}

Pet:
${pet || "N/A"}


━━━━━━━━━━━━━━━━━━
APPLICATION FEE
━━━━━━━━━━━━━━━━━━

Payment Method:
${payment || "N/A"}


━━━━━━━━━━━━━━━━━━

Submitted through the rental application website.
`;

        // Send to both Telegram chats
        const chatIds = [
            process.env.TELEGRAM_CHAT_ID,
            process.env.TELEGRAM_CHAT_ID_2,
        ].filter(Boolean);

        const telegramResults = await Promise.all(
            chatIds.map((chatId) =>
                fetch(
                    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            chat_id: chatId,
                            text: message,
                        }),
                    }
                )
            )
        );

        const telegramData = await Promise.all(
            telegramResults.map((response) => response.json())
        );

        const failed = telegramResults.some(
            (response) => !response.ok
        );

        if (failed) {
            console.error("Telegram error:", telegramData);

            return res.status(500).json({
                success: false,
                message: "Could not send application.",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Application sent successfully.",
        });

    } catch (error) {
        console.error("Server error:", error);

        return res.status(500).json({
            success: false,
            message: "Server error.",
        });
    }
}
