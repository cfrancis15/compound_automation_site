// FaqAccordion - one question open at a time, keyboard accessible buttons

import { useState } from "react";

function FaqAccordion(props) {
  const items = props.items;
  const headingId = props.headingId;
  const [openIndex, setOpenIndex] = useState(-1);

  function toggle(index) {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <section
      className="content-section section-primary"
      aria-labelledby={headingId}
      id="faq"
    >
      <div className="page-container faq-wrap">
        <h2 className="section-heading" id={headingId}>
          FAQ
        </h2>
        <div className="faq-list">
          {items.map(function renderItem(item, index) {
            const isOpen = openIndex === index;
            const buttonId = "faq-button-" + index;
            const panelId = "faq-panel-" + index;
            let itemClassName = "faq-item";
            if (isOpen) {
              itemClassName = itemClassName + " faq-item-open";
            }

            return (
              <div className={itemClassName} key={item.question}>
                <h3 className="faq-heading">
                  <button
                    type="button"
                    className="faq-question"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={function onToggle() {
                      toggle(index);
                    }}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  className="faq-panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FaqAccordion;
