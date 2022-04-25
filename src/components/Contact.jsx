import React, { useState } from 'react';
import { useRef } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapLocation,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false);
  let formSubmit = () => {
    alert("Thank you for submitting a message! I'll get back to you shortly.");
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_86bu60l', 'template_ujr9ru2', form.current, 'y80bLz8CHJvGr4n8s')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <main>
      <Nav />
      <main>
        <div className="contact">
          <div className="contactInfo">
            <div className="box">
              <div className="icon"><FontAwesomeIcon icon={faMapLocation} /></div>
              <div className="text">
                <h3>Location</h3>
                <p>Charlotte, NC</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"><FontAwesomeIcon icon={faPhone} shake /></div>
              <div className="text">
                <h3>Phone</h3>
                <p>(980)230-3506</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"><FontAwesomeIcon icon={faEnvelope} bounce /></div>
              <div className="text">
                <h3>Email</h3>
                <p>santosisaac13690@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="form">
            <form ref={form} onSubmit={sendEmail}>
              <h2>Contact</h2>
    
              <div className="inputBox">
                <label>
                Name &#42;
                <input type="text" name="Name" required="required" />
                </label>
              </div>
    
              <div className="inputBox">
                <label>
                Email &#42;
                <input type="email" name="Email" required="@" />
                </label>
              </div>
    
              <div className="inputBox">
                <label>
                Phone Number
                <input type="text" name="Number"/>
                </label>
              </div>
    
              <div className="inputBox">
                <label>
                Message &#42;
                <textarea name="Message" required="required" ></textarea>
                </label>
              </div>
    
              <div className="inputBox">
                <input type="submit" name="submit" value="Send" onClick={formSubmit} />
              </div>
            </form>

          </div>
        </div>
      </main>
      <Footer />
    </main>
  )
}

export default Contact;