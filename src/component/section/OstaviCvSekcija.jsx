import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import axios from "../../axios/instance";

const OstaviCvSekcija = () => {

const subTitle = "Ovde možete ostaviti svoj";
const title = "CV";

const [message, setMessage] = useState('');

const posaljiCV = (e) => {
    e.preventDefault();

    const ime = e.target.ime.value;
    const prezime = e.target.prezime.value;
    const email = e.target.email.value;
    const telefon = e.target.telefon.value;
    const cv = e.target.cv.value;

    if (!ime || !prezime || !email || !telefon || !cv) {
        setMessage('Morate popuniti sva polja.')
        return;
    }

    const cvFajl = e.target.cv.files[0];

    const formData = new FormData();
    formData.append(
        "cv",
        cvFajl);
    formData.append('ime', ime);
    formData.append('prezime', prezime);
    formData.append('email', email);
    formData.append('broj_telefona', telefon);

    axios.post('/leave-cv', formData).then((res) => {
        setMessage(res.data.message);
        console.log(res);
    }).catch((err) => {
        setMessage('Došlo je do greške, pokušajte ponovo.')
        console.log(err);
    });
}

    return (
        <>
            <Container>
                <div className="section-header text-center mt-3">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <Form className="m-3" onSubmit={posaljiCV} >
                    <Row>
                        <Col md={6} xs={12}>
                            <Form.Group className="mb-3" id="ime">
                                <Form.Label>Ime</Form.Label>
                                <Form.Control name="ime" type="text" placeholder="Unesite ime" />
                            </Form.Group>
                        </Col>
                        <Col md={6} xs={12}>
                            <Form.Group className="mb-3" id="ime">
                                <Form.Label>Prezime</Form.Label>
                                <Form.Control name="prezime" type="text" placeholder="Unesite prezime" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Unesite email" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" id="telefon">
                                <Form.Label>Telefon</Form.Label>
                                <Form.Control name="telefon" type="text" placeholder="Unesite broj telefon" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" id="fajl">
                                <Form.Label>CV</Form.Label>
                                <Form.Control name="cv" type="file" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button disabled={true} variant="primary" type="submit">Posalji CV</Button>
                        </Col>
                    </Row>
                </Form>
                <h3>{message}</h3>
            </Container>
        </>
    );
};

export default OstaviCvSekcija;