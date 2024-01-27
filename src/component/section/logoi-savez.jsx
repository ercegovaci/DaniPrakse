import React, {useState} from 'react';
import logo1 from '../../assets/images/logoi/kson.png';
import logo2 from '../../assets/images/logoi/daniprakse.png';
import logo3 from '../../assets/images/logoi/bizz.png';
import logo4 from '../../assets/images/logoi/nagradne.png';

import Slider from 'react-slick';

const LogoiSavez = () => {

        const [settings] = useState({
            dots: true,
            infinite: true,
            slidesToShow: 3,
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
                        slidesToShow: 3,
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
                        slidesToShow: 2,
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
                        slidesToShow: 2,
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

export default LogoiSavez;