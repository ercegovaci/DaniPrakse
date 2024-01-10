import React from 'react';
import ivana from "../assets/images/contact/tim/ivana.jpeg";
import tanja from "../assets/images/contact/tim/tanja.jpeg";
import anastasija from "../assets/images/contact/tim/anastasija.jpeg";
import milapujana from "../assets/images/contact/tim/milapujana.jpeg";

const DeloviProjektaPanelisti = () => {

    const coreTim4 =[
        {
            imgUrl: ivana,
            imgAlt: 'instructor rajibraj91 rajibraj',
            name: 'Ivana Ercegovac',
            degi: 'Lider tima za IT i dizajn',
            courseCount: 'ivana.ercegovac.ssfon@gmail.com',
            studentAnroll: 'https://www.linkedin.com/in/ivana-ercegovac-983a99201/',
        },
        {
            imgUrl: tanja,
            imgAlt: 'instructor rajibraj91 rajibraj',
            name: 'Tanja Trtica',
            degi: 'Lider PR tima',
            courseCount: 'tanja.trtica.ssfon@gmail.com',
            studentAnroll: 'https://www.linkedin.com/in/tanjatrtica',
        },
        {
            imgUrl: anastasija,
            imgAlt: 'instructor rajibraj91 rajibraj',
            name: 'Anastasija Milinković',
            degi: 'Lider HR tima',
            courseCount: 'anastasija.milinkovic.ssfon@gmail.com',
            studentAnroll: 'https://www.linkedin.com/in/anastasija-milinkovic/',
        },
        {
            imgUrl: milapujana,
            imgAlt: 'instructor rajibraj91 rajibraj',
            name: 'Mila Pujana Janković',
            degi: 'Lider tima za logistiku',
            courseCount: 'mila.pujana.jankovic.ssfon@gmail.com',
            studentAnroll: 'https://www.linkedin.com/in/mila-pujana-jankovic-a73a37266/',
        },
    ];

    return (
        <>
            <p>Panel - diskusija nas ove godine očekuje 28. februara. Cilj je da Vas upozna sa aktuelnim temama koje su
                važne za Vaš karijerni razvoj. Pružamo Vam mogućnost da uz pomoć stručnjaka iz različitih oblasti
                stvorite bolji uvid u poslovni svet, čujete brojne savete, kao i da steknete nova znanja i
                iskustva. </p>
            <p>Iz godine u godinu, imali smo čast da ugostimo velike stručnjake, kompetentne da podele svoje mišljenje o
                temama značajnim za svakoga od nas. Kroz dinamičan razgovor koji se vodi između panelista, možete se
                upoznati sa različitim pogledima na aktuelna pitanja u svetu biznisa, preduzetništva, karijernog i
                ličnog razvoja. </p>
            <p>Tema ovogodišnje panel-diskusije glasi “Karijerni kompas-četiri strane biznisa”. </p>
            <div
                className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 m-3">
                {coreTim4.map((val, i) => (
                    <div className="col" key={i}>
                        <div className="instructor-item">
                            <div className="instructor-inner">
                                <div className="instructor-thumb">
                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`}/>
                                </div>
                                <div className="instructor-content">
                                    <h4>{val.name}</h4>
                                    <p>{val.degi}</p>
                                    {val.courseCount}

                                </div>
                            </div>
                            <div className="instructor-footer">
                                <ul className="lab-ul align-items-center text-center">
                                    <li><a href={val.studentAnroll} target="_blank"> <i
                                        className="icofont-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default DeloviProjektaPanelisti;