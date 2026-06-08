import { useState } from "react";
import supabase from "../utils/supabase.js";
import "./LeadGate.css";

const DEMO_ACCESS_KEY = "demo_access";

function getStoredAccess() {
  try {
    return localStorage.getItem(DEMO_ACCESS_KEY) === "true";
  } catch (error) {
    return false;
  }
}

function setStoredAccess() {
  try {
    localStorage.setItem(DEMO_ACCESS_KEY, "true");
  } catch (error) {
    // Silently ignore if storage is unavailable
  }
}

function validateForm(name, email) {
  const errors = {};

  if (!name.trim()) {
    errors.name = "Name is required.";
  }

  if (!email.trim()) {
    errors.email = "Email is required.";
  } else if (!email.includes("@")) {
    errors.email = "Enter a valid email address.";
  }

  return errors;
}

/**
 * One-time lead capture gate before the Deal Screener demo.
 * Skipped when demo_access is already set in localStorage.
 */
function LeadGate({ children }) {
  const [hasAccess, setHasAccess] = useState(getStoredAccess);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function grantAccess() {
    setStoredAccess();
    setHasAccess(true);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm(name, email);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || null,
    };

    try {
      const { error } = await supabase.from("demo_leads").insert(payload);

      if (error) {
        console.error("Failed to save demo lead:", error);
      }
    } catch (error) {
      console.error("Failed to save demo lead:", error);
    }

    setIsSubmitting(false);
    grantAccess();
  }

  if (hasAccess) {
    return children;
  }

  return (
    <div className="lead-gate">
      <form className="lead-gate-form" onSubmit={handleSubmit} noValidate>
        <h1 className="lead-gate-heading">Enter your info to access the demo</h1>

        <div className="lead-gate-field">
          <label className="lead-gate-label" htmlFor="lead-gate-name">
            Name
          </label>
          <input
            id="lead-gate-name"
            className="lead-gate-input"
            type="text"
            name="name"
            value={name}
            onChange={function handleNameChange(event) {
              setName(event.target.value);
            }}
            autoComplete="name"
            required
          />
          {errors.name && <p className="lead-gate-error">{errors.name}</p>}
        </div>

        <div className="lead-gate-field">
          <label className="lead-gate-label" htmlFor="lead-gate-email">
            Email
          </label>
          <input
            id="lead-gate-email"
            className="lead-gate-input"
            type="email"
            name="email"
            value={email}
            onChange={function handleEmailChange(event) {
              setEmail(event.target.value);
            }}
            autoComplete="email"
            required
          />
          {errors.email && <p className="lead-gate-error">{errors.email}</p>}
        </div>

        <div className="lead-gate-field">
          <label className="lead-gate-label" htmlFor="lead-gate-phone">
            Phone <span className="lead-gate-optional">(optional)</span>
          </label>
          <input
            id="lead-gate-phone"
            className="lead-gate-input"
            type="tel"
            name="phone"
            value={phone}
            onChange={function handlePhoneChange(event) {
              setPhone(event.target.value);
            }}
            autoComplete="tel"
          />
        </div>

        <button
          type="submit"
          className="lead-gate-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "View Demo"}
        </button>
      </form>
    </div>
  );
}

export default LeadGate;
