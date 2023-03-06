import React from 'react';
import Navbar from '../components/Navbar';
import '../resources/contact.css';
import logo from '../resources/logo/FRTrockenbau.png';
import scanqr from '../resources/images/scanqr.gif';
import qrcode from '../resources/images/phone.png';
import { Row, Col, Input, Button } from "antd";
import { UserOutlined, MailOutlined, MessageOutlined } from "@ant-design/icons";


function Contact() {
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
      <Navbar />

      {/* Contact */}

      <div className="d-flex justify-content-center align-items-center p-0 m-4" style={{ height: "100vh" }}>
      <div style={{ width: "80%" }}>
        <h3 style={{color: "#645124", fontWeight: "bold"}} >Contact Us</h3>
        <Row gutter={[16, 16]} className="flex-column flex-md-row">
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <div className="p-3">
              <Row gutter={[16, 16]} className="mb-3">
                <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                  <Input placeholder="First name" prefix={<UserOutlined />} size="large" style={{ borderBottom: "2px solid grey" }} />
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                  <Input placeholder="Last name" prefix={<UserOutlined />} size="large" style={{ borderBottom: "2px solid grey" }} />
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
              <Col xs={{ span: 24 }} sm={{ span: 24 }}>
                  <Input placeholder="Mail" type='mail' prefix={<MailOutlined />} size="large" style={{ borderBottom: "2px solid grey" }} />
                </Col>
                <Col span={24}>
                  <Input.TextArea placeholder="Message" rows={8} prefix={<MessageOutlined />} size="large" style={{ border: "1px solid grey" }} />
                </Col>
              </Row>
              <Row gutter={[16, 16]} className="mt-3">
                <Col span={24}>
                  <Button type="primary" size="large" block>SEND</Button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} className="mt-4 mt-md-0">
            <div className="p-3 text-center gap-2">
              <img src={scanqr} alt="scan-qr-code-with-camera" style={{width: "70%", marginBottom: "4%"}} /><br/>
              <img src={qrcode} alt="QR-CODE"  style={{width: "40%", marginBottom: "4%"}} />
              <p>Some information about the company contact</p>
              <p>Address: Some Street 1</p>
              <p>City: Belgrade</p>
              <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
            </div>
          </Col>
        </Row>
      </div>
    </div>


      {/* Footer */}

      <footer className="footer-distributed ">

        <div className="footer-left">

          <img style={{ width: "300px", margin: "0", padding: "0" }} title="FR-Trockenbau logo" src={logo} alt="Logo" />

          <p className="footer-links">

            <a href="#">Home</a>

            <a href="#">About us</a>

            <a href="#">Services</a>

            <a href="#">Galery</a>

            <a href="#">Otisak</a>
          </p>

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
            <p><a href="mailto:info@fr-trockenbau.de">info@fr-trockenbau.de</a></p>
          </div>

        </div>

        <div className="footer-right">

          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className="footer-icons">

            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-github"></i></a>

          </div>

        </div>

      </footer>

    </>
  )
}

export default Contact