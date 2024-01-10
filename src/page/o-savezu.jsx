import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import Banner from "../component/section/banner";
import AboutSavez from "./about-savez";


const OSavezu = () => {
    return (
        <Fragment>
            <Header />
            <Banner />
            <AboutSavez />
            <Footer />
        </Fragment>
    );
}
 
export default OSavezu;