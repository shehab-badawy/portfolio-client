import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact me</h2>
      <p className="contact-text">
        I'm always interested in <br />
        learning about new things, <br />
        developing, or instructional <br />
        design work
      </p>
      <a href="mailto:shehab.badawy001@gmail.com" className="email-button">
        Email me
      </a>
    </section>
  );
}
