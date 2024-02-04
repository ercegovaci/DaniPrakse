import background from '../../assets/images/background.png';


const subTitle = "O Danima prakse";
const title = "Najveći korporativni događaj celog univerziteta";
const desc = "Sa tradicijom dugom 12 godina, projekat Dani prakse niže rekorde i pomera granice studentskog\n" +
    "organizovanja.";

const aboutList = [
    {
        imgUrl: 'assets/images/about/icon/organizacija.png',
        imgAlt: 'about icon organizacija',
        title: 'Organizacija',
        desc: 'Sa tradicijom dugom 12 godina, projekat Dani prakse niže rekorde i pomera granice studentskog\n' +
            'organizovanja.',
    },
    {
        imgUrl: 'assets/images/about/icon/partneri.png',
        imgAlt: 'about icon partneri',
        title: 'Partneri',
        desc: 'Širenjem opusa partnera koji nas podržavaju dugi niz godina, povećava se broj studenata kojima je\n' +
            'projekat namenjen.',
    },
    {
        imgUrl: 'assets/images/about/icon/cilj.png',
        imgAlt: 'about icon cilj',
        title: 'Cilj',
        desc: 'Cilj je da se kroz tri dana trajanja projekta studentima pruži prilika da se bliže upoznaju sa korporativnim\n' +
            'svetom i steknu veštine i znanja koja će im omogućiti pravu priliku za zaposlenje.',
    },
]


const About = () => {
    return (
        <div className="about-section">
            <div className="container">
                <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-end flex-row-reverse">
                    <div className="col">
                        <div className="about-right padding-tb">
                            <div className="section-header">
                                <span className="subtitle">{subTitle}</span>
                                <h2 className="title">{title}</h2>
                                <p>{desc}</p>
                            </div>
                            <div className="section-wrapper">
                                <ul className="lab-ul">
                                    {aboutList.map((val, i) => (
                                        <li key={i}>
                                            <div className="sr-left">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="sr-right">
                                                <h5>{val.title}</h5>
                                                <p>{val.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="about-left">
                            <div className="about-thumb">
                                <img src={ background } alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;