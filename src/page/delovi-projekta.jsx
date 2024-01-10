import { Component, Fragment } from "react";
import radionice1 from '../assets/images/delovi/radionice/1.jpg';
import radionice2 from '../assets/images/delovi/radionice/2.jpeg';
import radionice3 from '../assets/images/delovi/radionice/3.jpg';
import radionice4 from '../assets/images/delovi/radionice/4.jpg';
import panel1 from '../assets/images/delovi/panel/1.jpeg';
import panel2 from '../assets/images/delovi/panel/2.jpg';
import panel3 from '../assets/images/delovi/panel/3.jpeg';
import panel4 from '../assets/images/delovi/panel/4.jpg';
import panel5 from '../assets/images/delovi/panel/5.jpg';
import panel6 from '../assets/images/delovi/panel/6.jpeg';
import panel7 from '../assets/images/delovi/panel/7.jpg';
import spreman1 from '../assets/images/delovi/spreman/1.jpg';
import spreman2 from '../assets/images/delovi/spreman/2.jpeg';
import spreman3 from '../assets/images/delovi/spreman/3.jpeg';
import spreman4 from '../assets/images/delovi/spreman/4.jpg';
import spreman5 from '../assets/images/delovi/spreman/5.jpg';
import spreman6 from '../assets/images/delovi/spreman/6.jpg';
import spreman7 from '../assets/images/delovi/spreman/7.jpg';
import spreman8 from '../assets/images/delovi/spreman/8.jpg';
import spreman9 from '../assets/images/delovi/spreman/9.jpg';
import takmicarski1 from '../assets/images/delovi/takmicarski/1.jpg';
import takmicarski2 from '../assets/images/delovi/takmicarski/2.jpeg';
import sajam1 from '../assets/images/delovi/sajam/1.jpeg';
import sajam2 from '../assets/images/delovi/sajam/2.jpg';
import sajam3 from '../assets/images/delovi/sajam/3.jpg';
import sajam4 from '../assets/images/delovi/sajam/4.jpeg';
import sajam5 from '../assets/images/delovi/sajam/5.jpg';
import sajam6 from '../assets/images/delovi/sajam/6.jpg';
import sajam7 from '../assets/images/delovi/sajam/7.jpg';
import minuta1 from '../assets/images/delovi/15minuta/1.jpg';
import minuta2 from '../assets/images/delovi/15minuta/2.jpg';
import minuta3 from '../assets/images/delovi/15minuta/3.jpg';
import minuta4 from '../assets/images/delovi/15minuta/4.jpg';
import minuta5 from '../assets/images/delovi/15minuta/5.jpg';
import minuta6 from '../assets/images/delovi/15minuta/6.jpg';
import minuta7 from '../assets/images/delovi/15minuta/7.jpg';
import {Carousel, Container, Row, Tab, Tabs} from "react-bootstrap";
import SpremanZaDaneFragment from "../component/delovi-projekta/SpremanZaDaneFragment";
import PanelDiskusija from "../component/delovi-projekta/PanelDiskusija";
import Tvojih15MinutaFragment from "../component/delovi-projekta/Tvojih15MinutaFragment";
import SajamKompanijaFragment from "../component/delovi-projekta/SajamKompanijaFragment";
import TakmicarskiDeoFragment from "../component/delovi-projekta/TakmicarskiDeoFragment";
import RadioniceKompanije from "../component/delovi-projekta/RadioniceKompanije";

const DeloviProjekta = () => {

    const deloviProjekta = [
            {
                id: 1,
                naziv: 'Spreman za Dan(e)',
                text: <SpremanZaDaneFragment />,
                slike : [spreman1, spreman2, spreman3, spreman4, spreman5, spreman6, spreman7, spreman8, spreman9]
            },
            {
                id: 2,
                naziv: 'Panel diskusija',
                text: <PanelDiskusija />,
                slike: [
                    panel1, panel2, panel3, panel4, panel5, panel6, panel7
                ]
            },
            {
                id: 3,
                naziv: 'Tvojih 15 minuta',
                text: <Tvojih15MinutaFragment />,
                slike: [minuta1, minuta2, minuta3, minuta4, minuta5, minuta6, minuta7]
            },
            {
                id: 4,
                naziv: 'Sajam kompanija',
                text: <SajamKompanijaFragment />,
                slike: [sajam1, sajam2, sajam3, sajam4, sajam5, sajam6, sajam7]
            },
            {
                id: 5,
                naziv: 'Takmičarski deo',
                text: <TakmicarskiDeoFragment />,
                slike: [takmicarski1, takmicarski2]
            },
            {
                id: 6,
                naziv: 'Radionice kompanija',
                text : <RadioniceKompanije />,
                slike: [
                    radionice1, radionice2, radionice3, radionice4
                ]
            },
        ];

    return (
        <>
            <Container className="mb-3">
            <Tabs
                defaultActiveKey="1"
                id="delovi-projekta"
                className="mb-3"
                fill
            >
                {
                    deloviProjekta.map((delovi, i) => (

                        <Tab key={delovi.id} eventKey={delovi.id} title={delovi.naziv}>
                            <Row>
                                <div className="course-content">
                                    {
                                        delovi.text
                                    }
                                </div>
                            </Row>
                            <Row>
                                <Carousel>
                                    {delovi.slike.map((slika, i) => (
                                        <Carousel.Item key={i}>
                                            <img
                                                className="d-block w-100"
                                                src={`${slika}`}
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Row>
                        </Tab>
                    ))
                }
            </Tabs>
            </Container>
        </>
    );
}

export default DeloviProjekta;