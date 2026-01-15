import React, { useState } from "react";
import "../styles/faqs.css";

const faqs = [
  {
    question: "How can I book tickets?",
    answer: "Choose an event, select seats and complete payment.",
  },
  {
    question: "Can I cancel my booking?",
    answer: "Cancellation depends on the organizer's policy.",
  },
  {
    question: "Is online payment secure?",
    answer: "Yes, all transactions are encrypted and secure.",
  },
  {
    question: "Will I get a refund if a show is cancelled?",
    answer: "Yes, refunds are processed automatically.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
        >
          <div className="faq-question">
            <span>{faq.question}</span>
            <span className="faq-icon">
              {activeIndex === index ? "−" : "+"}
            </span>
          </div>

          {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
