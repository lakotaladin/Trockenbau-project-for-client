import React, { useRef } from 'react'
import logo from '../resources/logo/FRTrockenbau.png';
import { FaBars, FaTimes } from "react-icons/fa";
import "../resources/nav.css";
import "../resources/impresum.css";
import { Link } from "react-router-dom";
import ScrollToTopButton from '../components/ScrollToTopButton';

function Impresum() {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
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
        <header>
          <a href="/"><img style={{ width: "170px" }} title="FR-Trockenbau logo" src={logo} alt="Logo" /></a>
          <nav ref={navRef}>
            <Link to="/" >Home</Link>
            <Link to="/galery">Galerie</Link>
            <Link to="/contact"  >Kontakt</Link>
            <Link to="/impresum"  >Impressum</Link>
            <button
              className="nav-btn nav-close-btn"
              onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button
            className="nav-btn"
            onClick={showNavbar}>
            <FaBars />
          </button>
        </header>


        {/* Section */}

        <div className='global-contact d-flex flex-column justify-content-center w-100 p-0 m-0'>

          {/* Title impressum */}
          <div className='d-flex w-100 justify-content-center m-0 p-5'>
            <h1 style={{ color: "#645124", fontWeight: "bold" }} >Impressum</h1>
          </div>
          {/* Impressum  */}

          <div className='impressum-div d-flex flex-column p-4'>
            <h2>Angaben gemäß § 5 TMG:</h2>
            <p>FR Trockenbau<br />Faruk Rizovic</p>
            <h3>Postanschrift:</h3>
            <p>Fromund-str.35<br />81547 München<br /></p>
            <h3>Kontakt:</h3>
            <p>Telefon: +49 (0) 176 644 1511 0<br />E-Mail: info@fr-trockenbau.de</p>
            <p></p><h3>Vertreten durch:</h3>
            <p>Faruk Rizovic<br /></p>
            <p></p><h3>Umsatzsteuer-Identifikationsnummer</h3>
            <p>146/168/41913<br /></p>
            <p><br /></p>
            <h3>Aufsichtsbehörde</h3>
            <p>Faruk Rizovic<br /></p>
            <p></p><h3>Zugelassen für:</h3>
            <p>Deutschland<br /></p>
            <p></p><h2>Hinweise zur Website</h2>
            <p></p><h3>Urheberrechtliche Hinweise</h3>
            <p>Faruk Rizovic<br /></p>
            <p></p><h3>Verantwortlich für journalistisch-redaktionelle Inhalte ist:</h3>
            <p>Faruk Rizovic<br /></p>
            <p></p><h2>Information gemäß § 36 VSBG</h2>
            <p>Gemäß § 36 VSBG (Verbraucherstreitbeilegungsgesetz – Gesetz über die alternative Streitbeilegung in Verbrauchersachen) erklärt der Betreiber dieser Website:</p>
            <p>Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            <p></p><p><em>Das Impressum wurde mit dem <a href="https://www.activemind.de/datenschutz/impressums-generator/">Impressums-Generator der activeMind AG</a> erstellt.</em></p>
          </div>


        </div>

        {/* Footer */}

        <footer className="footer-distributed ">

          <div className="footer-left">

            <img style={{ width: "300px", margin: "0", padding: "0" }} title="FR-Trockenbau logo" src={logo} alt="Logo" />

            <p className="footer-company-name">FR Trockenbau © 2017. All rights Reserved  <a style={{ color: "black" }} href="/privacy">Datenschutz</a> <a style={{ color: "black" }} href="/impresum">Impressum</a></p>
          </div>

          <div className="footer-center">

            <div>
              <i className="ri-map-pin-line"></i>
              <p><span>Fromund-str.35</span> 81547 München, Germany</p>
            </div>

            <div>
              <i className="ri-phone-line"></i>
              <a style={{ color: "black", textDecoration: "underline" }} href="tel:+49 017664415110">+49 (0) 176 644 1511 0</a>
            </div>

            <div>
              <i className="ri-mail-line"></i>
              <p><a style={{ color: "black", textDecoration: "underline" }} href="mailto:info@fr-trockenbau.de">info@fr-trockenbau.de</a></p>
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

export default Impresum