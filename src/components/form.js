import React from "react"

const ContactForm = () => {
  return (
    <div>
      <hr />
      <form
        action="https://formspree.io/colinsinclairsmith2@gmail.com"
        method="POST"
        id="contact-form"
        className="ui form"
      >
        <div className="field">
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div className="field">
          <input type="email" name="email" placeholder="Email Address" />
        </div>
        <div className="field">
          <input type="number" name="number" placeholder="Contact Number" />
        </div>
        <div className="field">
          <input type="text" name="inquiry" placeholder="Nature of Inquiry" />
        </div>
        <div className="field">
          <textarea
            type="textarea"
            name="message"
            placeholder="Message"
          ></textarea>
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
