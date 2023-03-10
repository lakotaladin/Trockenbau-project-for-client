import React, { useState } from 'react';
import '../resources/home.css';
import CountUp from 'react-countup';
import logo from '../resources/logo/FRTrockenbau.png';
import VisibilitySensor from "react-visibility-sensor";
import Navbar from './Navbar';
import ScrollToTopButton from './ScrollToTopButton';
import { Link } from 'react-router-dom';
import icon1 from '../resources/logo/icon1.png';
import icon2 from '../resources/logo/icon2.png';
import icon3 from '../resources/logo/icon3.png';
import icon4 from '../resources/logo/icon4.png';
import icon5 from '../resources/logo/icon5.png';
import icon6 from '../resources/logo/icon6.png';
import icon7 from '../resources/logo/icon7.png';
import icon8 from '../resources/logo/icon8.png';


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
          <div className='banner-card d-flex flex-column'>
            <b><h3>Haben Sie ein Projekt bei dem wir helfen können?</h3></b><br /><br />
            <p>Profitieren Sie von über 6 Jahren Berufserfahrung der Firma FR Trockenbau aus München.</p>
            <br />
            <br />
            <br />
            <Link to="/contact"><button className='button-contact btn'>Kontakt</button></Link>
          </div>
        </div>


        {/* Section */}

        <div className='section d-flex flex-column w-100 justify-content-center text-center' >

          {/* About us */}
          <div className='section-card d-flex flex-column p-0 m-0'>
            <h1 style={{ color: "#645124" }}>Trockenbau München</h1><br /><br />
            <b><p style={{ fontSize: "16px", margin: "auto" }} >Ihr Spezialist für alle Trockenbauarbeiten in und um München</p></b><br /><br /><br />

            <p>
            Herzlich willkommen auf der Webseite der FR Trockenbau aus München - Ihre zuverlässigen Meister für Trockenbau in München und Umgebung. Über 6 Jahre Erfahrung im Trockenbau und zahlreiche zufriedene Kunden sprechen für uns! Unser Motto: "Alles aus einer Hand" - Unsere umfassenden Dienstleistungen umfassen die Inneneinrichtung Ihrer Immobilie nach dem "schlüsselfertigen" Prinzip sowie die rechtzeitige Dachisolierung oder die Umsetzung vorgeschriebener Brandschutzmaßnahmen in München. Die FR Trockenbau in München setzt sich für faire Preise sowie für eine schnelle, saubere und termingerechte Ausführung aller Arbeiten ein.
            </p><br />
            <p>
            "Die Erfüllung der Wünsche unserer Kunden und ihre Zufriedenheit haben in München oberste Priorität! Wir integrieren Ihre Ideen immer in unsere Beratung und Planung des Trockenbaus - informieren Sie jedoch auch ehrlich aus der Sicht eines erfahrenen Meisters, wenn etwas nicht umsetzbar ist. Wir bieten Ihnen eine faire und transparente Preisstruktur sowie eine professionelle und rechtzeitige Umsetzung in München und Umgebung. Gerne zeigen wir Ihnen, wo Sie sparen können und wo sich Investitionen lohnen. Wir sind Spezialisten für Trockenbau und folgende zusätzliche Bereiche:
            </p>

          </div>

          {/* Fixed-background */}

          <div className='div-fixed d-flex w-100 p-0' >
            <div className='fixed-background w-100 m-0 p-0' >
              {/* CSS BACKGROUND */}
            </div>
          </div>

          {/* Services */}

          <div id="services" className='services-glob w-100 d-flex justify-content-center p-0 m-0'>

            <div className="services">
              <div className="container">
                <div className="heading">
                  <h1  style={{ color: "#645124" }}>Leistungen</h1>
                </div>
                <div className="content">
                  <div className="box">
                    <div className="inner">
                      <div className="icon"><img title="Trockenbau arbeiten" style={{width: "60px"}} src={icon1} alt="icon1"/></div>
                      <h3>Trockenbau arbeiten</h3>
                      <p style={{fontSize: "14px"}} >Wir kennen uns mit dem Baustoff bestens aus und beraten Sie kompetent und unkompliziert, welche Trockenbau-Baustoffe für Sie und Ihre Immobilie in München am besten geeignet sind.</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="inner">
                      <div className="icon"><img title="Dachböden" style={{width: "60px"}} src={icon2} alt="icon2"/></div>
                      <h3>Dachböden</h3>
                      <p>Unser Bauunternehmen aus München bietet hochwertige Dienstleistungen für die Renovierung und den Bau von Dachböden an, die Ihnen eine maximale Raumnutzung in Ihrem Zuhause ermöglichen. Unser Expertenteam wird sicherstellen, dass Ihr Dachboden modern, funktional und komfortabel ist und Ihren individuellen Bedürfnissen entspricht. Kontaktieren Sie uns und erfahren Sie, wie wir Ihren Dachboden in einen wunderschönen und nützlichen Raum verwandeln können.</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="inner">
                      <div className="icon"><img title="Verputzen" style={{width: "60px"}} src={icon3} alt="icon3"/></div>
                      <h3>Verputzen</h3>
                      <p>Unsere Baufirma FR Trockenbau aus München ist auf Verputzen spezialisiert. Wir bieten professionelle Dienstleistungen im Bereich Trockenbau an und sind in der Lage, alle Arten von Wänden im Innen- und Außenbereich zu verputzen. Wir verwenden hochwertige Materialien und Technologien, um qualitativ hochwertige und präzise Arbeit zu gewährleisten. Kontaktieren Sie uns für weitere Informationen über unser Angebot und faire Preise. Wir helfen Ihnen gerne bei Ihrem nächsten Bauprojekt in München und Umgebung.</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="inner">
                      <div className="icon"><img title="Verblenden der Wände" style={{width: "60px"}} src={icon4} alt="icon4"/></div>
                      <h3>Verblenden der Wände</h3>
                      <p>Die deutsche Bauunternehmung FR Trockenbau aus München ist auf das Verblenden der Wände spezialisiert. Dabei wird eine zusätzliche Schicht an der Außenwand eines Gebäudes angebracht, um eine optisch ansprechende und robuste Oberfläche zu erzielen. Die Verblendung aus verschiedenen Materialien wird präzise und professionell durch fachkundige Mitarbeiter angebracht.</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="inner">
                      <div className="icon"><img title="Branscutz" style={{width: "60px"}} src={icon5} alt="icon5"/></div>
                      <h3>Branscutz</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="inner">
                      <div className="icon"><img title="Abakus deke" style={{width: "60px"}} src={icon6} alt="icon6"/></div>
                      <h3>Abakus deke</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="inner">
                      <div className="icon"><img title="Tektalan" style={{width: "60px"}} src={icon7} alt="icon7"/></div>
                      <h3>Tektalan</h3>
                      <p>FR Trockenbau beschäftigt sich mit Tektalan, einer nichtbrennbaren dreischichtigen Verbundplatte aus Holzwolle mit einem Kern aus hochdichter Mineralwolle und einer beidseitigen Verkleidung aus Holzwolle mit einem Zementbindemittel.</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="inner">
                      <div className="icon"><img title="Abbruch" style={{width: "60px"}} src={icon8} alt="icon8"/></div>
                      <h3>Abbruch</h3>
                      <p>Die Baufirma FR Trockenbau beschäftigt sich mit Abbrucharbeiten.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Counter */}

        <div className='counter d-flex gap-3 p-2 justify-content-center'>
          <VisibilitySensor onChange={onVisibilityChange}>
            <div className='counter-global d-flex flex-column justify-content-center p-0 m-0'>
              {isVisible ? (
                <div className='w-100 justify-content-center gap-3 d-flex flex-row p-0 m-0' >
                  <div className='d-flex  flex-column align-items-center m-4' ><div className='count-font d-flex flex-row'><CountUp className='count-font'  start={0} end={10} duration={3} delay={0} />+</div><p>Jahre Erfahrung</p></div>
                  <div className='d-flex flex-column align-items-center  m-4' ><div className='count-font d-flex flex-row'><CountUp className='count-font' start={30} end={104} duration={3} delay={0} />+</div><p>Erfolgreiche Projekte</p></div>
                  <div className='d-flex flex-column align-items-center  m-4' ><div className='count-font d-flex flex-row'><CountUp className='count-font' start={0} end={2} duration={3} delay={0} /></div><p>Administrative Mitarbeiter</p></div>
                </div>
              ) : (
                <span style={{ color: "white" }} >.</span>
              )}
            </div>
          </VisibilitySensor>
        </div>

        {/* Footer */}

        <footer className="footer-distributed ">

          <div className="footer-left">

            <img style={{ width: "300px", margin: "0", padding: "0" }} title="FR-Trockenbau logo" src={logo} alt="Logo" />

            <p className="footer-company-name">FR Trockenbau © 2017. All rights Reserved</p>
          </div>

          <div className="footer-center">

            <div>
              <i className="ri-map-pin-line"></i>
              <p><span>Fromund-str.35</span> 81547 München, Germany</p>
            </div>

            <div>
              <i className="ri-phone-line"></i>
              <p>+49 (0) 176 644 1511 0</p>
            </div>

            <div>
              <i className="ri-mail-line"></i>
              <p><a style={{color: "black", textDecoration: "underline"}} href="mailto:info@fr-trockenbau.de">info@fr-trockenbau.de</a></p>
            </div>

          </div>

          <div className="footer-right">

            <p className="footer-company-about">
              <span>Über uns</span>
              Ihr Experte für Trockenbauarbeiten in München und Umgebung. Profitieren Sie von mehr als 6 Jahren professioneller Erfahrung bei FR Trockenbau in München. Selbstverständlich unterbreiten wir Ihnen gerne ein faires Angebot. Mit einem absoluten Bewusstsein für Qualität und höchster Kompetenz führt unser Team von Faruk Rizovic Trockenbau in München und Umgebung Bestellungen auf eine hochwertige und saubere Weise aus. FR Trockenbau - Ihr zuverlässiger Partner in München.
            </p>

          </div>

        </footer>

      </div>
      <ScrollToTopButton />
    </>
  )
}

export default Home