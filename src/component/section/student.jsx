import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";
import aftermovie from '../../assets/images/aftermovie.mp4';
import galeb from '../../assets/images/galeb.jpeg';
import meridianbet from '../../assets/images/meridijanbet.jpeg';


const subTitle = "OSETITE ATMOSFERU UZ PROŠLOGODIŠNJI";
const title = "AFTERMOVIE";


const studentList = [
    {
        imgUrl: galeb ,
        imgAlt: 'student rajibraj91 rajibraj',
        name: 'Galeb',
        degi: 'Premium Partner',
        desc: 'Saradnju sa Savezom studenata FON-a u prethodnom periodu okarakterisala bih kao pravo\n' +
            'osveženje. Imali smo priliku da se okružimo mladim, perspektivnim studentima, da se upoznamo dublje\n' +
            'sa njihovim ciljevima i željama, i pomognemo im da iste ostvare kroz organizaciju sjajnih projekata.\n' +
            'Njihove ideje, motivacija i posvećenost učinile su nas ponosnim partnerima, zbog čega jedva čekamo da\n' +
            'se nakon završenih studija neki “Savezovac” priključi našem timu i poleti zajedno sa nama u nove\n' +
            'pobede',
    },
    {
        imgUrl: meridianbet ,
        imgAlt: 'student rajibraj91 rajibraj',
        name: 'Meridianbet',
        degi: 'Godišnji Partner',
        desc: 'Čast nam je što već 5 godina sarađujemo i podržavamo akcije koje Savez studenata FON-\n' +
            'a organizuje. Naša vrata su uvek otvorena za studente, jer oni prestavljaju budućnost naše zemlje.\n' +
            'Radujemo se novim akcijama i zajedničkim projektima koji su pred nama!',
    },
]


const Student = () => {
    return (
        <div className="student-feedbak-section padding-tb shape-img">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row justify-content-center row-cols-lg-2 row-cols-1">
                        <div className="col">
                            {studentList.map((val, i) => (
                                <div className="stu-feed-item" key={i}>
                                    <div className="stu-feed-inner">
                                        <div className="stu-feed-top">
                                            <div className="sft-left">
                                                <div className="sftl-thumb">
                                                    <img width={50} height={50} src={`${val.imgUrl}`} alt={val.imgAlt} />
                                                </div>
                                                <div className="sftl-content">
                                                    <Link to="#"><h6>{val.name}</h6></Link>
                                                    <span>{val.degi}</span>
                                                </div>
                                            </div>
                                            <div className="sft-right">
                                                <Rating />
                                            </div>
                                        </div>
                                        <div className="stu-feed-bottom">
                                            <p>{val.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className="col">
                            <div className="sf-left">
                                <div className="sfl-thumb">
                                    <video width="100%" height="100%" src={aftermovie} controls>

                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Student;