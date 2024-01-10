
import pedja from '../../assets/images/contact/tim/pedja.jpeg';
import nadja from '../../assets/images/contact/tim/nadja.jpeg';
import kaca from '../../assets/images/contact/tim/kaca.jpeg';
import mina from '../../assets/images/contact/tim/mina.jpeg';
import pcelica from '../../assets/images/contact/tim/pcelica.jpeg';
import luka from '../../assets/images/contact/tim/luka.jpeg';
import jana from '../../assets/images/contact/tim/jana.jpeg';
import ann from '../../assets/images/contact/tim/ann.jpeg';
import ivana from '../../assets/images/contact/tim/ivana.jpeg';
import tanja from '../../assets/images/contact/tim/tanja.jpeg';
import anastasija from '../../assets/images/contact/tim/anastasija.jpeg';
import milapujana from '../../assets/images/contact/tim/milapujana.jpeg';
import anja from '../../assets/images/contact/tim/anja.jpeg';
import nikola from '../../assets/images/contact/tim/nikola.jpeg';


const subTitle = "Upoznajte se sa";
const title = "TIMOM KOJI VODI PROJEKAT";

const coreTim3 =[
    {
        imgUrl: jana,
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Jana Đurić',
        degi: 'Koordinator projekta',
        courseCount: 'jana.djuric.ssfon@gmail.com',
        studentAnroll: 'https://www.linkedin.com/in/jana-djuric/',
    },
    {
        imgUrl: anja,
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Anja Gladić',
        degi: 'Lider AR tima',
        courseCount: 'anja.gladic.ssfon@gmail.com',
        studentAnroll: 'https://www.linkedin.com/in/anjagladic/',
    },
    {
        imgUrl: ann,
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Ann Tharakan',
        degi: 'Lider CR tima',
        courseCount: 'ann.tharakan.ssfon@gmail.com',
        studentAnroll: 'https://www.linkedin.com/in/anntharakan/',
    },
];

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

const uo3 =[
    {
        imgUrl: pedja,
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Predrag Živanović',
        degi: 'Predsednik organizacije',
        courseCount: 'predrag.zivanovic.ssfon@gmail.com',
        studentAnroll: 'https://www.linkedin.com/in/predrag-%C5%BEivanovi%C4%87-7258a3182/',
    },
    {
        imgUrl: nadja,
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Nađa Filipović',
        degi: 'Predsednik AR tima',
        courseCount: 'nadja.filipovic.ssfon@gmail.com',
        studentAnroll: 'https://www.linkedin.com/in/nadjafilipovic/',
    },
    {
        imgUrl: kaca,
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Katarina Petrović',
        degi: 'Predsednik CR tima',
        courseCount: 'katarina.petrovic.ssfon@gmail.com',
        studentAnroll: 'https://www.linkedin.com/in/katarinaapetrovic/',
    },
];

const uo4 =[
    {
        imgUrl: mina,
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Mina Kovačina',
        degi: 'Predsednik tima za IT i dizajn',
        courseCount: 'mina.kovacina.ssfon@gmail.com',
        studentAnroll: 'https://www.linkedin.com/in/kovacinamina/',
    },
    {
        imgUrl: pcelica,
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Anđela Mitrović',
        degi: 'Predsednik PR tima',
        courseCount: 'andjela.mitrovic.ssfon@gmail.com',
        studentAnroll: 'https://www.linkedin.com/in/an%C4%91ela-mitrovi%C4%87-51a39a232/',
    },
    {
        imgUrl: luka,
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Luka Boroš',
        degi: 'Predsednik HR tima',
        courseCount: 'luka.boros.ssfon@gmail.com',
        studentAnroll: 'https://www.linkedin.com/in/luka-boros/',
    },
    {
        imgUrl: nikola,
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Nikola Đorđević',
        degi: 'Predsednik tima za logistiku',
        courseCount: 'nikola.djordjevic.ssfon@gmail.com',
        studentAnroll: 'https://www.linkedin.com/in/nikolaadjordjevic/',
    },
];

const Instructor = () => {
    return (
        <div className="instructor-section padding-tb section-bg">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <h3 className="text-center font-italic">CORE TIM</h3>
                    <div
                        className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 m-3">

                        {coreTim3.map((val, i) => (
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
                </div>
                <div className="section-wrapper">
                    <h3 className="text-center font-italic mt-3">UPRAVNI ODBOR</h3>
                    <div
                        className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 m-3">

                        {uo3.map((val, i) => (
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

                    <div
                        className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 m-3">
                        {uo4.map((val, i) => (
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
                </div>
            </div>
        </div>
    );
}

export default Instructor;