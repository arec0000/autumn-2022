import foto from "../../../assets/12.jpg"
import "./userProfile.scss"

import Achievements from '../achievements/achievements'

const UserProfile = () => {
    const data = {
        foto: foto,
        name: "Anna",
        surname: "Love",
        group: "XU12",
        maile: "aaaaa@mail.ru",
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
                    <span className="user-profile__user-inform">{data.name} {data.surname}</span>
                </div>
                <div className="user-profile__basic-information">
                    <span className="text-secondary">Группа: </span>
                    <span>{data.group}</span>
                    <span className="text-secondary">Дата рождения: </span>
                    <span>{data.birthDate}</span>
                    <span className="text-secondary">Email: </span>
                    <span>{data.maile}</span>
                    <span className="text-secondary">Курс: </span>
                    <span>{data.course}</span>
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
