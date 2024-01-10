
import { Link } from "react-router-dom";

const subTitle = "Upoznajte se sa";
const title = "DELOVIMA PROJEKTA";


const categoryList = [
    {
        imgUrl: 'assets/images/category/icon/01.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        title: 'Spreman za Dan(e)',
        count: '4 predavanja',
    },
    {
        imgUrl: 'assets/images/category/icon/02.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        title: 'Panel-diskusija',
        count: '4 panelista',
    },
    {
        imgUrl: 'assets/images/category/icon/03.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        title: 'Tvojih 15 minuta',
        count: 'Intervjui',
    },
    {
        imgUrl: 'assets/images/category/icon/04.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        title: 'Sajam kompanija',
        count: '30+ kompanija',
    },
    {
        imgUrl: 'assets/images/category/icon/05.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        title: 'Takmičarski deo',
        count: 'Studija slučaja',
    },
    {
        imgUrl: 'assets/images/category/icon/06.jpg',
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