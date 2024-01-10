import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/ssfon logo2.png';

const emailAddress = "savezstudenatafon@gmail.com";
const address = "Jove Ilića 154, 11000 Beograd";


let socialList = [
    {
        iconName: 'icofont-facebook-messenger',
        siteLink: '#',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
    },
    {
        iconName: 'icofont-vimeo',
        siteLink: '#',
    },
    {
        iconName: 'icofont-skype',
        siteLink: '#',
    },
    {
        iconName: 'icofont-rss-feed',
        siteLink: '#',
    },
]

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);
	const [socialToggle, setSocialToggle] = useState(false);
	const [headerFiexd, setHeaderFiexd] = useState(false);

	window.addEventListener("scroll", () => {
		if (window.scrollY > 200) {
			setHeaderFiexd(true);
		} else {
			setHeaderFiexd(false);
		}
	});

    return (
        <header className={`header-section ${headerFiexd ? "header-fixed fadeInUp" : ""}`}>
            <div className={`header-top ${socialToggle ? "open" : ""}`}>
                <div className="container">
                    <div className="header-top-area">
                        <ul className="lab-ul left">
                            <li><i className="icofont-ui-email"></i> <span>{emailAddress}</span></li>
                            <li><i className="icofont-location-pin"></i> {address}</li>
                        </ul>
                        <ul className="lab-ul social-icons d-flex align-items-center">
                            <li><p>Kontaktirajte nas na: </p></li>
                            {socialList.map((val, i) => (
                                <li key={i}><a href={val.siteLink}><i className={val.iconName}></i></a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            <Link to="/"><img height={350} width={350} src={logo} alt="logo" /></Link>
                        </div>
                        <div className="menu-area">
                            <div className="menu">
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                    <li><NavLink to="/">Početna</NavLink></li>
                                    <li><NavLink to="/o-savezu">O Savezu</NavLink></li>
                                    <li><NavLink to="/delovi-projekta">Delovi Projekta</NavLink></li>
                                    <li><NavLink to="/kompanije">Kompanije</NavLink></li>
                                    <li><NavLink to="/vesti">Vesti</NavLink></li>
                                    <li><NavLink style={
                                        {
                                            color: "red"
                                        }
                                    } to="/ostavi-cv">Ostavi CV</NavLink></li>
                                    <li><NavLink to="/contact">Kontakt</NavLink></li>
                                </ul>
                            </div>

                            <div className={`header-bar d-lg-none ${menuToggle ? "active" : "" }`} onClick={() => setMenuToggle(!menuToggle)}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;