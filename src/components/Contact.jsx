import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
  faMapLocation,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <div>
      <Nav />
      <main>
        <div className="contact">
          <div className="contactInfo">
            <div className="box">
              <div className="icon"><FontAwesomeIcon icon={faMapLocation} flip /></div>
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
            <form className="contactForm">
              <h2>Contact</h2>
    
              <div className="inputBox">
                <label>
                Name &#42;
                <input type="text" name="contact" required="required"
                  // onChange={(e) => {
                  //   setName(e.target.value);
                  // }}
                />
                </label>
              </div>
    
              <div className="inputBox">
                <label>
                Email &#42;
                <input type="email" name="contact" required="@" 
                  // onChange={(e) => {
                  //   setEmail(e.target.value);
                  // }}
                />
                </label>
              </div>
    
              <div className="inputBox">
                <label>
                Number
                <input type="text" name="contact"
                  // onChange={(e) => {
                  //   setPhoneNumber(e.target.value);
                  // }}
                />
                </label>
              </div>
    
              <div className="inputBox">
                <label>
                Message &#42;
                <textarea name="contact" required="required" 
                  // onChange={(e) => {
                  //   setMessage(e.target.value);
                  // }}
                ></textarea>
                </label>
              </div>
    
              <div className="inputBox">
                <input type="submit" name="submit" value="Send" 
                  // onClick={submitMessage} 
                />
              </div>
            </form>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Contact;