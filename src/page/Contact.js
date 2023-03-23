import React, { useRef, useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import '../resources/contact.css';
import logo from '../resources/logo/FRTrockenbau.png';
import scanqr from '../resources/images/scanqr.gif';
import qrcode from '../resources/images/phone.png';
import { Row, Col } from "antd";
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';


function Contact() {
  const [latitude] = useState(48.1115616);
  const [longitude] = useState(11.6179683);
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  const L = require("leaflet");

  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png")
  });

  return (
    <>
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

      {/* Contact */}

      <div className="d-flex justify-content-center align-items-center p-0" style={{ height: "100%", margin: "3%" }}>
        <div style={{ width: "90%" }}>
          <h3 style={{ color: "#645124", fontWeight: "bold", marginBottom: "1%", marginTop: "1%" }} >Kontaktieren Sie uns</h3>
          <b>Wir freuen uns auf Ihre Nachricht!</b><br />
          <div className='w-100 d-flex justify-content-center m-1'>
            <p className='p-2 w-100'>Sie können uns anrufen, uns eine mail senden oder hier das Kontaktformular ausfüllen, das Team freut sich auf Ihre Nachricht.</p>
          </div>
          <Row gutter={[16, 16]} className="flex-column p-3 flex-md-row">
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <ContactForm />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} className="mt-4 mt-md-0">
              <div className="info-div p-3 text-center gap-2">
                <img src={scanqr} alt="scan-qr-code-with-camera" style={{ width: "150px", height: "auto", marginBottom: "4%" }} /><br />
                <img src={qrcode} title="Phone QR Code" alt="QR-CODE" style={{ width: "230px", marginBottom: "4%" }} />
                <p><i style={{ fontSize: "18px" }} className="ri-phone-fill"></i>      Scanne den QR-Code für Kontaktdaten auf dem Telefon</p>
                <b><p>Fragen? Wünsche? Anregungen?</p></b>
                <p>Wir stehen Ihnen für Ihre Anfrage jederzeit gerne zur Verfügung.
                  Vereinbaren Sie mit uns einen Besichtigungstermin, wir erstellen Ihnen
                  für Ihr Projekt gerne ein detailliertes Angebot,
                  das Sie in Ruhe prüfen können.</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className='d-flex justify-content-center' style={{ width: '100%', height: "600px" }}>
        <LeafletMap center={[latitude, longitude]} zoom={23} zIndexOffset={0} style={{ width: '80%', height: 'auto', margin: "3%", zIndex: 1 }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker
            cancelable={true}
            draggable={false}
            position={[latitude, longitude]}>
            <Popup>
              Državni univerzitet u Novom Pazaru
              <br />
              Latitude: {latitude}
              <br />
              Longitude: {longitude}
            </Popup>
          </Marker>
        </LeafletMap>
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


    </>
  )
}

export default Contact