import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      
      <section class="CONTAINER-Top-Part">
          <p class="comp-name">
            FIVE SECONDS BLANK
          </p>

          <div class="Second-row-top">
            
            <div class="contactus">
              <p class="contactus-p">
                  CONTACT US
              </p>
            </div>

            <div class="logo-and-tagline">
              <img src={require("./Attachments/logo.png")} />
              <p class="tagline">
                Feel scenarios blend

              </p>

            </div>
            
            <div class="Socials-part">
              <ul class="socials-icon">
                <li>  <a href=""><img src="" alt=""/> lol </a> </li>
                <li>  <a href=""><img src="" alt=""/> lol </a> </li>
                <li>  <a href=""> <img src="" alt=""/> lol </a> </li>
                <li>  <a href=""> <img src="" alt=""/> lol </a> </li>
              </ul>

            </div>

          </div>


      </section>
        
      

      <section class="Gallery">
        <p class="Gal-head">
          Gallery
        </p>
        
        <div class="gallery-1-row">

          <div>
            <img src={require("./Attachments/wed shoot.jpg")} alt=""/>
          </div>

          <div>
          <img src={require("./Attachments/concept 2-com.jpg")} alt=""/>
          </div>

          <div>
            <img src={require("./Attachments/concept 3-com.jpg")} alt=""/>
          </div>

        </div>

        <div class="gallery-2-row">

          <div>
            <img src={require("./Attachments/concept 1-com.jpg")} alt=""/>
          </div>

          <div>
            <img src={require("./Attachments/porfolio-com.jpg")} alt=""/>
          </div>

        </div>



      </section>

      <section class="CONTAINER-ABT-us">
        <p class="abt-head">
          ABOUT US
        </p>

        <p class="ABT-us-big-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta repellendus cumque deleniti molestias possimus, aspernatur quod libero praesentium facere iste.
          <br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, vel provident nobis corporis magnam hic? <br/> Minus iste ipsum mollitia perferendis.
        </p>
        

      </section>

      <section class="CONTAINER-ABT-US-PARTii">
        <div class="ABT-us-2-subbrands">

          <div class="sub-logo">
            <img src={require("./Attachments/TGC_LOGO_lowermb.png")} alt=""/>
            <p class="sub-logo-intro">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, voluptates? <br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, porro? <br/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, odit?<br/>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, dolorum.
            </p>
          </div>

          <div class="sub-logo">
            <div class="cont-sub-log">
              <img src={require("./Attachments/San.D-Productions-Logo.png")} alt=""/>
                <p class="sub-logo-intro-two">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, voluptates?<br/>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, porro? <br/>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, odit?<br/>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, dolorum.
                </p>
            </div>
          </div>

        </div>



      </section>
      




    </div>
  );
}

export default App;
