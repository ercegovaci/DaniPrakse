
import { Link } from "react-router-dom";
import logo from "../assets/images/ssfon logo2.png";


const title = "404";
const desc = "Oops! Izgleda da ste se izgubili. Vratite se na početnu stranicu.";
const btnText = "Vrati se na početnu";




const ErrorPage = () => {
    return ( 
        <div className="four-zero-section padding-tb section-bg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className="four-zero-content">
                            <Link to="/">
                                <img src={logo} alt="Savez Studenata FON-a" />
                            </Link>
                            <h2 className="title">{title}</h2>
                            <p>{desc}</p>
                            <Link to="/" className="lab-btn"><span>{btnText}</span></Link>
                        </div>
                    </div>
                    <div className="col-lg-8 col-sm-6 col-12">
                        <div className="foue-zero-thumb">
                            <img src="assets/images/404.png" alt="Savez Studenata FON-a" />
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default ErrorPage;