import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="p-5 bg-light">
      <div className="container">
        <h2>
          <b>Contact Me</b>
        </h2>
        <form id="contactForm">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input type="text" className="form-control" id="subject" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="custom-btn">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
