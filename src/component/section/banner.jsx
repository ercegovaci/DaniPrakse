import daniprakselogo  from '../../assets/images/daniprakse-nobg.png';

const subTitle = "Dani prakse";
const title = <h2 className="title"><span className="d-lg-block">Budite deo</span> najvećeg korporativnog <span className="d-lg-block">događaja...</span></h2>;
const desc = "Pridružite nam se u periodu od 26. do 28. februara 2024. godine u hotelu Metropol i napravite prve korake ka\n" +
    "uspešnom zaposlenju.";

const Banner = () => {
    return (
        <section className="banner-section">
            <div className="container">
                <div className="section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-xxl-7 col-xl-7 col-lg-10">
                            <div className="banner-content">
                                <h6 className="subtitle text-uppercase fw-medium">{subTitle}</h6>
                                {title}
                                <p className="desc">...u organizaciji studenata. <br/>{desc}</p>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-5">
                            <div className="banner-thumb">
                                <img src={daniprakselogo} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="all-shapes"></div>
        </section>
    );
}
 
export default Banner;