
import { Link } from "react-router-dom";
import NewsletterForma from "../section/newsletter-forma";

const newsTitle = "Prijavite se na naš newsletter";
const newsDesc = "Želite li da budete među prvima koji će saznati sve novosti o Danima prakse?";

const Footer = () => {
    return (
        <div className="news-footer-wrap">
            <div className="fs-shape">
                <img src="assets/images/shape-img/03.png" alt="fst" className="fst-1" />
                <img src="assets/images/shape-img/04.png" alt="fst" className="fst-2" />
            </div>

            <div className="news-letter">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="news-title">
                            <h3>{newsTitle}</h3>
                            <p style={
                                {
                                    color: 'white',
                                    fontWeight: 'bold',
                                }
                            }>{newsDesc}</p>
                        </div>
                        <div className="news-form">
                            {
                                <NewsletterForma />
                            }
                        </div>
                    </div>
                </div>
            </div>
            
            <footer>
                <div className="footer-bottom style-2">
                    <div className="container">
                        <div className="section-wrapper">
                            <p>&copy; 2024 <Link to="/">Savez studenata FONa</Link>- Powered by<a target="_blank" href="https://www.instagram.com/incredible_culk14" >Ćule</a>  </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
 
export default Footer;