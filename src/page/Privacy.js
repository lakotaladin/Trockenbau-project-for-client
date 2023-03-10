import React, { useRef } from 'react'
import logo from '../resources/logo/FRTrockenbau.png';
import { FaBars, FaTimes } from "react-icons/fa";
import "../resources/nav.css";
import "../resources/privacy.css";
import { Link } from "react-router-dom";
import ScrollToTopButton from '../components/ScrollToTopButton';

function Privacy() {
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
                    <img style={{ width: "170px" }} title="FR-Trockenbau logo" src={logo} alt="Logo" />
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
                        <h1 style={{ color: "#645124", fontWeight: "bold" }} >Datenschutz</h1>
                    </div>
                    {/* Privacy  */}

                    <div className='privacy d-flex flex-column'>
                        <h1>Datenschutzerklärung</h1>
                        <p>Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</p>
                        <p>FR Trockenbau</p>
                        <p>Faruk Rizovic</p>
                        <p>Fromund-str.35</p>
                        <p>81547 München</p>
                        <p>Telefon: +49 (0) 176 644 1511 0</p>
                        <a href="mailto:info@fr-trockenbau.de">info@fr-trockenbau.de</a>
                        <h2>Ihre Betroffenenrechte</h2>
                        <p>Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:</p>
                        <ul>
                            <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),</li>
                            <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</li>
                            <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
                            <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),</li>
                            <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und</li>
                            <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).</li>
                        </ul>
                        <p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>
                        <p>Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.</p>
                        <p>Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: <a href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html" target="_blank" rel="noopener nofollow">https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html</a>.</p>
                        <p></p><h2>Kontaktformular</h2>
                        <h3>Art und Zweck der Verarbeitung:</h3>
                        <p>Die von Ihnen eingegebenen Daten werden zum Zweck der individuellen Kommunikation mit Ihnen gespeichert. Hierfür ist die Angabe einer validen E-Mail-Adresse sowie Ihres Namens erforderlich. Diese dient der Zuordnung der Anfrage und der anschließenden Beantwortung derselben. Die Angabe weiterer Daten ist optional.</p>
                        <h3>Rechtsgrundlage:</h3>
                        <p>Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf der Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).</p>
                        <p>Durch Bereitstellung des Kontaktformulars möchten wir Ihnen eine unkomplizierte Kontaktaufnahme ermöglichen. Ihre gemachten Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert.</p>
                        <p>Sofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen, erfolgt die Verarbeitung der in das Kontaktformular eingegebenen Daten zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).</p>
                        <h3>Empfänger:</h3>
                        <p>Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>
                        <p></p><h3>Drittlandtransfer:</h3>
                        <p>Die erhobenen Daten werden ggfs. in folgende Drittländer übertragen: </p>
                        <p>Serbia</p>
                        <p>Folgende Datenschutzgarantien liegen vor: </p>
                        <p></p><h3>Speicherdauer:</h3>
                        <p>Daten werden spätestens 6 Monate nach Bearbeitung der Anfrage gelöscht.</p>
                        <p>Sofern es zu einem Vertragsverhältnis kommt, unterliegen wir den gesetzlichen Aufbewahrungsfristen nach HGB und löschen Ihre Daten nach Ablauf dieser Fristen. </p>
                        <h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
                        <p>Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Wir können Ihre Anfrage jedoch nur bearbeiten, sofern Sie uns Ihren Namen, Ihre E-Mail-Adresse und den Grund der Anfrage mitteilen.</p>
                        <p></p><h2>Verwendung von Scriptbibliotheken (Google Webfonts)</h2>
                        <p>Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen, verwenden wir auf dieser Website „Google Web Fonts“ der Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; nachfolgend „Google“) zur Darstellung von Schriften.</p>
                        <p>Weitere Informationen zu Google Web Fonts finden Sie unter <a href="https://developers.google.com/fonts/faq" rel="noopener nofollow" target="_blank">https://developers.google.com/fonts/faq</a> und in der Datenschutzerklärung von Google: <a href="https://www.google.com/policies/privacy/" rel="noopener nofollow" target="_blank">https://www.google.com/policies/privacy/</a>.</p>
                        <p></p><h2>SSL-Verschlüsselung</h2>
                        <p>Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.</p>
                        <p></p><hr />
                        <h2>Information über Ihr Widerspruchsrecht nach Art. 21 DSGVO</h2>
                        <h3>Einzelfallbezogenes Widerspruchsrecht</h3>
                        <p>Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund Art. 6 Abs. 1 lit. f DSGVO (Datenverarbeitung auf der Grundlage einer Interessenabwägung) erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmung gestütztes Profiling im Sinne von Art. 4 Nr. 4 DSGVO.</p>
                        <p>Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>
                        <h3>Empfänger eines Widerspruchs</h3>
                        <p>Faruk Rizovic
                            <br />E-Mail: info@fr-trockenbau.de
                            <br />Tel: +49 0 176 644 1511 0</p>
                        <hr />
                        <h2>Änderung unserer Datenschutzbestimmungen</h2>
                        <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
                        <h2>Fragen an den Datenschutzbeauftragten</h2>
                        <p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:</p>
                        <p>Phone: Tel +49 (0) 176 644 1511 0 </p>
                        <p><em>Die Datenschutzerklärung wurde mithilfe der activeMind AG erstellt, den Experten für <a href="https://www.activemind.de/datenschutz/datenschutzbeauftragter/" target="_blank" rel="noopener">externe Datenschutzbeauftragte</a> (Version #2020-09-30).</em></p>

                    </div>


                </div>

                {/* Footer */}

                <footer className="footer-distributed ">

                    <div className="footer-left">

                        <img style={{ width: "300px", margin: "0", padding: "0" }} title="FR-Trockenbau logo" src={logo} alt="Logo" />

                        <p className="footer-company-name">FR Trockenbau © 2017. All rights Reserved  <Link style={{ color: "black" }} to="/privacy">Datenschutz</Link> <Link style={{ color: "black" }} to="/impressum">Impressum</Link></p>
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

export default Privacy