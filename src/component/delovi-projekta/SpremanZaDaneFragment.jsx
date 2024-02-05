import React from 'react';


import petarkosovac from "../../assets/images/predavaci/petarkosovac.jpeg";
import sinisa from "../../assets/images/predavaci/sinisa.jpeg";
import casestudyclub from "../../assets/images/predavaci/casestudyclub.png";

const SpremanZaDaneFragment = () => {

    const panelisti =[
        {
            imgUrl: petarkosovac,
            ime: 'Petar Kosovac',
            pozicija: 'Poslovni trener i kouč, stučnjak za prezentacione veštine',
            nazivPredavanja: "Prezentacione veštine",
        },

        {
            imgUrl: sinisa,
            ime: 'Siniša Ubović',
            pozicija: 'Glumac, pisac i međunarodno priznati trener ličnog razvoja',
            nazivPredavanja: "",
        },
        // {
        //     imgUrl: sinisa,
        //     ime: 'Goran Manasijević',
        //     pozicija: 'Voditelj podcast-a "Tutorup" i moderator predavanja "Na kafi sa..."',
        //     nazivPredavanja: "Naziv",
        // },
        {
            imgUrl: casestudyclub,
            ime: 'Case study club',
            pozicija: 'Glumac, pisac i međunarodno priznati trener ličnog razvoja',
            nazivPredavanja: "Osnove i primena studije slučaja",
        },
    ];

    return (
        <>
            <p><b>Spreman za Dan(e)</b> predstavlja edukativni deo projekta koji će se održati <b>27. februara</b>. Obuhvata <em>radionice i predavanja iz različitih oblasti</em> na kojima ćeš imati priliku da čuješ o temama koje su popularne, kao i o trendovima koji se prepliću u našem društvu. </p>
            <p>Kroz znanja i iskustva vrsnih predavača, uplovićeš u svet biznisa, saznati šta možeš da očekuješ na tvom karijernom putu, ali i dobiti korisne <em>savete za lični i karijerni razvoj</em>.</p>
            <div className="section-wrapper">
                <h3 className="text-center font-italic">Predavači</h3>
                <div
                    className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 m-3">

                    {panelisti.map((val, i) => (
                        <div className="col" key={i}>
                            <div className="instructor-item">
                                <div className="instructor-inner">
                                    <div className="">
                                        <img src={`${val.imgUrl}`} alt="predavac"/>
                                    </div>
                                    <div className="instructor-content panelisti-content">
                                        <h4>{val.ime}</h4>
                                        <p>{val.pozicija}</p>
                                    </div>
                                </div>
                                <div className="instructor-footer">
                                    <ul className="lab-ul align-items-center text-center">
                                        <li><b> {val.nazivPredavanja}</b></li>
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

export default SpremanZaDaneFragment;