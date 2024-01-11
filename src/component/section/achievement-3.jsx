import CountUp from 'react-countup';
import andjela from '../../assets/images/dobitnici-prakse/andjela.png';
import dzordz from '../../assets/images/dobitnici-prakse/dzordz.png';


const subTitle = "O PROJEKTU GOVORE";
const title = "BROJKE";


const achievementList = [
    {
        iconName: 'icofont-users-alt-4',
        count: '30',
        desc: 'kompanija',
    },
    {
        iconName: 'icofont-graduate-alt',
        count: '1150',
        desc: 'učesnika',
    },
    {
        iconName: 'icofont-notification',
        count: '1000',
        desc: 'alumni članova',
    },
    {
        iconName: 'icofont-clock-time',
        count: '900',
        desc: 'posetilaca Sajma kompanija',
    },
]

const achieveList = [
    {
        imgUrl: andjela,
        imgAlt: 'achive thumb rajibraj91 rajibraj',
        title: 'Anđela Bogićević',
        desc: 'Tokom učešća na projektu Dani Prakse, stekla sam dragoceno iskustvo koje me osnažilo i dodatno pripremilo za buduću karijeru. Ova prilika nije samo bila izvor znanja, već i olakšanje, koje je rezultiralo mogućnošću zaposlenja u sektoru ljudskih resursa kompanije Mercator. Osećam veliko uzbuđenje što ću sada moći da doprinesem uspehu naše kompanije svojim  veštinama.',
    },
    {
        imgUrl: dzordz,
        imgAlt: 'achive thumb rajibraj91 rajibraj',
        title: 'George Tharakan',
        desc: 'Tokom mog učestvovanja na projektu Dani Prakse, upoznao sam nove sfere poslovnog sveta koje su mi otvorile vrata zaposlenja u globalnom trejdinškom sektoru modne i sportske industrije. Sada radim kao menadžer trejdovanja u Američkoj firmi koja se bavi distribucijom najvećih brendova poput Nike, Adidas, Converse i New Balance.',
    }
]


const AchievementThree = () => {
    return (
        <div className="achievement-section style-3 padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="counter-part">
                        <div className="row g-4 row-cols-lg-4 row-cols-sm-2 row-cols-1 justify-content-center">
                            {achievementList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="count-item">
                                        <div className="count-inner">
                                            <div className="count-icon">
                                                <i className={val.iconName}></i>
                                            </div>
                                            <div className="count-content">
                                                <h2><span className="count"><CountUp
                                                    end={val.count}/></span><span>+</span></h2>
                                                <p>{val.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="achieve-part">
                        <div className="row g-4 row-cols-1 row-cols-lg-2">
                            {achieveList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="achieve-item">
                                        <div className="achieve-inner">
                                            <div className="achieve-thumb">
                                                <img width={400} height={200} src={`${val.imgUrl}`} alt={`${val.imgAlt}`}/>
                                            </div>
                                            <div className="achieve-content">
                                                <h4>{val.title}</h4>
                                                <p>{val.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AchievementThree;