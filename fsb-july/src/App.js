import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import GALLERY from "./GALLERY"
import ContactUS from "./ContactUS";
import Collapsible from 'react-collapsible';

function App() {
  return (
    <Router>
      
    <div>
      <Switch>
        <Route path="/GALLERY" component={GALLERY} />
        <Route path="/" exact component={Home} />
        <Route path="/CONTACTUS" component={ContactUS} />
      </Switch>

    </div>
    </Router>
  );
}


const Home = () => (
  <div>
          
          <section class="CONTAINER-Top-Part">
          <p class="comp-name">
            FIVE SECONDS BLANK
          </p>

          <div class="Second-row-top">
            
            <div class="contactus">
              <Link style={{ textDecoration: 'none' }} to="/CONTACTUS">
              <p class="contactus-p">
                  CONTACT US
              </p>
              </Link>
            </div>

            <div class="logo-and-tagline">
              <img src={require("./Attachments/logo.png")} />
              <p class="tagline">
                Feel scenarios blend

              </p>

            </div>
            
            <div class="Socials-part">
              <ul class="socials-icon">
                <ul>  <a target="_blank" href="https://www.instagram.com/fivesecondsblank/"><img src={require("./Attachments/icons/icons8-instagram.svg")}/>  </a> </ul>
                <ul>  <a target="_blank" href="https://www.youtube.com/channel/UCohxO9e4rpGaQG6XSEZyZFA"><img src={require("./Attachments/icons/icons8-play-button.svg")}/>  </a> </ul>
                <ul>  <a target="_blank" href="https://www.facebook.com/fivesecondsblank"><img src={require("./Attachments/icons/icons8-facebook.svg")}/>  </a> </ul>
                <ul>  <a target="_blank" href="https://www.linkedin.com/company/five-seconds-blank-productions-private-limited/"><img src={require("./Attachments/icons/icons8-linkedin.svg")}/>  </a> </ul>
              </ul>

            </div>

          </div>


      </section>
        
      
      <Link style={{ textDecoration: 'none' }} to="/GALLERY">
      <section class="Gallery">
        <p class="Gal-head">
          G A L L E R Y
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
      </Link>

      <section class="CONTAINER-ABT-us">
        <p class="abt-head">
          ABOUT US
        </p>

        <p class="ABT-us-big-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta repellendus cumque deleniti molestias possimus, aspernatur quod libero praesentium facere iste.
          <br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, vel provident nobis corporis magnam hic? <br/> Minus iste ipsum mollitia perferendis.
        </p>
        

      </section>


      <section class="Services-Offered">
        <p class="ourservices">
          OUR SERVICES
        </p>
        <div class="services-one">
          <div class="services-one-head"> Photography</div>
          <div class="services-one-content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, asperiores.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas similique nam ducimus, consectetur sequi consequatur
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt aperiam maiores quas reprehenderit qui est magnam illo nisi, adipisci accusantium culpa, earum nostrum autem cum? Quibusdam labore vero perferendis alias.
          </div>

        </div>

        <div class="services-two">
          <div class="services-one-content"> Lorem ipsum dolor sit amet consectetur adipisicing Debitis, 
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, aperiam labore, suscipit officiis maxime quasi nisi consequatur tempora blanditiis sunt a, animi dignissimos iusto sit autem doloremque ea itaque eum.
          Lorem ipsum dolor sit amet.
          asperiores.
          
          </div>
          <div class="services-one-head"> Digital</div>
        </div>

        <div class="services-three">
          <div class="services-one-head"> Sound</div>
          <div class="services-one-content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, asperiores.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis praesentium fugiat libero sit error, dolores sint officiis molestiae autem deleniti tenetur facere provident quaerat magnam cupiditate delectus fuga non quisquam?
          
          </div>

        </div>




      </section>

      <section class="CONTAINER-ABT-US-PARTii">
        <div class="ABT-us-2-subbrands">

          <div class="sub-logo">

            <a target="_blank" href="https://www.instagram.com/thegroovincat/" class="removing-underline">
            <img src={require("./Attachments/TGC_LOGO_lowermb.png")} alt=""/>
            </a>
            <p class="sub-logo-intro">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, voluptates?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, voluptates?  <br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, porro? <br/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, odit?<br/>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, dolorum.
            </p>
            
          </div>

          <div class="sub-logo-2">
            <div class="cont-sub-log">
            <a target="_blank" href="https://www.instagram.com/san.dproductions/" class="removing-underline">
              <img src={require("./Attachments/San.D-Productions-Logo.png")} alt=""/>
              </a>
                <p class="sub-logo-intro-two">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, voluptates?<br/>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, porro? <br/>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, odit?<br/>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, dolorum.
                </p>
            </div>
          </div>

        </div>
         
         <h1><br/></h1>

        <section>
        {/* Meet the team section */}

      <h3>
                <Collapsible trigger="Meet the team">
                  <div>
                      <p>
                      <a target="_blank" href="https://www.instagram.com/musicallyyoursvishrut/" class="removing-underline"> 
                        <img src={require("./Attachments/TGC_LOGO_lowermb.png")} class="logoSand" width="auto" alt="person"></img>
                      </a>
                         <br /> 
                            <p class="director-tt"> Director <br/> Vishrut Pande</p>
                      </p>
                  </div>

                  <div>
                      <p> 
                      <a target="_blank" href="https://www.instagram.com/vaishalisahu_/" class="removing-underline">  
                        <img src={require("./Attachments/TGC_LOGO_lowermb.png")} class="logoSand" width="auto" alt="person"></img>
                        </a>
                         <br /> 
                            <p  class="director-tt"> Director <br/> Vaishali Sahu</p>
                      </p>
                  </div>
                  
                  
                </Collapsible>
                
          </h3>




      </section>
      

      </section>

      



  </div>
);

export default App;
