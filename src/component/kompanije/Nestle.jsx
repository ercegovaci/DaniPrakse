import React from 'react';
import nestle from '../../assets/images/kompanije/logoi/nestlelogo.jpeg';
import {Container, Image} from "react-bootstrap";

const Nestle = () => {
    return (
        <>
                <h1 id="fokus">Nestlé</h1>
                <p>Nestlé je multinacionalna kompanija sa sedištem u Švajcarskoj, koja se bavi proizvodnjom i
                    distribucijom
                    raznovrsnih prehrambenih proizvoda i pića širom sveta. Osnovana 1866. godine, Nestlé je postala jedna
                    od
                    najvećih i najuticajnijih prehrambenih kompanija.</p>
                <Image src={nestle} fluid/>
                <p><a className="link-danger" href="https://www.nestle.com/">Posetite sajt</a></p>

        </>
    );
};

export default Nestle;