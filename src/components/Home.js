import React, { useState } from 'react';
import '../resources/home.css';
import 'animate.css';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import Navbar from './Navbar';
import ScrollToTopButton from './ScrollToTopButton';


function Home() {

  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setIsVisible(true);
    }
  };

  return (
    <>
      <div className='global d-flex flex-column w-100 p-0 m-0'>
        {/* Contact bar */}
        <div className='contact-bar w-100 gap-3 d-flex flex-row'>
          <i className="ri-phone-fill"></i>
          <p className='p-1 m-0'> +49 (0) 176 644 1511 0</p>
          <i className="ri-map-pin-line"></i>
          <p className='p-1 m-0'>Fromund-str.35 81547 München</p>
          <i className="ri-mail-line"></i>
          <p className='p-1 m-0'>info@fr-trockenbau.de</p>
        </div>

        {/* Navigation bar */}
        <Navbar />



        {/* Banner */}

        <div className='banner d-flex p-0 m-0'>
          <div className='banner-card d-flex flex-column m-0'>
            <h2>Imate li projekat s kojim možemo pomoći?</h2><br /><br />
            <p>Iskoristite više od 20 godina profesionalnog iskustva u MKudra Trockenbau GmbH iz Minhena.</p>
            <br />
            <br />
            <br />
            <button className='button-contact btn'>Kontakt</button>
          </div>
        </div>

        {/* Section */}

        <div className='section d-flex flex-column w-100 justify-content-center text-center' >

          {/* About us */}
          <div className='section-card d-flex flex-column p-0 m-0'>
            <h2>Drywall Minhen</h2><br /><br />
            <b><p style={{ fontSize: "18px" }} >Vaš stručnjak za sve radove na suhoj gradnji u Münchenu i okolici</p></b><br /><br /><br />

            <p>
              Dobrodošli na web stranicu MKudra Trockenbau GmbH iz Münchena - vaših pouzdanih majstora za suhozid za München i okolicu. Više od 20 godina iskustva u suhoj gradnji i brojni zadovoljni kupci govore u naše ime! Naš moto: „Sve iz jednog izvora“ – naše opsežne usluge obuhvataju uređenje enterijera Vaše nekretnine po principu „ključ u ruke“, kao i pravovremenu izolaciju krova ili sprovođenje propisanih mera zaštite od požara u Minhenu. MKudra Trockenbau GmbH u Minhenu se zalaže za fer cijene, kao i za brzo, čisto i po rasporedu izvođenje svih radova.
            </p><br />
            <p>
              Ostvarivanje želja naših kupaca i njihovo zadovoljstvo su naš glavni prioritet u Minhenu! Vaše ideje uvijek uključujemo u naše savjete i planiranje suhe gradnje – ali Vas također iskreno obavještavamo iz ugla iskusnog majstora ako nešto nije izvodljivo. Nudimo vam fer i transparentnu strukturu cijena, kao i profesionalnu i pravovremenu implementaciju u Münchenu i okolici. Rado ćemo vam reći gdje možete uštedjeti i gdje se isplati ulagati. Specijalisti smo za suvu gradnju i sledeće dodatne oblasti:
            </p>

          </div>

          {/* Counter */}

          <div className='animate__fadeIn counter w-100 d-flex gap-3 p-4 justify-content-center'>
            <div className='empty w-80 p-0 m-0'>
              {/* Empty space */}

            </div>
            <VisibilitySensor onChange={onVisibilityChange}>
              <div className='counter-global d-flex flex-column w-100 justify-content-center p-0 m-0'>
                {isVisible ? (
                  <div className='counter w-100 justify-content-center gap-3 d-flex flex-row p-0 m-0' >
                    <div className='d-flex  flex-column align-items-center m-4' ><div className='d-flex flex-row'><CountUp style={{marginLeft: "10%"}} start={0} end={10} duration={4} delay={0} />+</div><p style={{fontSize: "16px"}} >Godine iskustva</p></div>
                    <div className='d-flex flex-column align-items-center  m-4' ><div className='d-flex flex-row'><CountUp style={{marginLeft: "10%"}} start={30} end={104} duration={4} delay={0} />+</div><p style={{fontSize: "16px"}}>Uspješni projekti</p></div>
                    <div className='d-flex flex-column align-items-center  m-4' ><div className='d-flex flex-row'><CountUp style={{marginLeft: "10%"}} start={0} end={2} duration={4} delay={0} /></div><p style={{fontSize: "16px"}}>Administrativno osoblje</p></div>
                  </div>
                ) : (
                  <span style={{ color: "white" }} >.</span>
                )}
              </div>
            </VisibilitySensor>
          </div>

          {/* Services */}

          <div className='services-glob w-100 d-flex justify-content-center p-0 m-0'>

            <div className="services">
              <div className="container">
                <div className="heading">
                  <h1>Services</h1>
                </div>
                <div className="content">
                  <div className="box">
                    <div className="inner">
                      <div className="icon"><i className="fa fa-laptop"></i></div>
                      <h3>Web Development</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="inner">
                      <div className="icon"><i className="fa fa-code"></i></div>
                      <h3>Clean Code</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="inner">
                      <div className="icon"><i className="fa fa-mobile"></i></div>
                      <h3>Responsive Design</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="inner">
                      <div className="icon"><i className="fa fa-mobile"></i></div>
                      <h3>Responsive Design</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="inner">
                      <div className="icon"><i className="fa fa-mobile"></i></div>
                      <h3>Responsive Design</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="inner">
                      <div className="icon"><i className="fa fa-mobile"></i></div>
                      <h3>Responsive Design</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="inner">
                      <div className="icon"><i className="fa fa-mobile"></i></div>
                      <h3>Responsive Design</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="inner">
                      <div className="icon"><i className="fa fa-mobile"></i></div>
                      <h3>Responsive Design</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>


        {/* Footer */}

        <footer className="footer-distributed">

          <div className="footer-left">

            <h3>Company<span>logo</span></h3>

            <p className="footer-links">
              <a href="#">Home</a>
              ·
              <a href="#">Blog</a>
              ·
              <a href="#">Pricing</a>
              ·
              <a href="#">About</a>
              ·
              <a href="#">Faq</a>
              ·
              <a href="#">Contact</a>
            </p>

            <p className="footer-company-name">FR Trockenbau © 2017</p>

            <div className="footer-icons">

              <a href="#"><i className="ri-facebook-line"></i></a>
              <a href="#"><i className="ri-instagram-line"></i></a>
              <a href="#"><i className="ri-whatsapp-line"></i></a>
            </div>

          </div>

          <div className="footer-right">

            <p>Contact Us</p>

            <form action="#" method="post">

              <input type="text" name="email" placeholder="Email" />
              <textarea name="message" placeholder="Message"></textarea>
              <button>Send</button>

            </form>

          </div>

        </footer>

      </div>
      <ScrollToTopButton />
    </>
  )
}

export default Home