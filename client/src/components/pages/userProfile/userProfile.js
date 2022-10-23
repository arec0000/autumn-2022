import foto from "../../../assets/12.jpg"
import "./userProfile.scss"

import Achievements from '../achievements/achievements'

const UserProfile = () => {
    const data = {
        foto: foto,
        name: "Анна",
        surname: "Лучникова",
        group: "XU12",
        mail: "aaaaa@mail.ru",
        number: "89505078989",
        vk: "aaaaaaaaaaa",
        birthDate: "12.01.2000",
        course: "3"
    }

    return (
        <div className="user-profile">
            <div className="user-profile__main">
                <div className="user-profile__foto-container">
                    <div className="user-profile__foto">
                        <img src={data.foto} alt="foto"/>
                    </div>
                </div>
                <div className="user-profile__assessment">
                    <div className="user-profile__general-information">
                        <div>
                            <div className="user-profile__department">
                                <span>Кафедра: Инстетут опережающих технологий</span>
                            </div>
                            <div>
                                <span className="user-profile__user-inform">{data.name} {data.surname}</span>
                            </div>
                        </div>
                        <div>
                            <span>Средний балл: </span>
                            <span> 4.5</span>
                        </div>
                    </div>
                    <div className="user-profile__contact-information">
                        <div>
                            <span className="user-profile__contact-information_item icon3">{data.mail}</span>
                        </div>
                        <div>
                            <span className="user-profile__contact-information_item icon1">{data.number}</span>
                        </div>
                        <div>
                            <span className="user-profile__contact-information_item icon2">{data.vk}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="user-profile__left">
                <Achievements/>
            </div>
            <div className="user-profile__right">

            </div>
        </div>
    )
}

export default UserProfile
