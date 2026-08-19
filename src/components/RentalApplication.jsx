import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "rentalApplicationData";
const STEP_KEY = "rentalApplicationStep";

const initialFormData = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  gender: "",
  employed: "",
  currentWork: "",
  monthlySalary: "",
  moveInAmount: "",
  moveInDate: "",
  leaseDuration: "",
  bankruptcy: "",
  disability: "",
  pet: "",
  payment: "",
  confirmed: false,
};

export default function RentalApplication() {
  const [step, setStep] = useState(() => {
    const savedStep = localStorage.getItem(STEP_KEY);
    return savedStep ? Number(savedStep) : 1;
  });

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
      try {
        return {
          ...initialFormData,
          ...JSON.parse(savedData),
        };
      } catch {
        return initialFormData;
      }
    }

    return initialFormData;
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const formRef = useRef(null);

  const totalSteps = 7;

  /* =========================
     SAVE TO LOCAL STORAGE
  ========================= */

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(formData)
    );
  }, [formData]);

  useEffect(() => {
    localStorage.setItem(
      STEP_KEY,
      String(step)
    );
  }, [step]);

  /* =========================
     HANDLE INPUTS
  ========================= */

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
  };

  /* =========================
     SCROLL
  ========================= */

  const scrollToFormTop = () => {
    setTimeout(() => {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  /* =========================
     VALIDATE CURRENT STEP
  ========================= */

  const validateStep = () => {
    switch (step) {
      case 1:
        return (
          formData.fullName.trim() &&
          formData.email.trim() &&
          formData.phone.trim() &&
          formData.address.trim()
        );

      case 2:
        return (
          formData.gender &&
          formData.employed
        );

      case 3:
        return (
          formData.currentWork.trim() &&
          formData.monthlySalary.trim() &&
          formData.moveInAmount.trim()
        );

      case 4:
        return (
          formData.moveInDate &&
          formData.leaseDuration.trim()
        );

      case 5:
        return (
          formData.bankruptcy &&
          formData.disability &&
          formData.pet.trim()
        );

      case 6:
        return formData.payment;

      case 7:
        return formData.confirmed;

      default:
        return true;
    }
  };

  /* =========================
     NEXT STEP
  ========================= */

  const nextStep = () => {
    if (!validateStep()) {
      setError(
        "Please complete all required fields before continuing."
      );
      return;
    }

    setError("");

    if (step < totalSteps) {
      setStep((previous) => previous + 1);
      scrollToFormTop();
    }
  };

  /* =========================
     PREVIOUS STEP
  ========================= */

  const previousStep = () => {
    setError("");

    if (step > 1) {
      setStep((previous) => previous - 1);
      scrollToFormTop();
    }
  };

  /* =========================
     SUBMIT
  ========================= */

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateStep()) {
      setError("Please confirm the agreement before submitting.");
      return;
    }

    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/send-telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Failed to submit application."
        );
      }

      console.log("Application sent:", result);

      setSuccess(
        "Application submitted successfully. Thank you for completing your rental application."
      );

    } catch (error) {
      console.error("Submission error:", error);

      setError(
        "We could not submit your application. Please try again."
      );
    }
  };

  return (
    <section className="rental-application">

      {/* HEADER */}

      <div className="rental-header">

        <p className="rental-eyebrow">
          PROPERTY RENTAL
        </p>

        <h2>
          House Rental Application Form
        </h2>

        <p>
          Please complete the application below. Your
          information will be reviewed as part of the
          rental application process.
        </p>

      </div>


      {/* PROGRESS */}

      <div className="rental-progress">

        {Array.from({ length: totalSteps }).map(
          (_, index) => {
            const number = index + 1;

            return (
              <div
                key={number}
                className={
                  number <= step ? "active" : ""
                }
              >
                {String(number).padStart(2, "0")}
              </div>
            );
          }
        )}

      </div>


      {/* FORM */}

      <form
        ref={formRef}
        className="rental-form"
        onSubmit={handleSubmit}
      >

        {/* STEP 1 */}

        {step === 1 && (
          <div className="form-section">

            <h3>Personal Information</h3>

            <div className="form-grid">

              <div className="form-field">
                <label>
                  Full name <span>*</span>
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>


              <div className="form-field">
                <label>
                  Email Address <span>*</span>
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>


              <div className="form-field">
                <label>
                  Phone number <span>*</span>
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>


              <div className="form-field">
                <label>
                  Current Address <span>*</span>
                </label>

                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

            </div>

          </div>
        )}


        {/* STEP 2 */}

        {step === 2 && (
          <div className="form-section">

            <h3>Personal Details</h3>

            <div className="form-grid">

              <div className="form-field">

                <label>
                  Gender <span>*</span>
                </label>

                <div className="radio-group">

                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={
                        formData.gender === "Male"
                      }
                      onChange={handleChange}
                    />
                    Male
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={
                        formData.gender === "Female"
                      }
                      onChange={handleChange}
                    />
                    Female
                  </label>

                </div>

              </div>


              <div className="form-field">

                <label>
                  Are you currently employed?{" "}
                  <span>*</span>
                </label>

                <div className="radio-group">

                  <label>
                    <input
                      type="radio"
                      name="employed"
                      value="Yes"
                      checked={
                        formData.employed === "Yes"
                      }
                      onChange={handleChange}
                    />
                    Yes
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="employed"
                      value="No"
                      checked={
                        formData.employed === "No"
                      }
                      onChange={handleChange}
                    />
                    No
                  </label>

                </div>

              </div>

            </div>

          </div>
        )}


        {/* STEP 3 */}

        {step === 3 && (
          <div className="form-section">

            <h3>
              Employment & Financial Information
            </h3>

            <div className="form-grid">

              <div className="form-field">

                <label>
                  Current work <span>*</span>
                </label>

                <input
                  type="text"
                  name="currentWork"
                  value={formData.currentWork}
                  onChange={handleChange}
                />

              </div>


              <div className="form-field">

                <label>
                  Monthly salary <span>*</span>
                </label>

                <input
                  type="text"
                  name="monthlySalary"
                  value={formData.monthlySalary}
                  onChange={handleChange}
                />

              </div>


              <div className="form-field full-width">

                <label>
                  How much do you have at hand to
                  secure the property/move in?{" "}
                  <span>*</span>
                </label>

                <input
                  type="text"
                  name="moveInAmount"
                  value={formData.moveInAmount}
                  onChange={handleChange}
                />

              </div>

            </div>

          </div>
        )}


        {/* STEP 4 */}

        {step === 4 && (
          <div className="form-section">

            <h3>Rental Details</h3>

            <div className="form-grid">

              <div className="form-field">

                <label>
                  Preferred move-in date{" "}
                  <span>*</span>
                </label>

                <input
                  type="date"
                  name="moveInDate"
                  value={formData.moveInDate}
                  onChange={handleChange}
                />

              </div>


              <div className="form-field">

                <label>
                  Intended time of lease{" "}
                  <span>*</span>
                </label>

                <input
                  type="text"
                  name="leaseDuration"
                  value={formData.leaseDuration}
                  onChange={handleChange}
                  placeholder="e.g. 12 months"
                />

              </div>

            </div>

          </div>
        )}


        {/* STEP 5 */}

        {step === 5 && (
          <div className="form-section">

            <h3>Additional Information</h3>

            <div className="form-grid">

              <div className="form-field">

                <label>
                  Have you ever declared bankruptcy?{" "}
                  <span>*</span>
                </label>

                <div className="radio-group">

                  <label>
                    <input
                      type="radio"
                      name="bankruptcy"
                      value="Yes"
                      checked={
                        formData.bankruptcy === "Yes"
                      }
                      onChange={handleChange}
                    />
                    Yes
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="bankruptcy"
                      value="No"
                      checked={
                        formData.bankruptcy === "No"
                      }
                      onChange={handleChange}
                    />
                    No
                  </label>

                </div>

              </div>


              <div className="form-field">

                <label>
                  Are you currently receiving disability
                  payments or assistance?{" "}
                  <span>*</span>
                </label>

                <div className="radio-group">

                  <label>
                    <input
                      type="radio"
                      name="disability"
                      value="Yes"
                      checked={
                        formData.disability === "Yes"
                      }
                      onChange={handleChange}
                    />
                    Yes
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="disability"
                      value="No"
                      checked={
                        formData.disability === "No"
                      }
                      onChange={handleChange}
                    />
                    No
                  </label>

                </div>

              </div>


              <div className="form-field full-width">

                <label>
                  Have a pet? Describe your pet below{" "}
                  <span>*</span>
                </label>

                <textarea
                  rows="5"
                  name="pet"
                  value={formData.pet}
                  onChange={handleChange}
                />

              </div>

            </div>

          </div>
        )}


        {/* STEP 6 */}

        {step === 6 && (
          <div className="form-section">

            <h3>Application Fee</h3>

            <p className="fee-text">
              A refundable application fee of $75 is
              required to process and review this
              application. Please indicate your preferred
              payment method.
            </p>

            <div className="payment-options">

              <label>
                <input
                  type="radio"
                  name="payment"
                  value="Chime"
                  checked={
                    formData.payment === "Chime"
                  }
                  onChange={handleChange}
                />
                Chime
              </label>

              <label>
                <input
                  type="radio"
                  name="payment"
                  value="PayPal"
                  checked={
                    formData.payment === "PayPal"
                  }
                  onChange={handleChange}
                />
                PayPal
              </label>

              <label>
                <input
                  type="radio"
                  name="payment"
                  value="Apple Pay"
                  checked={
                    formData.payment === "Apple Pay"
                  }
                  onChange={handleChange}
                />
                Apple Pay
              </label>

            </div>

          </div>
        )}


        {/* STEP 7 */}

        {step === 7 && (
          <div className="form-section agreement-section">

            <h3>Review & Confirmation</h3>

            <p>
              By submitting this application you agree:
            </p>

            <ol>

              <li>
                The information provided herein is complete
                and accurate. Providing incomplete or false
                information could result in rejection of
                the application.
              </li>

              <li>
                Submission of this application does not
                guarantee a room lease. A lease is reserved
                only upon signing of a completed lease
                agreement by all parties.
              </li>

              <li>
                Additional information may be required to
                process your application. Our management
                team will contact you if necessary.
              </li>

            </ol>

            <label className="confirm-check">

              <input
                type="checkbox"
                name="confirmed"
                checked={formData.confirmed}
                onChange={handleChange}
              />

              <span>I CONFIRM</span>

            </label>

          </div>
        )}


        {/* ERROR */}

        {error && (
          <p className="rental-form-error">
            {error}
          </p>
        )}


        {/* SUCCESS */}

        {success && (
          <div className="rental-form-success">
            <strong>Application Submitted Successfully</strong>
            <p>{success}</p>
          </div>
        )}


        {/* NAVIGATION */}

        <div className="rental-navigation">

          {step > 1 && (
            <button
              type="button"
              className="rental-back"
              onClick={previousStep}
            >
              ← Back
            </button>
          )}

          {step < totalSteps && (
            <button
              type="button"
              className="rental-next"
              onClick={nextStep}
            >
              Continue →
            </button>
          )}

          {step === totalSteps && (
            <button
              type="submit"
              className="rental-submit"
            >
              Submit Application
            </button>
          )}

        </div>

      </form>

    </section>
  );
}