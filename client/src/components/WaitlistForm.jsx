import { useState } from "react";
import supabase from "../utils/supabase.js";

function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const errs = {};
    if (!name.trim()) errs.name = "Name is required.";
    if (!email.trim()) errs.email = "Email is required.";
    else if (!email.includes("@")) errs.email = "Enter a valid email.";
    return errs;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("demo_leads").insert({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim() || null,
        source: "waitlist",
      });
      if (error) console.error("Waitlist insert failed:", error);
    } catch (err) {
      console.error("Waitlist insert failed:", err);
    }
    setIsSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="waitlist-success">You are on the list. We will be in touch.</p>
    );
  }

  return (
    <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
      <div className="waitlist-field">
        <input
          className="waitlist-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={function (e) {
            setName(e.target.value);
          }}
        />
        {errors.name && <p className="waitlist-error">{errors.name}</p>}
      </div>
      <div className="waitlist-field">
        <input
          className="waitlist-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={function (e) {
            setEmail(e.target.value);
          }}
        />
        {errors.email && <p className="waitlist-error">{errors.email}</p>}
      </div>
      <div className="waitlist-field">
        <input
          className="waitlist-input"
          type="tel"
          placeholder="Phone (optional)"
          value={phone}
          onChange={function (e) {
            setPhone(e.target.value);
          }}
        />
      </div>
      <button
        type="submit"
        className="cta-button waitlist-submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Joining..." : "Join the Waitlist"}
      </button>
    </form>
  );
}

export default WaitlistForm;
