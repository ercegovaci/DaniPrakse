import nestle from '../assets/images/kompanije/logoi/nestlelogo.jpeg';
import meridian from "../assets/images/kompanije/logoi/meridian.png";
import oblak from "../assets/images/kompanije/logoi/oblak.png";
import balkanfun from "../assets/images/kompanije/logoi/balaknfun.png";
import ball from "../assets/images/kompanije/logoi/ball-sa-belom-pozadinom.png";
import apatinska from "../assets/images/kompanije/logoi/apatinska.png";
import sportvision from "../assets/images/kompanije/logoi/sportVision.png";
import lukova from "../assets/images/kompanije/logoi/lukova.png";
import wiener from "../assets/images/kompanije/logoi/wiener.png";
import nbsoft from "../assets/images/kompanije/logoi/nbsoft.png";
import knjaz from "../assets/images/kompanije/logoi/knjaz.png";
import pepsico from "../assets/images/kompanije/logoi/pepsico.png";
import transfera from "../assets/images/kompanije/logoi/transfera.png";
import bancaintesa from "../assets/images/kompanije/logoi/bancaintesa.png";
import dex from "../assets/images/kompanije/logoi/dex.png";
import kreston from "../assets/images/kompanije/logoi/kreston.png";
import mercator from "../assets/images/kompanije/logoi/mercator.png";

import milsped from "../assets/images/kompanije/logoi/milsped.png";
import metropol from "../assets/images/kompanije/logoi/metropol.png";
import casestudyclub from "../assets/images/kompanije/logoi/casestudyclub.png";

import Nestle from "../component/kompanije/Nestle";
import Meridian from "../component/kompanije/Meridian";
import Oblak from "../component/kompanije/Oblak";
import Ball from "../component/kompanije/Ball";
import Apatinska from "../component/kompanije/Apatinska";
import Knjaz from "../component/kompanije/Knjaz";
import Pepsico from "../component/kompanije/Pepsico";
import Lukowa from "../component/kompanije/Lukowa";
import Transfera from "../component/kompanije/Transfera";
import BancaIntesa from "../component/kompanije/BancaIntesa";
import Dex from '../component/kompanije/Dex';
import Kreston from '../component/kompanije/Kreston';
import Mercator from '../component/kompanije/Mercator';
import MILSPEDGROUP from '../component/kompanije/MILSPED';
import Wiener from '../component/kompanije/Wiener';
import NBsoft from '../component/kompanije/NBsoft';


const kompanije = [
    {
        id: 1,
        kategorija: 'Premium partneri',
        kompanije: [
            {
                idKompanije: 1,
                naziv: 'Nestlé Adriatic S',
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
            {
                id: 4,
                naziv: 'Ball corporation',
                skraceniTekst: 'U kompaniji Ball mi smo globalni tim koji sledi zajedničku viziju. Prihvatamo različitost i pružamo inkluzivno okruženje u kojem svi zaposleni mogu napredovati. Vizija za ono što sledi vodi nas svaki dan i spremni smo da budemo hrabri i da razvijamo rešenja za najveće izazove sa kojima se suočavaju naši klijenti. ',
                kompanijaStranica: <Ball />,
                slika: ball,
                klasa: 'premium',
                link: 'https://balkanfun.travel/',
                prikaziDugme: true
            },
            {
                id: 5,
                naziv: 'Apatinska pivara',
                skraceniTekst: 'Apatinska pivara je jedan od lidera u proizvodnji piva na domaćem tržištu. Sedište kompanije nalazi se u Apatinu, komercijalni centar u Beogradu, a distributivni centri u Odžacima, Inđiji, Mladenovcu,  Novom Sadu, Čačku i Nišu. ',
                kompanijaStranica: <Apatinska />,
                slika: apatinska,
                klasa: 'premium',
                link: 'https://apatinskapivara.rs/',
                prikaziDugme: true
            },
            {
                id: 6,
                naziv: 'Balkan Fun',
                skraceniTekst: 'Balkan Fun Travel aktivno sarađuje sa malim, srednjim i velikim kompanijama u realizaciji turističkih projekata svih nivoa kompleksnosti. Pored toga, Balkan Fun realizuje klasična turistička putovanja za sve generacije za desetine hiljada putnika, kao što su letovanja, zimovanja, doček nove godine u evropskim metropolama.',
                kompanijaStranica: '',
                slika: balkanfun,
                klasa: 'premium',
                link: 'https://balkanfun.travel/',
                prikaziDugme: false
            },
            {
                id: 7,
                naziv: 'Milšped Group',
                skraceniTekst: 'Kompanija Milšped počela je sa radom pre više od 30 godina, a danas je tržišni lider u oblasti transporta i logistike koja posluje u 15 zemalja i na 3 kontinenta. Pružajući svoje integrisane usluge domaćeg i međunarodnog transporta i distribucije, skladištenja, carinjenja, u sklopu grupe danas posluju i kompanije članice AML, MBOX Terminals, SKY CARGO i M-One, specijalizovane za automotive i e-comm logističke usluge, kao i intermodalni i avio transport. Grupa se ističe po globalnom prisustvu i mreži renomiranih partnera stečenoj dugogodišnjim iskustvom i logističkom ekspertizom. ',
                kompanijaStranica: <MILSPEDGROUP />,
                slika: milsped,
                klasa: 'premium',
                link: 'https://www.milsped.com/',
                prikaziDugme: true
            },
            {
                id: 8,
                naziv: 'Metropol Palace',
                skraceniTekst: 'Prestižna lokacija i enterijer hotela Metropol Palace, već 5. godinu za redom, predstavlja neizostavan deo projekta Dani prakse. Izgrađen je 1957. godine, vremenom renoviran i modernizovan, sa sobom nosi elegantan i vanvremenski stil. Svaki deo ovog prestižnog hotela, dizajniran je i obogaćen mnoštvom detalja i delova koji ovaj hotel čine prepoznatljivim i udobnim.Čast nam je što je Hotel Metropol Palace sa nama ove godine kao strateški partner i što ćete zajedno sa nama imati priliku da uživate u prostorijama tokom projekta ,,Dani prakse 2024’’. ',
                kompanijaStranica: '',
                slika: metropol,
                klasa: 'premium',
                link: 'https://www.metropolpalace.com/',
                prikaziDugme: false
            },
            {
                id: 9,
                naziv: 'CASE STUDY CLUB',
                skraceniTekst: 'Analiza, strategija, implementacija i efekti delovi su poslovne studije slučaja sa kojima će se naši delegati suočiti, a naš strateški partner Case Study Club je tu da prenese znanje i upozna vas sa koracima koji će da vas dovedu do dobrog rešenja. Drago nam je što ćete i ove godine imati priliku da učite i razvijate poslovne veštine kao i da se suočite sa realnim problem kompanije i tako sa svojim timom izađete iz zone komfora.Ne zaboravi da prijaviš svoj tim i da se oprobaš u nezaboravnom iskustvu koji će ti značiti na tvom poslovnom putu!',
                kompanijaStranica: '',
                slika: casestudyclub,
                klasa: 'premium',
                link: 'https://casestudyclub.org/en/',
                prikaziDugme: false
            },

        ]
    },
    {
        id: 2,
        kategorija: 'Medium partneri',
        kompanije: [
            {
                idKompanije: 1,
                naziv: 'Sport Vision',
                skraceniTekst: 'Sport Vision je lider sportske maloprodaje na Balkanu. Osnovan je 1996. godine kao kompanija čije su osnovne delatnosti trgovina, maloprodaja i veleprodaja u oblasti sportske industrije. Danas Sport Vision zapošljava više od 4500 radnika i posluje u 13 zemalja − Srbija, Bosna i Hercegovina, Hrvatska, Slovenija, Crna Gora, Severna Makedonija, Albanija, Rumunija, Bugarska, Grčka, Republika Češka, Slovačka i Mađarska, a sedište kompanije nalazi se u Beogradu.',
                kompanijaStranica: '',
                slika: sportvision,
                klasa: 'medium',
                link: 'https://www.sportvision.rs/',
                prikaziDugme: false
            },
            {
                idKompanije: 2,
                naziv: 'LUKOWA Group',
                skraceniTekst: 'LUKOWA Group je konglomerat koji se bavi oblastima hrane, tehnologije i nekretnina. Neprestano proširujemo svoje poslovanje i u poslednjim godinama smo postali konglomerat koji obuhvata nekoliko poslovnih oblasti, uključujući nekretnine, upravljanje bogatstvom, zabavu i ulaganja u probojne tehnologije.',
                kompanijaStranica: <Lukowa />,
                slika: lukova,
                klasa: 'medium',
                link: 'https://www.lukowa.com/',
                prikaziDugme: true
            },
            {
                idKompanije: 3,
                naziv: 'Transfera',
                skraceniTekst: 'Kompanija Transfera, najbrže rastuća logistička kompanija u Srbiji, prethodne godine je obeležila deceniju uspešnog poslovanja, tokom koje se razvila u jednog od regionalnih lidera u domenu transporta, carinskog zastupanja, skladišno – manipulativnih operacija i distribucije.',
                kompanijaStranica: <Transfera/>,
                slika: transfera,
                klasa: 'medium',
                link: 'https://www.nestle.com/',
                prikaziDugme: true
            },
            {
                id: 4,
                naziv: 'Banca Intesa',
                skraceniTekst: 'Mi smo velika ekipa sa više od 3.000 zaposlenih koji svakodnevno brinu o potrebama više od 1,3 miliona klijenata. Kroz izvrsnost naših usluga i proizvoda negujući dugoročne odnose Zajedno, stvaramo inovacije i dodatnu vrednost, gradeći održivu budućnost posvećeni očuvanju životne sredine, mladim generacijama i izgradnji inkluzivnog društva.',
                kompanijaStranica: <BancaIntesa/>,
                slika: bancaintesa,
                klasa: 'medium',
                link: 'https://www.bancaintesa.rs/',
                prikaziDugme: true
            },
            {
                id: 5,
                naziv: 'Dex',
                skraceniTekst: 'Kompanija Dex, s više od tri decenije uspešnog razvoja i primeni informacionih tehnologija u Srbiji i regionu Jugoistočne Evrope, predstavlja spoj stručnosti i iskustva. Naš tim čine stručnjaci iz različitih industrijskih oblasti, čiji timski duh i efikasnost omogućavaju postizanje maksimalnih rezultata. Već dugi niz godina istrajemo kao uspešna i renomirana kompanija.',
                kompanijaStranica: <Dex/>,
                slika: dex,
                klasa: 'medium',
                link: 'https://dex.com/',
                prikaziDugme: true
            },
            {
                id: 6,
                naziv: 'Kreston',
                skraceniTekst: 'Kreston MDM Revizija d.o.o. je kompanija u kojoj budućnost poslovanja postaje realnost, a učenje, napredovanje i podrška su susuština našeg uspeha. Osnovani pre više od 15 godina, postali smo sinonim za stručnost u oblasti revizije, računovodstva i poreskog savetovanja.',
                kompanijaStranica: <Kreston/>,
                slika: kreston,
                klasa: 'medium',
                link: 'https://www.kreston.com/',
                prikaziDugme: true
            },
            {
                id: 7,
                naziv: 'Mercator-S',
                skraceniTekst: 'Mi smo Mercator-S, članica Fortenova grupe. Sa više od 340 prodavnica različitih formata, prisutni smo, kao jedini trgovački lanac, u svim regionima Srbije. Pokrivamo sve šoping misije, od svakodnevne nabavke, preko velikih porodičnih snabdevanja, do premijum kupovine. Imamo i 4 Velpro i jedan Horeca centar. Naš tim broji više od 8.000 vrednih i posvećenih kolega koji svakog dana usluže više od 300.000 potrošača. Uvek smo blizu kupaca, od online do offline iskustva, sa širokom ponudom domaćih, regionalnih i međunarodnih brendova, sa odličnom ponudom domaćih proizvoda, od 100% domaćeg mesa do našeg brenda „Ukusi moga kraja“.',
                kompanijaStranica: <Mercator/>,
                slika: mercator,
                klasa: 'medium',
                link: 'https://mercatorcentar.rs/',
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
                naziv: 'Wiener Städtische osiguranje',
                skraceniTekst: 'Wiener Städtische osiguranje deo je vodeće austrijske osiguravajuće kompanije Vienna Insurance Group (VIG), lidera u centralnoj i istočnoj Evropi, sa tradicijom dugom skoro dva veka. U Srbiji uspešno poslujemo od 2003. godine i danas imamo poslovnu mrežu u skoro 40 gradova sa više od 1.100 zaposlenih. Misija Wiener Städtische osiguranja je da obezbedi finansijsku sigurnost kroz proizvode i usluge koji zadovoljavaju najviše standarde i odgovaraju potrebama osiguranika.',
                kompanijaStranica: <Wiener/>,
                slika: wiener,
                klasa: 'light',
                link: 'https://wiener.co.rs/',
                prikaziDugme: true
            },
            {
                idKompanije: 2,
                naziv: 'NB Soft',
                skraceniTekst: 'Platforma za online prodaju sa zaokruženim order menadžmentom. Integrisana je sa preko 30 ERP poslovnih sistema, 25 platnih sistema, 20 kurirskih službi, brojnim marketing servisima. Originalno domaće rešenje kreirano u skladu sa potrebama tržišta. Do sada je realizovano preko 10 miliona porudžbina, 20 miliona registrovanih korisnika, preko dva miliona poseta dnevno!',
                kompanijaStranica: <NBsoft/>,
                slika: nbsoft,
                klasa: 'light',
                link: 'https://www.nbsoft.rs/rs',
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
                naziv: 'Knjaz Miloš',
                skraceniTekst: 'Kompanija Knjaz Miloš je među najvećim proizvođačima mineralne vode, bezalkoholnih i energetskih napitaka. Na temeljima imena i tradicije duže od dva veka, Knjaz Miloš razvija, proizvodi i plasira na tržište napitke vrhunskog kvaliteta koji potrošačima pružaju vitalnost, osveženje i energiju svakog dana.',
                kompanijaStranica: <Knjaz />,
                slika: knjaz,
                klasa: 'naturalni',
                link: 'https://www.nestle.com/',
                prikaziDugme: true
            },
            {
                idKompanije: 2,
                naziv: 'PepsiCo',
                skraceniTekst: 'Potrošači u više od 200 zemalja sveta uživaju u PepsiCo proizvodima milijardu puta dnevno. Svojim porfolijom hrane i pića koji uključuje brendove Lay\'s, Doritos, Cheetos, Gatorade, Pepsi-Cola, Mountain Dew, Quaker i SodaStream, PepsiCo je ostvario 86 milijardi dolara neto prihoda u 2022.',
                kompanijaStranica: <Pepsico />,
                slika: pepsico,
                klasa: 'naturalni',
                link: 'https://www.nestle.com/',
                prikaziDugme: true
            },
        ]
    },
];

export default kompanije;