import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import Banner from "../component/section/banner";
import KompanijeSekcija from "../component/section/KompanijeSekcija";

const Kompanije = () => {
    return (
        <Fragment>
            <Header />
            <Banner />
            <KompanijeSekcija />
            <Footer />
        </Fragment>
    );
}
 
export default Kompanije;