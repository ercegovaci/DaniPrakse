import { Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import Banner from "../component/section/banner";
import Blog from "../component/section/blog";


const VestiStranica = () => {
    return (
        <Fragment>
            <Header />
            <Banner />
            <Blog />
            <Footer />
        </Fragment>
    );
}
 
export default VestiStranica;