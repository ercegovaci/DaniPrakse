import React from 'react';

import marija from "../../assets/images/panelisti/marija.jpeg";
import milos from "../../assets/images/panelisti/milos.jpeg";
import maksa from "../../assets/images/panelisti/maksa.jpeg";
//import bojan from "../../assets/images/panelisti/bojan.jpeg";

const PanelDiskusija = () => {

    const panelisti =[
        {
            imgUrl: marija,
            imgAlt: 'instructor rajibraj91 rajibraj',
            name: 'Marija Desivojević Cvetković',
            description: 'Potpredsednica za strategiju i razvoj Delta Holding-a',
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
        {
            imgUrl: maksa,
            imgAlt: 'instructor rajibraj91 rajibraj',
            name: 'Nebojša Matić',
            description: 'Vlasnik kompanije Mikroelektronika',
            linkedInLink: 'https://www.linkedin.com/in/milos-maksimovic-726b8439/',
        },
        {
           // imgUrl: bojan,
            imgAlt: 'instructor rajibraj91 rajibraj',
            name: 'Bojan Mitić',
            description: 'CEO BJN holding',
            linkedInLink: 'https://www.linkedin.com/in/bojan-mitic-5309b65b/',
        },
    ];

    return (
        <>
            <p><b>Panel - diskusija</b> te ove godine očekuje <b>28. februara</b>. <b>Cilj</b> je da te upozna sa <em>aktuelnim temama</em> koje su <em>važne za tvoj karijerni razvoj</em>. Pružamo ti mogućnost da uz pomoć stručnjaka iz različitih oblasti stvoriš bolji uvid u poslovni svet, čuješ brojne savete, kao i da stekneš nova znanja i iskustva. </p>
            <p>Iz godine u godinu, imali smo čast da ugostimo velike stručnjake, kompetentne da podele svoje mišljenje o temama značajnim za svakoga od nas. Kroz dinamičan razgovor koji se vodi između panelista, možeš se upoznati sa različitim pogledima na aktuelna pitanja u svetu biznisa, preduzetništva, karijernog i ličnog razvoja.</p>
            <p>Tema ovogodišnje panel-diskusije glasi <b>“Karijerni kompas-četiri strane biznisa”</b>.</p>

            <div className="section-wrapper">
                <h3 className="text-center font-italic">Panelisti</h3>
                <p className="text-center text-uppercase">Karijerni kompas - četiri strane biznisa</p>
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