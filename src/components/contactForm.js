// Framework Imports
import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
// Component Imports
import Button from "components/button";
// Style Imports
import "styles/components/contactForm.css";

const MailChimpForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value
    });

  return (
    <div className="ContactForm">
      <h2>Sign Up for Our Newsletter</h2>
      {status === "sending" && (
        <div className="ContactForm-message ContactForm-message--processing">
          Sending...
        </div>
      )}
      {status === "error" && (
        <div
          className="ContactForm-message ContactForm-message--error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="ContactForm-message ContactForm-message--success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <div className="ContactForm-input">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          ref={node => (name = node)}
          type="text"
          placeholder="Your name here"
        />
      </div>
      <div className="ContactForm-input">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          ref={node => (email = node)}
          type="email"
          placeholder="yourname@email.com"
        />
      </div>
      <Button type="ghost" onClick={submit}>
        Submit
      </Button>
    </div>
  );
};

class ContactForm extends Component {
  render() {
    const url =
      "https://BombShelterGames.us17.list-manage.com/subscribe/post?u=ca117c04f6c608b67c401f861&amp;id=450f0ed1cb";
    return (
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <MailChimpForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    );
  }
}
export default ContactForm;
