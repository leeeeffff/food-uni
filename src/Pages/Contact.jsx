import React from "react";
import Video from './file/vid3.mp4';
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="backgroundVideoContainer">
          <video autoPlay loop muted className="backgroundVideo">
            <source src={Video} type="video/mp4" />
          </video>
        </div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;