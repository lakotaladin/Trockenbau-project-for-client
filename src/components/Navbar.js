import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../resources/nav.css";
import logo from '../resources/logo/FRTrockenbau.png';
import { Link } from "react-router-dom";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

  

    return (
        <>
            <header>
                <img style={{width: "170px"}} title="FR-Trockenbau logo" src={logo} alt="Logo" />
                <nav ref={navRef}>
                    <Link to="/" >Home</Link>
                    <Link to="/services"  >Services</Link>
                    <Link to="/galery">Galery</Link>
                    <Link to="/contact"  >Contact</Link>
                    <Link to="/otisak"  >Otisak</Link>
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
        </>
    );
}

export default Navbar;