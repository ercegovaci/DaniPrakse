import nestle from '../assets/images/kompanije/logoi/nestlelogo.jpeg';
import meridian from "../assets/images/kompanije/logoi/meridian.png";
import oblak from "../assets/images/kompanije/logoi/oblak.png";
import Nestle from "../component/kompanije/Nestle";
import Meridian from "../component/kompanije/Meridian";
import Oblak from "../component/kompanije/Oblak";

const kompanije = [
    {
        id: 1,
        kategorija: 'Premium partneri',
        kompanije: [
            {
                idKompanije: 1,
                naziv: 'Nestlé',
                skraceniTekst: 'Nestlé je multinacionalna kompanija sa sedištem u Švajcarskoj, koja se bavi proizvodnjom i distribucijom raznovrsnih prehrambenih proizvoda i pića širom sveta.',
                kompanijaStranica: <Nestle />,
                slika: nestle,
                klasa: 'premium',
                link: 'https://www.nestle.com/',
                prikaziDugme: true
            },
            {
                idKompanije: 2,
                naziv: 'Meridian',
                skraceniTekst: 'Meridian Gaming je globalni lider u sportskom klađenju i onlajn kazino igrama koji pruža zabavno i odgovorno iskustvo igranja za sve igrače kanala i regulisanih segmenata...',
                kompanijaStranica: <Meridian />,
                slika: meridian,
                klasa: 'premium',
                link: 'https://meridianbet.rs/',
                prikaziDugme: true
            },
            {
                idKompanije: 3,
                naziv: 'Oblak Tehnologije',
                skraceniTekst: 'Oblak Tehnologije je jedan od vodećih sistem integratora u Srbiji koji objedinjavanjem softverskih i hardverskih elemenata u jedinstven sistem, stvara rešenja...',
                kompanijaStranica: <Oblak />,
                slika: oblak,
                klasa: 'premium',
                link: 'https://oblakteh.rs/',
                prikaziDugme: true
            },
        ]
    },
    {
        id: 2,
        kategorija: 'Medium partneri',
        kompanije: [
            {
                idKompanije: 1,
                naziv: 'Nestlé',
                skraceniTekst: 'Nestlé je multinacionalna kompanija sa sedištem u Švajcarskoj, koja se bavi proizvodnjom i distribucijom raznovrsnih prehrambenih proizvoda i pića širom sveta.',
                kompanijaStranica: <Nestle />,
                slika: nestle,
                klasa: 'medium',
                link: 'https://www.nestle.com/',
                prikaziDugme: true
            },
            {
                idKompanije: 2,
                naziv: 'Nestlé',
                skraceniTekst: 'Nestlé je multinacionalna kompanija sa sedištem u Švajcarskoj, koja se bavi proizvodnjom i distribucijom raznovrsnih prehrambenih proizvoda i pića širom sveta.',
                kompanijaStranica: <Nestle />,
                slika: nestle,
                klasa: 'medium',
                link: 'https://www.nestle.com/',
                prikaziDugme: true
            },
        ]
    },
    {
        id: 3,
        kategorija: 'Lite partneri',
        kompanije: [
            {
                idKompanije: 1,
                naziv: 'Nestlé',
                skraceniTekst: 'Nestlé je multinacionalna kompanija sa sedištem u Švajcarskoj, koja se bavi proizvodnjom i distribucijom raznovrsnih prehrambenih proizvoda i pića širom sveta.',
                kompanijaStranica: <Nestle />,
                slika: nestle,
                klasa: 'light',
                link: 'https://www.nestle.com/',
                prikaziDugme: true
            },
            {
                idKompanije: 2,
                naziv: 'Nestlé',
                skraceniTekst: 'Nestlé je multinacionalna kompanija sa sedištem u Švajcarskoj, koja se bavi proizvodnjom i distribucijom raznovrsnih prehrambenih proizvoda i pića širom sveta.',
                kompanijaStranica: <Nestle />,
                slika: nestle,
                klasa: 'light',
                link: 'https://www.nestle.com/',
                prikaziDugme: true
            },
        ]
    },
    {
        id: 4,
        kategorija: 'Naturalni partneri',
        kompanije: [
            {
                idKompanije: 1,
                naziv: 'Nestlé',
                skraceniTekst: 'Nestlé je multinacionalna kompanija sa sedištem u Švajcarskoj, koja se bavi proizvodnjom i distribucijom raznovrsnih prehrambenih proizvoda i pića širom sveta.',
                kompanijaStranica: <Nestle />,
                slika: nestle,
                klasa: 'naturalni',
                link: 'https://www.nestle.com/',
                prikaziDugme: true
            },
            {
                idKompanije: 2,
                naziv: 'Nestlé',
                skraceniTekst: 'Nestlé je multinacionalna kompanija sa sedištem u Švajcarskoj, koja se bavi proizvodnjom i distribucijom raznovrsnih prehrambenih proizvoda i pića širom sveta.',
                kompanijaStranica: <Nestle />,
                slika: nestle,
                klasa: 'naturalni',
                link: 'https://www.nestle.com/',
                prikaziDugme: true
            },
        ]
    },
    {
        id: 5,
        kategorija: 'Nagradni partneri',
        kompanije: [
            {
                idKompanije: 1,
                naziv: 'Nestlé',
                skraceniTekst: 'Nestlé je multinacionalna kompanija sa sedištem u Švajcarskoj, koja se bavi proizvodnjom i distribucijom raznovrsnih prehrambenih proizvoda i pića širom sveta.',
                kompanijaStranica: <Nestle />,
                slika: nestle,
                klasa: 'nagradni',
                link: 'https://www.nestle.com/',
                prikaziDugme: false
            },
            {
                idKompanije: 2,
                naziv: 'Nestlé',
                skraceniTekst: 'Nestlé je multinacionalna kompanija sa sedištem u Švajcarskoj, koja se bavi proizvodnjom i distribucijom raznovrsnih prehrambenih proizvoda i pića širom sveta.',
                kompanijaStranica: <Nestle />,
                slika: nestle,
                klasa: 'nagradni',
                link: 'https://www.nestle.com/',
                prikaziDugme: false
            },
        ]
    },
    {
        id: 6,
        kategorija: 'Medijski partneri',
        kompanije: [
            {
                idKompanije: 1,
                naziv: 'Nestlé',
                skraceniTekst: 'Nestlé je multinacionalna kompanija sa sedištem u Švajcarskoj, koja se bavi proizvodnjom i distribucijom raznovrsnih prehrambenih proizvoda i pića širom sveta.',
                kompanijaStranica: <Nestle />,
                slika: nestle,
                klasa: 'medijski',
                link: 'https://www.nestle.com/',
                prikaziDugme: false
            },
            {
                idKompanije: 2,
                naziv: 'Nestlé',
                skraceniTekst: 'Nestlé je multinacionalna kompanija sa sedištem u Švajcarskoj, koja se bavi proizvodnjom i distribucijom raznovrsnih prehrambenih proizvoda i pića širom sveta.',
                kompanijaStranica: <Nestle />,
                slika: nestle,
                klasa: 'medijski',
                link: 'https://www.nestle.com/',
                prikaziDugme: false
            },
        ]
    },

];

export default kompanije;