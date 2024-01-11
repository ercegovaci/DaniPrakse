import { Link } from "react-router-dom";

import sajam from '../../assets/images/ikonice-kategorije/sajamKompanija.png';
import panelDiskusija from '../../assets/images/ikonice-kategorije/paneldiskusija.png';
import radionice from '../../assets/images/ikonice-kategorije/radioniceKompanija.png';
import takmicarskiDeo from '../../assets/images/ikonice-kategorije/takmicarskiDeo.png';
import tvojih15minuta from '../../assets/images/ikonice-kategorije/tvojih15.png';
import spremanZaDane from '../../assets/images/ikonice-kategorije/spremanZaDane.png';


const subTitle = "Upoznajte se sa";
const title = "DELOVIMA PROJEKTA";


const categoryList = [
    {
        imgUrl: spremanZaDane,
        imgAlt: 'category rajibraj91 rajibraj',
        title: 'Spreman za Dan(e)',
        count: '4 predavanja',
    },
    {
        imgUrl: panelDiskusija,
        imgAlt: 'category rajibraj91 rajibraj',
        title: 'Panel-diskusija',
        count: '4 panelista',
    },
    {
        imgUrl: tvojih15minuta,
        imgAlt: 'category rajibraj91 rajibraj',
        title: 'Tvojih 15 minuta',
        count: 'Intervjui',
    },
    {
        imgUrl: sajam,
        imgAlt: 'category rajibraj91 rajibraj',
        title: 'Sajam kompanija',
        count: '30+ kompanija',
    },
    {
        imgUrl: takmicarskiDeo,
        imgAlt: 'category rajibraj91 rajibraj',
        title: 'Takmičarski deo',
        count: 'Studija slučaja',
    },
    {
        imgUrl: radionice,
        imgAlt: 'category rajibraj91 rajibraj',
        title: 'Radionice kompanija',
        count: 'Fokus grupe',
    },
]


const Category = () => {
    return (
        <div className="category-section padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row g-2 justify-content-center row-cols-xl-6 row-cols-md-3 row-cols-sm-2 row-cols-1">
                        {categoryList.map((val, i) => (
                            <div className="col" key={i}>
                                <div className="category-item text-center">
                                    <div className="category-inner">
                                        <div className="category-thumb">
                                            <img src={`${val.imgUrl}`} alt={val.imgAlt} />
                                        </div>
                                        <div className="category-content">
                                            <Link to="/delovi-projekta"><h6>{val.title}</h6></Link>
                                            <span>{val.count}</span>
                                        </div>
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
 
export default Category;