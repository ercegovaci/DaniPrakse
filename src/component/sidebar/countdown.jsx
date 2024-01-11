import { useState, useEffect } from "react";
import {Container} from "react-bootstrap";

const subTitle = "Do projekta je preostalo";
const title = "JOŠ";

const CountDown = () => {
    const [stop, setStop] = useState(false);
    const [countdownDate] = useState(new Date('02/26/2024 12:00:00').getTime());
    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        if (stop) {
            return;
        }
        setInterval(() => setNewTime(), 1000);
    });

    const setNewTime = () => {

        if (stop) {
            setState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
            return;
        }

        if (countdownDate) {
        const currentTime = new Date().getTime();

        const distanceToDate = countdownDate - currentTime;

        if (distanceToDate < 0) {
            setStop(true);
            return;
        }

        let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
            (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        let minutes = Math.floor(
            (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
        );
        let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

        const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        days = `${days}`;
        if (numbersToAddZeroTo.includes(hours)) {
            hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
            minutes = `0${minutes}`;
        } else if (numbersToAddZeroTo.includes(seconds)) {
            seconds = `0${seconds}`;
        }

        setState({ days: days, hours: hours, minutes, seconds });
        }
    };

    return (
        <>
                <div className="countdown-wrapper">
                    <div className="section-header text-center pt-5">
                        <span className="subtitle">{subTitle}</span>
                        <h2 className="title">{title}</h2>
                    </div>
                    <ul className="lab-ul date text-center justify-content-center pb-5">
                        <li>
                            <h2 className="count-title days">{state.days || '0'}</h2>
                            <p className="days_text">Dana</p>
                        </li>
                        <li>
                            <h2 className="count-title"><span className="hours">{state.hours || '00'}</span></h2>
                            <p className="hours_text">Sati</p>
                        </li>
                        <li>
                            <h2 className="count-title"><span className="minutes">{state.minutes || '00'}</span></h2>
                            <p className="minu_text">Minuta</p>
                        </li>
                        <li>
                            <h2 className="count-title"><span className="seconds">{state.seconds || '00'}</span></h2>
                            <p className="seco_text">Sekundi</p>
                        </li>
                    </ul>
                </div>
        </>

    );
};


export default CountDown;
