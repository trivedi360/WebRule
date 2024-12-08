// import React from "react";
import emailjs from "emailjs-com";

function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    const name = document.getElementById("Name").value.trim();
    const email = document.getElementById("Email").value.trim();
    const message = document.querySelector("textarea").value.trim();

    if (name.length === 0 || email.length === 0 || message.length === 0) {
      alert("Please fill in all fields.");
      return;
    }

    if (name.length <= 4) {
      alert("Name length must be more than 4 letters.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Invalid email");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        templateParams,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          alert("Email sent successfully!");
        },
        (error) => {
          alert(`Failed to send email. Please try again later. Error: ${error}`);
        }
      );
  }

  return (
    <div className="parent">
      <h2 className="large-font">Contact Us</h2>
      <section className="contact-form">
        <div className="form-item">
          <input id="Name" type="text" placeholder=" " />
          <label htmlFor="" className="label-for">Name</label>
        </div>
        <div className="form-item">
          <input id="Email" type="text" placeholder=" " />
          <label htmlFor="" className="label-for">Email</label>
        </div>
        <div className="form-item">
          <textarea name="" placeholder="Your message..."></textarea>
        </div>
        <div className="btn-item">
          <button onClick={sendEmail}>Get In Touch</button>
          <h6>or email us at webrule.contact@gmail.com</h6>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
