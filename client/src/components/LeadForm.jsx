// LeadForm - Web3Forms lead form. Submits with fetch and keeps the visitor's answers on error.

import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  WEB3FORMS_ACCESS_KEY,
  WEB3FORMS_ACCESS_KEY_PLACEHOLDER,
} from "../config.js";
import { trackEvent } from "../track.js";
import BookCallLink from "./BookCallLink.jsx";

const FORM_SUBJECT = "New lead: Free growth plan request";

function readUtm() {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
  };
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

function isValidPhone(value) {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 10) {
    return true;
  }
  if (digits.length === 11 && digits.charAt(0) === "1") {
    return true;
  }
  return false;
}

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Enter your name.";
  }
  if (!values.company.trim()) {
    errors.company = "Enter your company name.";
  }
  if (!isValidPhone(values.phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!isValidEmail(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  return errors;
}

function LeadForm(props) {
  const idPrefix = props.idPrefix;
  const heading = props.heading;
  const labelledBy = props.labelledBy;
  const submitted = props.submitted;
  const onSuccess = props.onSuccess;
  const location = useLocation();
  const formRef = useRef(null);
  const successRef = useRef(null);
  const [utm] = useState(readUtm);
  const [sentHere, setSentHere] = useState(false);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    city: "",
    goal: "",
  });

  const showSuccess = submitted || sentHere;

  useEffect(
    function focusSuccess() {
      if (sentHere && successRef.current) {
        successRef.current.focus();
      }
    },
    [sentHere]
  );

  function handleChange(event) {
    const field = event.target.name;
    const nextValue = event.target.value;

    setValues(function updateValues(current) {
      const next = Object.assign({}, current);
      next[field] = nextValue;
      return next;
    });

    setErrors(function updateErrors(current) {
      if (!current[field]) {
        return current;
      }
      const next = Object.assign({}, current);
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    const errorFields = Object.keys(nextErrors);
    if (errorFields.length > 0) {
      const firstInvalid = formRef.current.querySelector(
        '[name="' + errorFields[0] + '"]'
      );
      if (firstInvalid) {
        firstInvalid.focus();
      }
      return;
    }

    const formData = new FormData(formRef.current);
    if (formData.get("botcheck")) {
      setSentHere(true);
      if (onSuccess) {
        onSuccess();
      }
      return;
    }

    if (
      !WEB3FORMS_ACCESS_KEY ||
      WEB3FORMS_ACCESS_KEY === WEB3FORMS_ACCESS_KEY_PLACEHOLDER
    ) {
      setStatus("error");
      setErrorMessage(
        "This form is not set up yet. Please book a call instead."
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      let result = null;
      try {
        result = await response.json();
      } catch (parseError) {
        result = null;
      }

      if (response.ok && result && result.success) {
        trackEvent("form_submit", {
          page: location.pathname,
          form: idPrefix,
        });
        setStatus("idle");
        setSentHere(true);
        if (onSuccess) {
          onSuccess();
        }
        return;
      }

      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    } catch (networkError) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  if (showSuccess) {
    return (
      <div
        className="lead-form-card"
        role="status"
        tabIndex={-1}
        ref={successRef}
      >
        <p className="form-success-text">
          Got it. I'll look into your business and reach out within one
          business day. Want to skip the wait? Book a time now.
        </p>
        <BookCallLink className="cta-button lead-form-submit">
          Book a time now
        </BookCallLink>
      </div>
    );
  }

  const nameId = idPrefix + "-name";
  const companyId = idPrefix + "-company";
  const phoneId = idPrefix + "-phone";
  const emailId = idPrefix + "-email";
  const cityId = idPrefix + "-city";
  const goalId = idPrefix + "-goal";
  const headingId = heading ? idPrefix + "-heading" : labelledBy;
  const isSubmitting = status === "submitting";

  return (
    <div className="lead-form-card">
      {heading ? (
        <h2 className="lead-form-heading" id={headingId}>
          {heading}
        </h2>
      ) : null}
      <form
        ref={formRef}
        className="lead-form"
        method="POST"
        action="https://api.web3forms.com/submit"
        noValidate
        aria-labelledby={headingId}
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
        <input type="hidden" name="subject" value={FORM_SUBJECT} />
        <input type="hidden" name="page" value={location.pathname} />
        <input type="hidden" name="utm_source" value={utm.utm_source} />
        <input type="hidden" name="utm_medium" value={utm.utm_medium} />
        <input type="hidden" name="utm_campaign" value={utm.utm_campaign} />

        <div className="form-honeypot" aria-hidden="true">
          <label htmlFor={idPrefix + "-botcheck"}>Leave this blank</label>
          <input
            id={idPrefix + "-botcheck"}
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="field">
          <label htmlFor={nameId}>Name</label>
          <input
            id={nameId}
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? nameId + "-error" : undefined}
          />
          {errors.name ? (
            <p className="field-error" id={nameId + "-error"}>
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor={companyId}>Company name</label>
          <input
            id={companyId}
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={errors.company ? "true" : "false"}
            aria-describedby={errors.company ? companyId + "-error" : undefined}
          />
          {errors.company ? (
            <p className="field-error" id={companyId + "-error"}>
              {errors.company}
            </p>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor={phoneId}>Phone</label>
          <input
            id={phoneId}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? phoneId + "-error" : undefined}
          />
          {errors.phone ? (
            <p className="field-error" id={phoneId + "-error"}>
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor={emailId}>Email</label>
          <input
            id={emailId}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? emailId + "-error" : undefined}
          />
          {errors.email ? (
            <p className="field-error" id={emailId + "-error"}>
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor={cityId}>
            City <span className="field-optional">(optional)</span>
          </label>
          <input
            id={cityId}
            name="city"
            type="text"
            autoComplete="address-level2"
            value={values.city}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor={goalId}>
            What's your biggest goal right now?{" "}
            <span className="field-optional">(optional)</span>
          </label>
          <textarea
            id={goalId}
            name="goal"
            rows="3"
            value={values.goal}
            onChange={handleChange}
          />
        </div>

        {status === "error" ? (
          <p className="form-banner-error" role="alert">
            {errorMessage}
          </p>
        ) : null}

        <button
          type="submit"
          className="cta-button lead-form-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Get my free growth plan"}
        </button>
      </form>
    </div>
  );
}

export default LeadForm;
