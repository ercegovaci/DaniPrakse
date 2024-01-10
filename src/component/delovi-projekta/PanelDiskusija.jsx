import React from 'react';
import tanja from "../../assets/images/contact/tim/tanja.jpeg";
import anastasija from "../../assets/images/contact/tim/anastasija.jpeg";
import milapujana from "../../assets/images/contact/tim/milapujana.jpeg";

import marija from "../../assets/images/panelisti/marija.jpeg";
import milos from "../../assets/images/panelisti/milos.jpeg";
import maksa from "../../assets/images/panelisti/maksa.jpeg";

const PanelDiskusija = () => {

    const panelisti =[
        {
            imgUrl: marija,
            imgAlt: 'instructor rajibraj91 rajibraj',
            name: 'Marija Desivojević Cvetković',
            description: 'Viša potpredsenica Delta Holdinga',
            linkedInLink: 'https://www.linkedin.com/in/marijadc/',
        },
        {
            imgUrl: milos,
            imgAlt: 'instructor rajibraj91 rajibraj',
            name: 'Miloš Stevanovic',
            description: 'Advokat',
            linkedInLink: 'https://www.linkedin.com/in/milo%C5%A1-stevanovi%C4%87-415a62170/',
        },
        {
            imgUrl: maksa,
            imgAlt: 'instructor rajibraj91 rajibraj',
            name: 'Miloš Maksimović',
            description: 'Moderator',
            linkedInLink: 'https://www.linkedin.com/in/milos-maksimovic-726b8439/',
        },
    ];

    return (
        <>
            <p>Panel - diskusija nas ove godine očekuje 28. februara. Cilj je da Vas upozna sa aktuelnim temama koje su
                važne za Vaš karijerni razvoj. Pružamo Vam mogućnost da uz pomoć stručnjaka iz različitih oblasti
                stvorite bolji uvid u poslovni svet, čujete brojne savete, kao i da steknete nova znanja i
                iskustva. </p>
            <p>Iz godine u godinu, imali smo čast da ugostimo velike stručnjake, kompetentne da podele svoje mišljenje
            o temama značajnim za svakoga od nas. Kroz dinamičan razgovor koji se vodi između panelista, možete se
            upoznati sa različitim pogledima na aktuelna pitanja u svetu biznisa, preduzetništva, karijernog i ličnog
            razvoja. </p>
            <p>Tema ovogodišnje panel-diskusije glasi “Karijerni kompas-četiri strane biznisa”. </p>

            <div className="section-wrapper">
                <h3 className="text-center font-italic">Panelisti</h3>
                <div
                    className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 m-3">

                    {panelisti.map((val, i) => (
                        <div className="col" key={i}>
                            <div className="instructor-item">
                                <div className="instructor-inner">
                                    <div className="">
                                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`}/>
                                    </div>
                                    <div className="instructor-content panelisti-content">
                                        <h4>{val.name}</h4>
                                        <p>{val.description}</p>

                                    </div>
                                </div>
                                <div className="instructor-footer">
                                    <ul className="lab-ul align-items-center text-center">
                                        <li><a href={val.linkedInLink} target="_blank"> <i
                                            className="icofont-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
                </>
    );
};

export default PanelDiskusija;