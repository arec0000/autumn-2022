import './userNews.scss'
import squiral from '../../../assets/squiral.jpeg'
import Modal from '../shared/modal/modal'
import { useState, useEffect, useRef } from 'react'
import useNews from '../../../services/useNews'

const LetterModal = ({close}) => {
    const ref = useRef(null)

    const submit = () => {
        
    }
    return (
        <Modal close={close}>
            <div className="letter__span">
                <span>Письмо ректору</span>
            </div>
            <div className="letter__textarea">
                <textarea ref={ref} cols="25" rows="15"></textarea>
            </div>
            <div className="letter__button">
                <button onClick={submit}>Отправить</button>
            </div>
        </Modal>
    );
};

const UserNews = () => {
    const [letter, setLetter] = useState(false);
    const [news, setNews] = useState([]);

    useEffect(() => {
        getNews().then((res) => {
            setNews(res);
        });
    }, []);

    const { getNews } = useNews();

    const openModal = () => {
        setLetter(true);
    };

    const closeModal = () => {
        return setLetter(false);
    };

    function updateChars(news) {
        const items = news.map((item, i) => {
            return (
                <>
                    <li key={item._id}>
                        <div className="news__card">
                            <div className="news__img-container">
                                <img src={squiral} alt="белка" />
                            </div>
                            <div className="news__name">
                                <span>{item.title}</span>
                            </div>
                            <div className="news__description">
                                <p>{item.description}</p>
                            </div>
                            <div className="news__contact">
                                <div>
                                    <span>Денис Братусь</span>
                                </div>
                                <div>
                                    <span>23.10.2022</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </>
            );
        });

        return <ul className="news__ul">{items}</ul>;
    }

    const rectorModal = letter ? <LetterModal close={closeModal} /> : null;

    return (
        <div className="news">
<<<<<<< HEAD
            <button className="news__button" onClick={openModal}>Написать ректору</button>
=======
            <button
                className="news__button news__button_letter"
                onClick={openModal}
            >
                Написать ректору
            </button>
>>>>>>> 6018c4054916ea20434fe2837a87828372c36a32
            <button className="news__button">Предложить новость</button>
            {updateChars(news)}
            {rectorModal}
        </div>
    );
};

export default UserNews;
