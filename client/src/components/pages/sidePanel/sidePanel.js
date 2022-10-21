import { useState } from "react";
import { Link, Outlet } from "react-router-dom"
import './sidePanel.scss'

const SidePanel = () => {
    const [open, setOpen] = useState(true);

    const openSidePanel = (open) => {
        return setOpen(!open)
      }
    
    return (
        <>
            <div className="side-panel">
                <button className="side-panel_button" onClick={() => {openSidePanel(open)}}></button>
                <div className={open ? "side-panel__container" : "side-panel_hidden"}>
                    <Link className="side-panel__link" to="/news">Новости</Link>
                    <Link className="side-panel__link" to="/profile">Профиль</Link>
                    <Link className="side-panel__link" to="/schedule">Расписание</Link>
                </div>
                <Outlet className="side-panel__page"/>
            </div>
        </>
    )
}

export default SidePanel