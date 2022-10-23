import './userNews.scss'
import squiral from '../../../assets/squiral.jpeg'
import Modal from '../shared/modal/modal'
import { useState } from 'react'

const news = [
    {
        img: squiral,
        name: "Хакатон",
        description: "Я хочу поучаствовать в хакатоне. Он проводится в ДГТУ. Я программист, изучаю JavaScript, React, знаком с основами вёрстки. Хочу пригласить заинтересованных людей поучавствовать со мной и моим другом, всего может набраться в команду 6 человек.",
        category: "",
        author: "Денис Братусь",
        date: "23.10.2022"
    },
    {
        img: squiral,
        name: "Хакатон",
        description: "Я хочу поучаствовать в хакатоне. Он проводится в ДГТУ. Я программист, изучаю JavaScript, React, знаком с основами вёрстки. Хочу пригласить заинтересованных людей поучавствовать со мной и моим другом, всего может набраться в команду 6 человек.",
        category: "",
        author: "Денис Братусь",
        date: "23.10.2022"
    }
]

const LetterModal = ({close}) => {
    return (
        <Modal close={close}>
            <div className="letter__span">
                <span>Письмо ректору</span>
            </div>
            <div className="letter__textarea">
                <textarea name="" id="" cols="25" rows="15"></textarea>
            </div>
            <div className="letter__button">
                <button onClick={() => {}}>Отправить</button>
            </div>
        </Modal>
    )
}

const UserNews = () => {
    const [letter, setLetter] = useState(false);

    const openModal = () => {
        setLetter(true)
    }

    const closeModal = () => {
        return setLetter(false)
    }

    function updateChars(news) {
        const items = news.map((item, i) => {
            return (
                <>
                    <li key={item.id}>
                        <div className="news__card">
                            <div className="news__img-container">
                                <img src={item.img} alt="белка" />
                            </div>
                            <div className="news__name">
                                <span>{item.name}</span>
                            </div>
                            <div className="news__description">
                                <p>{item.description}</p>
                            </div>
                            <div className="news__contact">
                                <div>
                                    <span>{item.author}</span>
                                </div>
                                <div>
                                    <span>{item.date}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </>
            )
        });

        return (
            <ul className="news__ul">
                {items}
            </ul>
        )
    }


    const rectorModal = letter ? <LetterModal close={closeModal}/> : null;

    return (
        <div className="news">
            <button className="news__button news__button_letter" onClick={openModal}>Написать ректору</button>
            <button className="news__button">Предложить новость</button>
            {updateChars(news)}
            {rectorModal}
        </div>
    )
}

export default UserNews
