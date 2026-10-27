// BookCallLink - Cal.com booking link that reports book_call_click when analytics is present

import { CAL_LINK } from "../config.js";
import { trackEvent } from "../track.js";

function BookCallLink(props) {
  const className = props.className || "";
  const children = props.children;
  const ariaLabel = props.ariaLabel;

  function handleClick(event) {
    trackEvent("book_call_click", {
      page: window.location.pathname,
    });

    if (props.onClick) {
      props.onClick(event);
    }
  }

  return (
    <a
      href={CAL_LINK}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

export default BookCallLink;
