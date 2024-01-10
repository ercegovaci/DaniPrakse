
import { Link } from "react-router-dom";
import {useState} from "react";
import {Button} from "react-bootstrap";


const subTitle = "PROČITAJTE NAJNOVIJE";
const title = "Vesti vezane za Dane praksi";


const blogList = [
    {
        imgUrl: 'assets/images/blog/01.jpg',
        imgAlt: 'blog thumb rajibraj91 rajibraj',
        title: 'Bla bla bla',
        author: 'Mina Kovačina',
        date: 'Januar 05, 2024',
        short: 'Započela je nova godina, a sa njom i nova dešavanja u Savezu studenata FON-a. Upravo je počeo novi ciklus Dana prakse, a prvi u nizu je Dan prakse za IT studente. Ovaj događaj će se održati 27. januara 2024. godine u periodu od 10 do 18 časova.',
        longText: '<p>Započela je nova godina, a sa njom i nova dešavanja u Savezu studenata FON-a. Upravo je počeo novi ciklus Dana prakse, a prvi u nizu je Dan prakse za IT studente.</p> <p> Ovaj događaj će se održati 27. januara 2024. godine u periodu od 10 do 18 časova. Na ovom događaju će studenti imati priliku da se upoznaju sa kompanijama iz IT sektora, da čuju njihova iskustva i da se informišu o mogućnostima za praksu i zaposlenje. Osim toga, studenti će imati priliku da prisustvuju radionicama koje će održati kompanije, kao i da se prijave za fokus grupe. Ukoliko želite da saznate više o ovom događaju, posetite naš sajt i društvene mreže. Vidimo se!</p>',
        btnText: 'Pročitaj više',
    },
    {
        imgUrl: 'assets/images/blog/01.jpg',
        imgAlt: 'blog thumb rajibraj91 rajibraj',
        title: 'Metropol',
        author: 'Mina Kovačina',
        date: 'Januar 03, 2024',
        short: 'Započela je nova godina, a sa njom i nova dešavanja u Savezu studenata FON-a. Upravo je počeo novi ciklus Dana prakse, a prvi u nizu je Dan prakse za IT studente. Ovaj događaj će se održati 27. januara 2024. godine u periodu od 10 do 18 časova.',
        longText: '<p>Započela je nova godina, a sa njom i nova dešavanja u Savezu studenata FON-a. Upravo je počeo novi ciklus Dana prakse, a prvi u nizu je Dan prakse za IT studente. Ovaj događaj će se održati 27. januara 2024. godine u periodu od 10 do 18 časova. Na ovom događaju će studenti imati priliku da se upoznaju sa kompanijama iz IT sektora, da čuju njihova iskustva i da se informišu o mogućnostima za praksu i zaposlenje. Osim toga, studenti će imati priliku da prisustvuju radionicama koje će održati kompanije, kao i da se prijave za fokus grupe. Ukoliko želite da saznate više o ovom događaju, posetite naš sajt i društvene mreže. Vidimo se!</p>',
        btnText: 'Pročitaj više',
    },
    {
        imgUrl: 'assets/images/blog/02.jpg',
        imgAlt: 'blog thumb rajibraj91 rajibraj',
        title: 'Idemo odmah odmah',
        author: 'Mina Kovačina',
        date: 'Januar 01, 2024',
        short: 'Započela je nova godina, a sa njom i nova dešavanja u Savezu studenata FON-a. Upravo je počeo novi ciklus Dana prakse, a prvi u nizu je Dan prakse za IT studente. Ovaj događaj će se održati 27. januara 2024. godine u periodu od 10 do 18 časova.',
        longText: '<p>Započela je nova godina, a sa njom i nova dešavanja u Savezu studenata FON-a. Upravo je počeo novi ciklus Dana prakse, a prvi u nizu je Dan prakse za IT studente. Ovaj događaj će se održati 27. januara 2024. godine u periodu od 10 do 18 časova. Na ovom događaju će studenti imati priliku da se upoznaju sa kompanijama iz IT sektora, da čuju njihova iskustva i da se informišu o mogućnostima za praksu i zaposlenje. Osim toga, studenti će imati priliku da prisustvuju radionicama koje će održati kompanije, kao i da se prijave za fokus grupe. Ukoliko želite da saznate više o ovom događaju, posetite naš sajt i društvene mreže. Vidimo se!</p>',
        btnText: 'Pročitaj više',
    },
    {
        imgUrl: 'assets/images/blog/03.jpg',
        imgAlt: 'blog thumb rajibraj91 rajibraj',
        title: 'Naslov 4',
        author: 'Mina Kovačina',
        date: 'Decembar 19, 2023',
        short: 'Započela je nova godina, a sa njom i nova dešavanja u Savezu studenata FON-a. Upravo je počeo novi ciklus Dana prakse, a prvi u nizu je Dan prakse za IT studente. Ovaj događaj će se održati 27. januara 2024. godine u periodu od 10 do 18 časova.',
        longText: '<p>Započela je nova godina, a sa njom i nova dešavanja u Savezu studenata FON-a. Upravo je počeo novi ciklus Dana prakse, a prvi u nizu je Dan prakse za IT studente. Ovaj događaj će se održati 27. januara 2024. godine u periodu od 10 do 18 časova. Na ovom događaju će studenti imati priliku da se upoznaju sa kompanijama iz IT sektora, da čuju njihova iskustva i da se informišu o mogućnostima za praksu i zaposlenje. Osim toga, studenti će imati priliku da prisustvuju radionicama koje će održati kompanije, kao i da se prijave za fokus grupe. Ukoliko želite da saznate više o ovom događaju, posetite naš sajt i društvene mreže. Vidimo se!</p>',
        btnText: 'Pročitaj više',
    },
    {
        imgUrl: 'assets/images/blog/03.jpg',
        imgAlt: 'blog thumb rajibraj91 rajibraj',
        title: 'Naslov 5',
        author: 'Mina Kovačina',
        date: 'Decembar 14, 2023',
        short: 'Započela je nova godina, a sa njom i nova dešavanja u Savezu studenata FON-a. Upravo je počeo novi ciklus Dana prakse, a prvi u nizu je Dan prakse za IT studente. Ovaj događaj će se održati 27. januara 2024. godine u periodu od 10 do 18 časova.',
        longText: '<p>Započela je nova godina, a sa njom i nova dešavanja u Savezu studenata FON-a. Upravo je počeo novi ciklus Dana prakse, a prvi u nizu je Dan prakse za IT studente. Ovaj događaj će se održati 27. januara 2024. godine u periodu od 10 do 18 časova. Na ovom događaju će studenti imati priliku da se upoznaju sa kompanijama iz IT sektora, da čuju njihova iskustva i da se informišu o mogućnostima za praksu i zaposlenje. Osim toga, studenti će imati priliku da prisustvuju radionicama koje će održati kompanije, kao i da se prijave za fokus grupe. Ukoliko želite da saznate više o ovom događaju, posetite naš sajt i društvene mreže. Vidimo se!</p>',
        btnText: 'Pročitaj više',
    },
    {
        imgUrl: 'assets/images/blog/03.jpg',
        imgAlt: 'blog thumb rajibraj91 rajibraj',
        title: 'Naslov 5',
        author: 'Mina Kovačina',
        date: 'Decembar 14, 2023',
        short: 'Započela je nova godina, a sa njom i nova dešavanja u Savezu studenata FON-a. Upravo je počeo novi ciklus Dana prakse, a prvi u nizu je Dan prakse za IT studente. Ovaj događaj će se održati 27. januara 2024. godine u periodu od 10 do 18 časova.',
        longText: '<p>Započela je nova godina, a sa njom i nova dešavanja u Savezu studenata FON-a. Upravo je počeo novi ciklus Dana prakse, a prvi u nizu je Dan prakse za IT studente. Ovaj događaj će se održati 27. januara 2024. godine u periodu od 10 do 18 časova. Na ovom događaju će studenti imati priliku da se upoznaju sa kompanijama iz IT sektora, da čuju njihova iskustva i da se informišu o mogućnostima za praksu i zaposlenje. Osim toga, studenti će imati priliku da prisustvuju radionicama koje će održati kompanije, kao i da se prijave za fokus grupe. Ukoliko želite da saznate više o ovom događaju, posetite naš sajt i društvene mreže. Vidimo se!</p>',
        btnText: 'Pročitaj više',
    },

]

const Blog = () => {

    const [izabranaVest, setIzabranaVest] = useState({});
    const [prikaziVest, setPrikaziVest] = useState(false);

    const prikaziVestHandler = (vest) => {
        setIzabranaVest(vest);
        setPrikaziVest(true);
    }

    return (
        <div className="blog-section padding-tb section-bg">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                {!prikaziVest ? (<div className="section-wrapper">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
                        {blogList.map((val, i) => (
                            <div className="col" key={i}>
                                <div className="post-item">
                                    <div className="post-inner">
                                        <div className="post-thumb">
                                            <Link to="#"><img width={370} height={250} src={`${val.imgUrl}`}
                                                                         alt={`${val.imgAlt}`}/></Link>
                                        </div>
                                        <div className="post-content">
                                            <Link to="#"><h4>{val.title}</h4></Link>
                                            <div className="meta-post">
                                                <ul className="lab-ul">
                                                    <li><i className="icofont-ui-user"></i>{val.author}</li>
                                                    <li><i className="icofont-calendar"></i>{val.date}</li>
                                                </ul>
                                            </div>
                                            <p>{val.short}</p>
                                        </div>
                                        <div className="post-footer">
                                            <div className="pf-left">
                                                <Button onClick={() => prikaziVestHandler(val)} className="lab-btn-text">{val.btnText}</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>) : (
                    <>
                        <h3>{izabranaVest.title}</h3>
                        <img src={`${izabranaVest.imgUrl}`}
                             alt={`${izabranaVest.imgAlt}`}/>
                        <p>{izabranaVest.author} : {izabranaVest.date}</p>
                        <div dangerouslySetInnerHTML={{__html: izabranaVest.longText}} />
                        <Button onClick={() => setPrikaziVest(false)} className="lab-btn-text">Nazad</Button>
                    </>
                )}

            </div>
        </div>
    );
}

export default Blog;