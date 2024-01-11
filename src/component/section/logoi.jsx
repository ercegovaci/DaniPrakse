import React, {useState} from 'react';
import logo1 from '../../assets/images/logoi/1.png';
import logo2 from '../../assets/images/logoi/2.png';
import logo3 from '../../assets/images/logoi/3.png';
import logo4 from '../../assets/images/logoi/4.png';
import logo5 from '../../assets/images/logoi/5.png';
import logo6 from '../../assets/images/logoi/6.png';
import logo7 from '../../assets/images/logoi/7.png';
import logo8 from '../../assets/images/logoi/8.png';
import logo9 from '../../assets/images/logoi/9.png';

import Slider from 'react-slick';

const Logoi = () => {

        const [settings] = useState({
            dots: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 0,
            cssEase: 'linear',
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        autoplay: true,
                        speed: 3000,
                        autoplaySpeed: 0,
                        cssEase: 'linear',
                        arrows: false,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        autoplay: true,
                        speed: 3000,
                        autoplaySpeed: 0,
                        cssEase: 'linear',
                        arrows: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        autoplay: true,
                        speed: 3000,
                        autoplaySpeed: 0,
                        cssEase: 'linear',
                        arrows: false,
                    }
                }
            ]
        });

        const logos = [
            logo1,
            logo2,
            logo3,
            logo4,
            logo5,
            logo6,
            logo7,
            logo8,
            logo9,
        ];

    return (
        <div className="mt-3">
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <div key={index} className="container logoi">
                        <img src={logo} alt='logo' />
                    </div>
                ))}
            </Slider>
        </div>
        );
    };

export default Logoi;