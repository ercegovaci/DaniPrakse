import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import Banner from "../component/section/banner";
import OstaviCvSekcija from "../component/section/OstaviCvSekcija";


const OstaviCV = () => {
    return ( 
        <Fragment>
            <Header />
            <Banner />
            <OstaviCvSekcija />
            <Footer />
        </Fragment>
    );
}



export default OstaviCV;