import { Link } from "react-router-dom";
import {useState} from "react";
import {Button} from "react-bootstrap";

import vest1 from '../../assets/images/vesti/vest1.jpeg';
import LinkedInRadionicaVest from "../vesti/LinkedInRadionicaVest";


const subTitle = "PROČITAJTE NAJNOVIJE";
const title = "Vesti vezane za Dane praksi";


const blogList = [
    {
        imgUrl: vest1,
        imgAlt: 'blog thumb rajibraj91 rajibraj',
        title: 'LinkedIN radionica za članove Saveza studenata FON-a',
        author: 'Jana Đurić',
        date: 'Decembar 10, 2023',
        short: 'Početak decembra bio je u znaku LinkedIn-a. Andjela Bogićević, alumni član Savez studenata Fakulteta organizacionih nauka održala je radionicu kroz koju smo se upoznali sa mogućnostima koje nudi ova poslovna mreža.',
        longText: <LinkedInRadionicaVest />,
        btnText: 'Pročitaj više',
    },

]

const Blog = () => {

    const [izabranaVest, setIzabranaVest] = useState({});
    const [prikaziVest, setPrikaziVest] = useState(false);

    const prikaziVestHandler = (vest) => {
        setIzabranaVest(vest);
        setPrikaziVest(true);
    }

    return (
        <div className="blog-section padding-tb section-bg">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                {!prikaziVest ? (<div className="section-wrapper">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
                        {blogList.map((val, i) => (
                            <div className="col" key={i}>
                                <div className="post-item">
                                    <div className="post-inner">
                                        <div className="post-thumb">
                                            <Link to="#"><img width={370} height={250} src={`${val.imgUrl}`}
                                                                         alt={`${val.imgAlt}`}/></Link>
                                        </div>
                                        <div className="post-content">
                                            <Link to="#"><h4>{val.title}</h4></Link>
                                            <div className="meta-post">
                                                <ul className="lab-ul">
                                                    <li><i className="icofont-ui-user"></i>{val.author}</li>
                                                    <li><i className="icofont-calendar"></i>{val.date}</li>
                                                </ul>
                                            </div>
                                            <p>{val.short}</p>
                                        </div>
                                        <div className="post-footer">
                                            <div className="pf-left">
                                                <div className="course-btn">
                                                <Button onClick={() => {
                                                    prikaziVestHandler(val);
                                                    window.scrollTo({
                                                        top: 500,
                                                        left: 100,
                                                        behavior: "smooth",
                                                    });
                                                }} className="lab-btn-text">{val.btnText}</Button>
                                                </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>) : (
                    <>
                        <h3>{izabranaVest.title}</h3>
                        {
                            izabranaVest.longText
                        }
                        <div className="course-btn">
                        <Button onClick={() => {
                            setPrikaziVest(false);
                            setIzabranaVest(null);
                            window.scrollTo({
                                top: 500,
                                left: 100,
                                behavior: "smooth",
                            });
                        }} className="lab-btn-text">Nazad</Button>
                        </div>
                    </>
                )}

            </div>
        </div>
    );
}

export default Blog;