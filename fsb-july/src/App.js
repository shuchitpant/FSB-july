import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import GALLERY from "./GALLERY"
import ContactUS from "./ContactUS";
import Collapsible from 'react-collapsible';
import firebase from "./firebase.js" 
import Fade from 'react-reveal/Fade';

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
          
          <section class="CONTAINER-Top-Part" id="cont-top-part">

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
                  <p class="comp-name">
                FIVE SECONDS BLANK
              </p>
              <p class="tagline">
                " Feel scenarios blend "

              </p>
              <Link style={{ textDecoration: 'none' }} to="/CONTACTUS">
              <p class="contactus-p-mob">
                  CONTACT US
              </p>
              </Link>

              <div class="Socials-part-mob">
              <ul class="socials-icon-mob">
                  <a target="_blank" href="https://www.instagram.com/fivesecondsblank/"><img src={require("./Attachments/icons/icons8-instagram.svg")}/></a> 
                  <a target="_blank" href="https://www.youtube.com/channel/UCohxO9e4rpGaQG6XSEZyZFA"><img src={require("./Attachments/icons/icons8-play-button.svg")}/></a> 
                  <a target="_blank" href="https://www.facebook.com/fivesecondsblank"><img src={require("./Attachments/icons/icons8-facebook.svg")}/></a> 
                  <a target="_blank" href="https://www.linkedin.com/company/five-seconds-blank-productions-private-limited/"><img src={require("./Attachments/icons/icons8-linkedin.svg")}/></a> 
              </ul>

            </div>

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
      
      
      <Fade left>
      <Link style={{ textDecoration: 'none' }} to="/GALLERY">
      <section class="Gallery">
        <p class="Gal-head">
          O U R  W O R K
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
      </Fade>


      
      <section class="CONTAINER-ABT-us">

        <p class="abt-head">
          ABOUT US
        </p>
        
        <p class="ABT-us-big-text">
          
                  Five Seconds Blank Productions Private Limited is an audio-visual production
          company based out of Delhi and is expanding operations all over India. We aim to entertain
          and inform our audience by producing a variety of relatable content while maintaining an
          artistic and creative perspective. <br/> <br/>
          With an enhanced understanding of digital market trends, our team can
          suggest innovative sales strategies for promoting various products and
          services. We ensure cost efficacy in producing a variety of quality content. <br/> <br/>
          Our key responsibility areas entail writing campaigns and building
          awareness about various products and services by utilising digital media platforms like
          Instagram, Facebook, Twitter and YouTube. <br/> <br/>
          Five Seconds Blank Productions is a one stop solution for producing digital content,
          television and radio commercials, jingles, web-serials, documentary and corporate films,
          copywriting, creative writing and wedding and event coverage. <br/> <br/>
          Far from the cliché, Five Seconds Blank Productions incorporates the latest trends in
          advertising and film-making and applies it to serve you with the best. The vision of the
          company is to be the catalyst for you to strengthen your place and influence in the market. <br/> 
        </p>
          

      </section>
      

      
      <section class="Services-Offered">
        <p class="ourservices">
          OUR SERVICES
        </p>

        <div class="Super-services">
          
        <div class="services-one">
          <img class="PR" src={require("./Attachments/icons/VDGPHY.svg")} />
          <div class="services-one-head"> Video Production</div>
          <div class="services-one-content">
          Our Video Production team will offer innovative solutions by producing entertaining content for
every space, screen and wavelength. The aim is to provide an appropriate promotional media
mix to fit your budgets like pieces of a puzzle. We make an earnest effort to understand your
company’s core values and comprehend the product and services being offered by you for creating an appropriate marketing strategy for your organization. Our creative minds then engage in
presenting your brand, product or service through a contemporary story that is packaged in an
attractive audio-visual format.
          </div>

        </div>
        

        <div class="services-two">
        <img class="PR" src={require("./Attachments/icons/CAM.svg")} />
        <div class="services-one-head"> Photography</div>
          <div class="services-one-content">Our photography work speaks volumes for itself. We put our hearts into the click and bring life
into the picture. Professionalism is our bottom line and it is tinged with a passion so strong that
every picture or portrait is a piece of art by itself. Having the best photographers, great production professionals and highly skilled touch-up artists, we aim at providing the best photography
services.
          </div>
          
        </div>

        <div class="services-three">
        <img class="PR" src={require("./Attachments/icons/Music.svg")} />
          <div class="services-one-head"> Audio Production</div>
          <div class="services-one-content"> Our Department’s key responsibility areas entail designing, composing and arranging requisite
elements for background score, enhancing the aural quality of projects and managing recordings
and sound productions. Adding to the accolades, members of our team have done the
background score and sound design for ScoopWhoop's web-film, Sneh. The film was screened
at the Mumbai Film Festival in the year 2016. In 2018, we directed and produced music for
Popxo's web series 'Unmarried'. The series was featured on Hotstar. Our sound recording
engineer has worked on projects involving Bollywood celebrities such as Amitabh Bachchan,
Akshay Kumar, Ritesh Deshmukh, Bhumi Pednekar, Alia Bhatt, Ayushman Khurana, Sushant
Singh Rajput and Kirti Sanon.
          </div>

        </div>
        </div>

        <div class="Super-services-2">
        <div class="services-one">
        <img class="GD" src={require("./Attachments/icons/Graphic design.svg")} />
          <div class="services-one-head"> Graphic Designing</div>
          <div class="services-one-content">
          We aim at creating tasteful visual arts and aesthetics to suit your brand image and enhance your
brand identity. Our team has proficient artists, who manifest their creative expertise in adding
visual effects to enhance the quality and value of your storytelling. We develop designs that will
fit the mood you are aiming for. So tell us what you want. We can create anything the imagination
envisions.
          </div>

        </div>

        <div class="services-two">
        <img class="GD" src={require("./Attachments/icons/MARKET_DIGI.svg")} />
          <div class="services-one-head"> Digital Marketing</div>
          <div class="services-one-content">
          As your Digital Marketing team, we aim at providing the best experience navigating the fastevolving digital landscape and delivering quality digital marketing services for promoting your
brand at various digital media platforms such as Instagram, Facebook and YouTube. As the
digital connoisseurs & explorers, we delve deep into your brand. We then create, design, and
craft strategies and stories, that push you to the pinnacles of digital success. Whether you’re
looking to create a new website and digital strategy, up your branding game, launch compelling
social media campaigns or improve your ecommerce conversions, we’ve got the right solution for
you
          </div>

        </div>
          

          
        <div class="services-three">
        <img class="PR" src={require("./Attachments/icons/PR.svg")} />
          <div class="services-one-head"> Public Relations</div>
          <div class="services-one-content">
          We build and maintain a positive public image of your organization through various social media
campaigns and celebrity management on behalf of your organisation. Our team has the ability
to effectively draft and convey the internal and external proposals/messages to the masses. Our
aim is to inform the public, prospective customers, investors, partners, employees, and other
stakeholders and ultimately persuade them to maintain a positive or favorable view about your
organization, its leadership, products, or political decisions. We will Initiate collaborations with
brands for shoots and other promotional activities; Increasing brand value and brand recall. We
will be in touch with the target media on a regular basis, to get the brand featured in relevant
stories and articles across all forms of media.
          </div>

        </div>
          
          

        </div>


      </section>
      
      

      <section class="CONTAINER-ABT-US-PARTii">
        
      <p class="SUB_BRANDS_HEAD">
            OUR BRANDS
          </p>
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

        <section class="MTT">
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
