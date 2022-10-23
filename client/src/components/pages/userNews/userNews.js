import './userNews.scss'
import squiral from '../../../assets/squiral.jpeg'


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



const UserNews = () => {

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

    return (
        <div className="news">
            <button className="news__button">Предложить новость</button>
            {updateChars(news)}
        </div>
    )
}

export default UserNews
