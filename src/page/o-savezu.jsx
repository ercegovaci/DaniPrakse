import { Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import Banner from "../component/section/banner";
import AboutSavez from "./about-savez";
import LogoiSavez from "../component/section/logoi-savez";


const OSavezu = () => {
    return (
        <Fragment>
            <Header />
            <Banner />
            <LogoiSavez />
            <AboutSavez />
            <Footer />
        </Fragment>
    );
}
 
export default OSavezu;