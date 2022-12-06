import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [email, setEmail] = useState("")
  const [userName, setUserName] = useState("")
  const [message, setMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Credentials not valid")
      return;
    }
     
      if (!setMessage(message)) {
        setErrorMessage('Email is required.');
        return;

      } 
      setUserName("");
      setMessage("");
      setEmail("");
      };
      
  return (
    <section id="hit-me-up" className='contact'>
        <div className='flex-row'>
          <h2 className='section-title secondary-border'>Hit me up!</h2>
        </div>
        <div className='contact-info'>
        </div>
        <div>
          <h3>Hey there {userName}</h3>
          <p>Would you like to get in touch with me?</p>
          <address>
            Yakima, WA <br />
            P: <a href='tel: 509.833.1104'>509.833.1104</a>
            <br />
            E: {" "}
            <a href='mailto://pacej2022@gmail.com'>
              pacej2022@gmail.com
            </a>
          </address>
          <p>
            <strong>Please share your feedback with me!</strong>
          </p>
          </div>

          <div className='conatact-form'>
            <h3>Contact Me!</h3>
            <form className='form'>
              { /* Name */ }
              <label for="contact-name"> Your Name </label>
              <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder='Your Name'
              />

              { /* Email */ }
              <label for="contact-email"> Your Email </label>
              <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder='Your Email'
              />

              { /* Message */ }
              <label for="contact-message"> Your Message </label>
              <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              id="contact-message"
              placeholder='Your Message'
              />

              <button type='button' onClick={handleFormSubmit}>
                Submit
              </button>
            </form>
          </div>
          {errorMessage && (
            <div>
              <p className='error-text'>{errorMessage}</p>
            </div>
          )}
          </div>
        </section>
  );
}

export default Contact;
