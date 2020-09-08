import React from 'react';
import './GALLERY.css';
import './ContactUS.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import firebase from "./firebase" 

function ContactUS() {

    

    const [Name, setTitle] = useState('')
    const [Email, setTime] = useState('')
    const [Phone, setPhone] = useState('')
    const [Subject, setSubject] = useState('')
    const [Message, setMessage] = useState('')

    function onSubmit(e) {
        e.preventDefault()

        firebase
            .firestore()
            .collection('Contact Us Entries')
            .add({
                Name,Email, Phone, Subject, Message
            })
            .then(() => {
                setTitle('')
                setTime('')
                setPhone('')
                setSubject('')
                setMessage('')
            })
    }



    return (
      <div class="ULTIMATE-contact-us">
          <Link style={{ textDecoration: 'none' }} to="/">
          <h1 class="closeHome">
              X 
          </h1>
          </Link>
        
            <h1 class="Contactus-heading">
                Contact Us
            </h1>

            <div class="Form" onSubmit={onSubmit}> 
                      <form >
                        <div class="input-fields">
                            <input type="text"  name="name" class="input" placeholder="Name"  value={Name} onChange={e => setTitle(e.currentTarget.value) }  />
                            <input type="text" name="email" class="input" placeholder="Email Address"  value={Email} onChange={e => setTime(e.currentTarget.value)}  />
                            <input type="text" class="input" placeholder="Phone" value={Phone} onChange={e => setPhone(e.currentTarget.value) }  />
                            <input type="text" class="input" placeholder="Subject"  value={Subject} onChange={e => setSubject(e.currentTarget.value) }  />
                        </div>
                        <div class="msg">
                            <textarea placeholder="Message"  value={Message} onChange={e => setMessage(e.currentTarget.value) } ></textarea>
                            <button onClick={ sal }  id="btn-o"><div class="btn">  send </div></button>
                        </div>
                      </form>
                        
                        <div class="dets">
                            <h1>  Reach us at:</h1>
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