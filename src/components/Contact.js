import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { validateEmail } from '../utils/helpers';

function Contact() {
  
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    
    // Get form values
    const name = form.current.name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;
    
    // Validate form fields
    if (!name || !email || !message) {
      setErrorMessage("All fields are required");
      return;
    }
    
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }
    
    // Clear any previous error message
    setErrorMessage("");
    
    emailjs.sendForm('JamesPace.dev', 'template_6fzof6e', form.current, 'o5FMZrS-xlFYeJXwv')
    .then((result) => {
      console.log(result.text);
      console.log("message sent");
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      setErrorMessage("Failed to send message. Please try again.");
    });
  };
  const [userName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <section id="hit-me-up" className='contact'>
       <div className='flex-row'>
        <h2 className='section-title secondary-border'>Please contact me below!</h2>
         </div>
   <div className='contact-info'>
    <div>
      <h3>Hello there! {userName}</h3>
      <p>Would you like to get in touch with me?</p>
      <address>
        Yakima, WA <br />
        Phone: <a href='tel: 509.833.1104'>(509) 833-1104</a>
        <br />
        Email: {" "}
        <a href='mailto://jpace1104@msn.com'>
          jpace1104@msn.com
        </a>
      </address>
      {errorMessage && (
        <div>
          <p className='error-text'>{errorMessage}</p>
        </div>
      )}
    </div>
   </div>
  <div className='contact-form'>
    <h3>Contact Me!</h3>
    <form className='form' ref={form} onSubmit={sendEmail}>
      { /* Name */ }
      <label form='contact-name'></label>
      <input type="text" name="name" id='contact-name' placeholder='Your Name' />
      { /* Email */ }
      <label form='contact-email'> </label>
      <input type="email" name="user_email" id='contact-email' placeholder='Your Email' />
      { /* Message */ }
      <label form='contact-message'> </label>
      <textarea name="message" type="message" id='contact-message' placeholder='Your Message'/>
      <button type="submit" value="Send"> Submit </button>
    </form>
  </div>
  {errorMessage && (
    <div>
      <p className='error-text'></p>
    </div>
  )}
</section>
  )

  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const handleInputChange = (e) => {

  //   const { target } = e;
  //   const inputType = target.name;
  //   const inputValue = target.value;

// Based on the input type, we set the state of either email, username, and message
// if (inputType === "email") {
//   setEmail(inputValue);
// } else if (inputType === "userName") {
//   setUserName(inputValue);
// } else if (inputType === "message") {
//   setMessage(inputValue);
// }
// };

  // const handleFormSubmit = (e) => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   e.preventDefault();

  //   // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
  //   if (!validateEmail(email) || !userName) {
  //     setErrorMessage("Credentials not valid")
  //     // We want to exit out of this code block if something is wrong so that the user can correct it
  //     return;
  //     //then we check to see if te message is not valid. If so, we set an error message regarding the message.
  //   }

  //   if (!setMessage(message)) {
  //     setErrorMessage('Message is required.');
  //     return;

  //     }
  //     // If everything goes according to plan, we want to clear out the input after a successful submission.
  //     setUserName("");
  //     setMessage("");
  //     setEmail("");
  //     };

//   return (
//     <section id="hit-me-up" className='contact'>
//         <div className='flex-row'>
//           <h2 className='section-title secondary-border'>Please contact me below!</h2>
//         </div>
//         <div className='contact-info'>
//         <div>
//           <h3>Hello there! {userName}</h3>
//           <p>Would you like to get in touch with me?</p>
//           <address>
//             Yakima, WA <br />
//              Phone: <a href='tel: 509.833.1104'>(509) 833-1104</a>
//             <br />
//              Email: {" "}
//             <a href='mailto://jpace1104@msn.com'>
//               jpace1104@msn.com
//             </a>
//           </address>
//           <p>
//             <strong>Please share your feedback with me!</strong>
//           </p>
//           </div>

//           {/* contact form section  */}
//           <div className='contact-form'>
//             <h3>Contact Me!</h3>
//             <form className='form'>
//               { /* Name */ }
//               <label form="contact-name"> Your Name </label>
//               <input
//               value={userName}
//               name="userName"
//               onChange={handleInputChange}
//               type="text"
//               id="contact-name"
//               placeholder='Your Name'
//               />

//               { /* Email */ }
//               <label form="contact-email"> Your Email </label>
//               <input
//               value={email}
//               name="email"
//               onChange={handleInputChange}
//               type="email"
//               id="contact-email"
//               placeholder='Your Email'
//               />

//               { /* Message */ }
//               <label form="contact-message"> Your Message </label>
//               <textarea
//                 value={message}
//                 name="message"
//                 onChange={handleInputChange}
//                 type="message"
//                 id="contact-message"
//                 placeholder='Your Message'
//               />

//               <button type='button' onClick={handleFormSubmit}>
//                 Submit
//               </button>
//             </form>
//           </div>
//           {errorMessage && (
//           <div>
//             <p className="error-text">{errorMessage}</p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
 }

export default Contact;
