import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../resources/nav.css";
import logo from '../resources/logo/logo.png';

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
                <img style={{width: "140px", paddingTop: "18px", marginLeft: "20px"}} title="FR-Trockenbau logo" src={logo} alt="Logo" />
                <nav ref={navRef}>
                    <a href="/#" >Home</a>
                    <a href="/#"  >My work</a>
                    <a href="/#"  >Blog</a>
                    <a href="/#"  >About me</a>
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