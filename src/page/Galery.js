import React, { useRef } from 'react'
import '../resources/galery.css'
import logo from '../resources/logo/FRTrockenbau.png';
import { Image, Row, Col } from 'antd';
import { FaBars, FaTimes } from "react-icons/fa";
import "../resources/nav.css";
import { Link } from "react-router-dom";
import img1 from '../resources/images/img1.jpeg';
import img2 from '../resources/images/img2.jpeg';
import img3 from '../resources/images/img3.jpeg';
import img4 from '../resources/images/img4.jpeg';
import img5 from '../resources/images/img5.jpeg';
import img6 from '../resources/images/img6.jpeg';
import img7 from '../resources/images/img7.jpeg';
import img8 from '../resources/images/img8.jpeg';
import img9 from '../resources/images/img9.jpeg';
import img10 from '../resources/images/img10.jpeg';
import img11 from '../resources/images/img11.jpeg';
import img12 from '../resources/images/img12.jpeg';
import ScrollToTopButton from '../components/ScrollToTopButton';

function Galery() {

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
        <a href="/"><img style={{width: "170px"}} title="FR-Trockenbau logo" src={logo} alt="Logo" /></a>
          <nav ref={navRef}>
            <Link to="/" >Home</Link>
            <Link to="/galery">Galery</Link>
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

          {/* Title Galery */}
          <div className='d-flex justify-content-center m-5'>
            <h1 style={{ color: "#645124", fontWeight: "bold" }} >Galerie</h1>
          </div>
          {/* Galery images  */}

          <div
            className='galery-div flex-column gap-3 p-3'
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '50vh',
            }}
          >
            <Row gutter={[16, 16]} justify="center">
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <Image
                  src={img1}
                  alt="Image 1"
                  preview={{ zIndex: 1000 }}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <Image
                  src={img2}
                  alt="Image 2"
                  preview={{ zIndex: 1000 }}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <Image
                  src={img3}
                  alt="Image 3"
                  preview={{ zIndex: 1000 }}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <Image
                  src={img4}
                  alt="Image 4"
                  preview={{ zIndex: 1000 }}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Col>
            </Row>
            <Row gutter={[16, 16]} justify="center">
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <Image
                  src={img5}
                  alt="Image 5"
                  preview={{ zIndex: 1000 }}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <Image
                  src={img6}
                  alt="Image 6"
                  preview={{ zIndex: 1000 }}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <Image
                  src={img8}
                  alt="Image 7"
                  preview={{ zIndex: 1000 }}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <Image
                  src={img9}
                  alt="Image 8"
                  preview={{ zIndex: 1000 }}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Col>
            </Row>
            <Row gutter={[16, 16]} justify="center">
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <Image
                  src={img7}
                  alt="Image 9"
                  preview={{ zIndex: 1000 }}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <Image
                  src={img10}
                  alt="Image 10"
                  preview={{ zIndex: 1000 }}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <Image
                  src={img11}
                  alt="Image 11"
                  preview={{ zIndex: 1000 }}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <Image
                  src={img12}
                  alt="Image 12"
                  preview={{ zIndex: 1000 }}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Col>
            </Row>
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
              <p>+49 (0) 176 644 1511 0</p>
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

export default Galery