import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeaderTwo from "../component/layout/pageheader-2";
import Author from "../component/sidebar/author";
import Comment from "../component/sidebar/comment";
import CourseSideCetagory from "../component/sidebar/course-cetagory";
import CourseSideDetail from "../component/sidebar/course-detail";
import Respond from "../component/sidebar/respond";
import {Accordion} from "react-bootstrap";


const AboutSavez = () => {
    return (
            <div className="course-single-section padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="main-part">
                                <div className="course-item">
                                    <div className="course-inner">
                                        <div className="course-content">
                                            <h3>O SAVEZU</h3>
                                            <h5>Ko smo mi?</h5>
                                            <p>SSFON, osnovan 1991. godine, predstavlja neprofitnu, nepolitičku i
                                                samostalnu organizaciju posvećenu
                                                razvoju studenata kroz edukativne, kompleksne i interaktivne projekte.
                                                Fokusirana je na podršku
                                                studentima u razvoju veština poput planiranja, organizacije, projektnog
                                                menadžmenta, timskog rada,
                                                komunikacije i kreativnosti.</p>
                                            <p>Smatrajući studenta ključnim činiocem društvenog napretka, neprestano
                                                težimo ostvarenju svojih
                                                dugoročnih ciljeva, među kojima su poboljšanje kvaliteta nastave,
                                                unapređenje standarda studenata,
                                                obogaćivanje društvenog života studenata i podsticanje njihovog
                                                angažovanja u društveno značajnim
                                                pitanjima.</p>

                                            <h4>Naši projekti:</h4>
                                            <ul className="lab-ul">
                                                <li><i className="icofont-tick-mark"></i>KSON</li>
                                                <li><i className="icofont-tick-mark"></i>DANI PRAKSE</li>
                                                <li><i className="icofont-tick-mark"></i>EKOLOŠKI PROJEKAT</li>
                                                <li><i className="icofont-tick-mark"></i>SPORTBIZZ</li>
                                                <li><i className="icofont-tick-mark"></i>NEDELJA NAGRANIH IGARA</li>
                                            </ul>
                                            <p>Mi sprovodimo svoje projekte kako na nivou fakulteta, tako i na nivou
                                                celokupnog Beogradskog
                                                univerziteta. Svojom izuzetnom posvećenošću i uspešnošću, postali smo
                                                jedna od najcenjenijih i
                                                najaktivnijih studentskih organizacija na Beogradskom univerzitetu.</p>

                                            <h4>Više o projektima:</h4>

                                            <Accordion defaultActiveKey="0" flush>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>KSON</Accordion.Header>
                                                    <Accordion.Body>
                                                        Konferencija studenata Fakulteta organizacionih nauka (KSON)
                                                        predstavlja jedan od najvećih projekata koje
                                                        organizuje Savez studenata Fakulteta organizacionih nauka pod
                                                        pokroviteljstvom Fakulteta organizacionih nauka,
                                                        i za naše delegate je među omiljenim studenstkim projektima.
                                                        Konferencija se tradicionalno realizuje na Zlatiboru, u
                                                        studentskom odmaralištu „Ratko Mitrović“.
                                                        Delegati na ovom projektu svake godine imaju mogućnost da
                                                        prisustvuju predavanjima koji su u skladu sa
                                                        tematikom projekta, koja se menja u zavisnosti od aktuelnih tema
                                                        i interesovanja studenata. Na ovim
                                                        predavanjima delegati mogu da čuju iskustva i mišljenja raznih
                                                        stručnjaka, dobiju odgovore na svoja pitanja i kroz
                                                        radionice dobiju neke značajne savete. Pored interesantnih tema
                                                        i predavača naše delegate očekuju i vredne
                                                        nagrade od naših partnera.

                                                        Cilj konferencije je, da u okviru četiri dana, pruži studentima
                                                        mogučnosti sticanja znanja iz oblasti menažmenta i
                                                        informacionih tehnologija, ali i da se druže, upoznaju nove
                                                        ljude i steknu neke nezaboravne uspomene.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>DANI PRAKSE</Accordion.Header>
                                                    <Accordion.Body>
                                                        Dani prakse predstavljaju jedan od najvećih projekata Saveza studenata Fakulteta organizacionih nauka i svake
                                                        godine ostavljaju eho koji nastavlja da se širi Beogradskim univerzitetom. Projekat studentima nudi mogućnost da
                                                        se informišu o praksama koje nude kompanije na domaćem tržištu, kao i da steknu specijalizovana znanja i iskustva
                                                        u svojim oblastima interesovanja. Projekat se sastoji iz delova, a to su:Sajam kompanija,Studija
                                                        slučaja,„Spreman za dan(e)“,„Tvojih 15 minuta“, Panel-diskusija.
                                                        Dani prakse namenjeni su svim studentima Beogradskog univerziteta i upravo je to razlog zbog kojeg težimo da
                                                        svake godine ovaj projekat podignemo na viši nivo i našim učesnicima obezbedimo realnu vrednost i znanje koje će
                                                        im koristiti dalje na njihovom karijernom putu ličnog usavršavanja.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header>EKOLOŠKI PROJEKAT</Accordion.Header>
                                                    <Accordion.Body>
                                                        Ekološki projekat predstavlja novu inicijativu razvijenu sa ciljem da proširi viziju o održivosti i o ekološkoj
                                                        svesti. Ovaj inovativni projekat predstavlja prvo izdanje događaja, koji kombinuje inovacije, ekologiju t i
                                                        korporativnu društvenu odgovornost kako bi obogatio razumevanje i rešavanje ekoloških izazova za
                                                        budućnost.
                                                        Naš projekat je više od događaja - to je putovanje ka stvaranju zelenijeg i održivijeg sveta. Savez Studenata FON-a
                                                        pokreće ovaj projekat sa strašću i predanošću, nadajući se da će inspirisati buduće generacije studenata da budu
                                                        čuvari naše planete i graditelji održive budućnosti.
                                                        Delovi koje će ovaj projekat obuhvatiti su Zelena kampanja, Ekološki izazov i Edukativni deo gde će naši delegati
                                                        imati prilike da kroz dva dana trajanja ovog projekta nauče mnogo toga o ekološkoj svesti, zabave se i doprinesu
                                                        zelenom razvoju. Zajedno gradimo budućnost održivosti!
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header>SPORTBIZZ</Accordion.Header>
                                                    <Accordion.Body>
                                                        Ovaj jedinstveni projekat izdvaja se po tome što kombinuje dva, naizgled, potpuna ekstrema – sportski i edukativni.
                                                        Cilj jeste da učesnici suštinski razumeju sportski menadžment i način njegove primene u svim sferama života kroz
                                                        interakciju sa najvećim sportistima i sportskim stručnjacima, a ujedno i da se zabave.
                                                        Do sada smo u okviru projekta imali priliku da ugostimo najveća imena iz sveta sporta, a samo neki od njih su:
                                                        Nađa Higl, Milica Dabović, Ivana Nešović, Aleksandar Šapić, Marko Simonović, Srđan Zirojević, Filip Filipović i mnogi
                                                        drugi.
                                                        Pored edukativnog, organizujemo i sportsko-takmičarski deo gde učesnici imaju priliku da se oprobaju u
                                                        individualnim i kolektivnim sportovima – košarka, futsal, odbojka i tenis.
                                                        Posebno smo ponosni na humanitarni karakter ovog projekta, jer sav prikupljen novac od kotizacija za učešće
                                                        doniran je humanitarnoj organizaciji „Kolevka“. Prošlogodišnja donirana sredstva iznosila su čak 222.000 dinara.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="4">
                                                    <Accordion.Header>NEDELJA NAGRANIH IGARA</Accordion.Header>
                                                    <Accordion.Body>
                                                        Vreme praznika je vreme darivanja, a Savez ti kroz Nedelju nagradnih igara najavljuje da su praznici sve bliži.

                                                        Projekat se u celosti sprovodi online, putem našeg instagram i facebook profila. Kroz niz interaktivnih i maštovitih
                                                        igrica/zadataka koji naš tim priprema za naše učesnike, studenti mogu da osvoje vredne nagrade koje obezbeđuju
                                                        naše eminentne kompanije partneri.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default AboutSavez;