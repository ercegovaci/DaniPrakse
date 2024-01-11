import React from 'react';
import vest1 from '../../assets/images/vesti/vest1.jpeg';
import vest2 from '../../assets/images/vesti/vest1-2.jpeg';
import {Col, Image, Row} from "react-bootstrap";
const LinkedInRadionicaVest = () => {
    return (
        <>
            <p>Početak decembra bio je u znaku LinkedIn-a.
                Andjela Bogićević, alumni član Savez studenata Fakulteta organizacionih nauka održala je radionicu kroz koju smo se upoznali sa mogućnostima koje nudi ova poslovna mreža.</p>
            <p>Tokom dva sata interaktivnog rada na praktičnim primerima dobili smo korisne savete koji će nam pomoći da iskoristimo mogućnosti koje nam pruža LinkedIn i na najbolji način predstavimo sebe i svoj rad poslovnom svetu.</p>
            <p>Dugujemo veliku zahvalnost Anđeli i nadamo se da ćemo imati priliku da i u budućnosti sarađujemo.</p>
            <Row className="m-3">
                <Col>
                    <Image src={vest1} fluid={true}/>
                </Col>
                <Col>
                    <Image src={vest2} fluid={true}/>
                </Col>
            </Row>
        </>
    );
};

export default LinkedInRadionicaVest;