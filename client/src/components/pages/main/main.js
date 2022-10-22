import { useState } from "react";
import { Link, Outlet } from "react-router-dom"
import './main.scss'

const Main = () => {
    const [open, setOpen] = useState(true);

    const openSidePanel = (open) => {
        return setOpen(!open)
      }

    return (
        <>
            <div className="main">
                <div className="main__container">
                    <div>
                        <button className= {`main__button${open ? "" : " main__button_close"}`} onClick={() => {openSidePanel(open)}}></button>
                    </div>
                    <div className= {`side-panel${open ? "" : " side-panel_hidden"}`}>
                        <Link className="side-panel__link" to="/news">Новости</Link>
                        <Link className="side-panel__link side-panel__link_profile" to="/profile">Профиль</Link>
                        <Link className="side-panel__link side-panel__link_schedule" to="/schedule">Расписание</Link>
                    </div>
                    <div>
                        <Outlet className="side-panel__page"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
