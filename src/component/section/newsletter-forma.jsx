import React, {useState} from 'react';
import axiosInstance from '../../axios/instance';

const NewsletterForma = () => {

const [message, setMessage] = useState('');
const [disableDugme, setDisableDugme] = useState(false);

const prijaviSe = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    if (!email) {
        setMessage('Morate uneti email adresu.');
        return;
    }
    //regex for email
    if (email.indexOf('@') === -1) {
        setMessage('Email adresa nije validna.');
        return;
    }

    axiosInstance.post('/create-subscription', {
        email: email,
    }).then((res) => {
        setMessage(res.data.message);
        console.log(res);
        setDisableDugme(true);
    }).catch((err) => {
        setMessage('Došlo je do greške, pokušajte ponovo.');
        console.log(err);
    });
}

    return (
        <>
            <form onSubmit={prijaviSe}>
                <div className="nf-list">
                    <input type="email" name="email" placeholder="Vaš email" />
                    <input disabled={disableDugme} type="submit" name="submit" value="Pretplatite se sada" />
                </div>
            </form>
            {
                message && <p style={
                    {
                        color: 'white',
                        fontWeight: 'bold',
                    }
                }>{message}</p>
            }
        </>
    );
};

export default NewsletterForma;