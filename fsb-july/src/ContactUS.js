import React from 'react';
import './GALLERY.css';
import './ContactUS.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ContactUS() {
    return (
      <div>
          <Link style={{ textDecoration: 'none' }} to="/">
          <h1 class="closeHome">
              X Home
          </h1>
          </Link>
        
            <h1 class="Contactus-heading">
                Contact Us
            </h1>

            <div class="Form" > 
                      <form >
                        <div class="input-fields">
                            <input type="text"  name="name" class="input" placeholder="Name" />
                            <input type="text" name="email" class="input" placeholder="Email Address"  />
                            <input type="text" class="input" placeholder="Phone" />
                            <input type="text" class="input" placeholder="Subject" />
                        </div>
                        <div class="msg">
                            <textarea placeholder="Message" name="message" type="text" ></textarea>
                            <button onClick={ sal }  type="submit" id="btn-o"><div class="btn">  send </div></button>
                        </div>
                      </form>
                        
                        <div class="dets">
                            <h1>Reach us at:</h1>
                          <h2>Phone: <br/>+91 99997 83321 <br/><br/>fivesecondsblank@gmail.com<br/><br/></h2>
                          <h2>
                              
                              <a class="map1" target="_blank" href="https://www.google.com/maps/place/Five+Seconds+Blank+Productions+Pvt.+Ltd/data=!3m1!4b1!4m2!3m1!1s0x390ce371ce7d77ab:0x9c73b9cf3c766e7b"> <h3 class="maps">Click to find out <br/> the Maps Location </h3></a>

                              </h2>
                        </div>
                    </div>
      </div>
      
   );


}


export default ContactUS;

function sal(){
            return(
                alert("Thanks for submitting! We will get back to you ASAP"),
                console.log("Checking if the prompt works fine or not")
            );
}