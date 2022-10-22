import './achievements.scss'

const Achievements = ({achievements}) => {
    return (
        <div className="achievements">
            <h2>Достижения</h2>
            <div className="achievements__block">
                <span className="achievements__date">
                    15 сентября
                </span>
                <div className="achievements__line"/>
                <span className="achievements__description">
                    Какое-то достижение
                </span>
            </div>
            <div className="achievements__block">
                <span className="achievements__date">
                    15 сентября
                </span>
                <div className="achievements__line"/>
                <span className="achievements__description">
                    Какое-то достижение
                </span>
            </div>
            <div className="achievements__block">
                <span className="achievements__date">
                    15 сентября
                </span>
                <div className="achievements__line"/>
                <span className="achievements__description">
                    Какое-то достижение
                </span>
            </div>
            <div className="achievements__block">
                <span className="achievements__date">
                    15 сентября
                </span>
                <div className="achievements__line"/>
                <span className="achievements__description">
                    Какое-то достижение
                </span>
            </div>
        </div>
    )
}

export default Achievements
