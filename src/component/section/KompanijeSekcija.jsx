import React, {useState} from 'react';
import kompanije from "../../data/kompanije";
import nestleLogo from "../../assets/images/kompanije/logoi/nestlelogo.jpeg";
import {Link} from "react-router-dom";
import {Button, Container} from "react-bootstrap";

const KompanijeSekcija = () => {

const [izabranaKompanija, setIzabranaKompanija] = useState(null);
const [prikaziKompaniju, setPrikaziKompaniju] = useState(false);

    return (
        <>
            <div className="course-section padding-tb section-bg">

                {
                    !prikaziKompaniju && kompanije.map((kompanija, i) => {
                        return (
                            <div key={kompanija.id} className="course-section padding-tb section-bg">
                                <div className="container">
                                    <div className="section-header text-center">
                                        <span className="subtitle">{kompanija.kategorija}</span>
                                    </div>
                                    <div className="section-wrapper">
                                        <div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">

                                        {
                                        kompanija.kompanije.map((val, i) => {
                                            return (

                                                        <div className="col" key={i}>
                                                            <div className="course-item">
                                                                <div className="course-inner">
                                                                    <div className="course-thumb">
                                                                        <img src={val.slika}
                                                                             alt={`${val.naziv}`}/>
                                                                    </div>
                                                                    <div className="course-content">
                                                                        <div className={"course-price " + val.klasa}></div>
                                                                        <h4>{val.naziv}</h4>

                                                                        <div className="course-footer">
                                                                            <p>
                                                                                {val.skraceniTekst}
                                                                            </p>
                                                                            {
                                                                                val.prikaziDugme && (
                                                                                    <div className="course-btn">
                                                                                        <Button onClick={() => {
                                                                                            setIzabranaKompanija(val);
                                                                                            setPrikaziKompaniju(true);
                                                                                            window.scrollTo({
                                                                                                top: 200,
                                                                                                left: 100,
                                                                                                behavior: "smooth",
                                                                                            });
                                                                                        }}
                                                                                                className="lab-btn-text">Prikazi
                                                                                            vise
                                                                                            <i className="icofont-external-link"></i></Button>
                                                                                    </div>
                                                                                )
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                            )
                                        })
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                }

                {
                    prikaziKompaniju && izabranaKompanija && (
                        <>
                            <Container>
                                {izabranaKompanija.kompanijaStranica}
                                <Button onClick={() => {
                                    setPrikaziKompaniju(false);
                                    setIzabranaKompanija(null);
                                    window.scrollTo({
                                        top: 200,
                                        left: 100,
                                        behavior: "smooth",
                                    });
                                }} variant="primary">Nazad</Button>
                            </Container>
                        </>
                    )
                }
            </div>
        </>
    );
};

export default KompanijeSekcija;