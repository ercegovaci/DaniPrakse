import React from 'react';
import {Image} from "react-bootstrap";
import meridian1 from '../../assets/images/kompanije/slike/meridian1.jpeg';
import meridian2 from '../../assets/images/kompanije/slike/meridian2.jpeg';

const Meridian = () => {
    return (
        <>
            <h1 id="fokus">Meridian</h1>
            <p>Meridian Gaming je globalni lider u sportskom klađenju i onlajn kazino igrama koji pruža
                zabavno i odgovorno iskustvo igranja za sve igrače kanala i regulisanih segmenata ponude igara na
                sreću.</p>
            <p>
                Osnovani 2001. godine, Meridian je jedna od najvećih grupa za sportsko klađenje i igre na sreću sa timom
                od preko 1.000 profesionalaca pruža vrhunsku zabavu za igrače i zajedničke mogućnosti za zajednice,
                zaposlene i akcionare.
            </p>
            <p>
                U poslednjih dvadeset godina, Meridian je zapošljavao preko 12.000 ljudi širom sveta. Meridianbet se
                pridržava najsigurnijih i najinovativnijih standarda igara na svetu za odrasla, tako što će se pobrinuti
                da svaki korisnik može da igra u okviru svojih finansijskih mogućnosti i doživite najbolju moguću
                uslugu.
            </p>
            <p>
                Pored toga, kompanija Meridian prepoznaje društvenu ulogu i želi da preuzme vođstvo na polju
                društveno-odgovornog poslovanja. Ovom strategijom je uspešno realizovano nekoliko stotina CSR projekata,
                a to je samo početak u ovakvom vidu poslovanja.
            </p>
            <Image src={meridian1} fluid/>
            <p>U skladu sa tim, pokrenuta je i zelena agenda, organizovane su brojne donacije, kao i stupendije
                najboljim studentima, odnosno budućim liderima u brojnim industrijama u Srbiji. Meridian fondacija "Od
                srca s ljubavlju" godinama unazad sprovodi akciju nagrađivanja i obezbeđivanja stipendije za najbolje
                studente u Srbiji. Brend koji posluje na preko 15 regionalnih i svetskih tržišta i ove godine je ugostio
                i nagradio najbolje studente iz domaćih univerzitetskih centara Srbije.</p>
            <p>Inače, kompanija Meridian i Fondacija od srca sa ljubavlju jedinstveni su u svetu gaminga u ovom delu
                sveta i po tome što akcije prikupljanja sredstava za pomoć namenjena lečenju mališana koji boluju od
                retkih i opasnih bolesti organizuju putem opcije “Doniraj” na web sajtu meridianbet.rs. Renomirani brend
                u oblasti igara na sreću za svoje korisnike kreirao je poseban model direktnog doniranja, na kome
                korisnici sajta mogu individualno izvršiti donaciju novčanog iznosa za potrebe sprovođenja humanitarnih
                akcija i raznih drugih društvenih aktivnosti.</p>
            <p>
                Donacije kompanije Meridian, posredstvom Fondacije „Od srca sa ljubavlju“, predstavljaju jedinstvenu
                crowdfunding platformu u domaćoj i regionalnoj betting industriji koja direktne korisnike usluga
                pretvara u humanitarce i donatore. Prikupljanjem sredstava za određene društvene akcije koje se nalaze
                na sajtu kompanije, korisnici imaju mogućnost da sopstvenim izobrom odaberu koji tip akcija žele da
                kompanija Meridian sprovede.
            </p>
            <Image src={meridian2} fluid/>
            <p>Na taj način korisnici kroz online model dodatno podstiču i osnažuju samu kompaniju da uzme učešće i
                delotvornije pristupi rešavanju ključnih društvenih problema. Korišćenjem online platforme za doniranje,
                kompanija Meridian je postala jedina domaća i gaming kompanija iz regiona koja je neposredno u društveno
                odgovorne akcije uključila i svoje korisnike.</p>
            <p>Kompanija Meridian, jedna je od retkih koja je uspela da spoji gambling industtriju sa
                društveno-odgovornim poslovanjem, i u tome će nastojati i u narednim godinama. </p>
        </>
    );
};

export default Meridian;