import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import GoogleMap from "../component/sidebar/googlemap";
import Banner from "../component/section/banner";
import Instructor from "../component/section/instructor";


const subTitle = "OČEKUJEMO VAS";
const title = "NA DOBRO POZNATOJ LOKACIJI";


const contactList = [
    {
        imgUrl: 'assets/images/icon/01.png',
        imgAlt: 'contact icon',
        title: 'Adresa',
        desc: 'Bulevar kralja Aleksandra 69, Beograd 11000',
    },
    {
        imgUrl: 'assets/images/icon/02.png',
        imgAlt: 'contact icon',
        title: 'Broj telefona',
        desc: '+381 64 9444604',
    },
    {
        imgUrl: 'assets/images/icon/03.png',
        imgAlt: 'contact icon',
        title: 'Email',
        desc: 'savezstudenatafon@gmail.com',
    },
    {
        imgUrl: 'assets/images/icon/04.png',
        imgAlt: 'contact icon',
        title: 'Instagram',
        desc: 'https://www.instagram.com/daniprakse',
    },
]


const ContactPage = () => {
    return ( 
        <Fragment>
            <Header />
            <Banner />
            <Instructor />
            <div className="map-address-section padding-tb section-bg">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">{subTitle}</span>
                        <h2 className="title">{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row flex-row-reverse">
                            <div className="col-xl-4 col-lg-5 col-12">
                                <div className="contact-wrapper">
                                    {contactList.map((val, i) => (
                                        <div className="contact-item" key={i}>
                                            <div className="contact-thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="contact-content">
                                                <h6 className="title">{val.title}</h6>
                                                {val.title === 'Instagram' ? (
                                                    <a href={val.desc} target="_blank" rel="noreferrer">{val.desc}</a>
                                                ) : (
                                                    <p>{val.desc}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-7 col-12">
                                <GoogleMap />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}



export default ContactPage;