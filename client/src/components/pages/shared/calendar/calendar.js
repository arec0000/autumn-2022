import { useState } from 'react'
import { createPortal  } from 'react-dom'
import { Badge, Calendar as AntCalendar } from 'antd'
import moment from 'moment'
import 'moment/locale/en-gb'
import Modal from '../../../modal/modal'

import './calendar.scss'

moment.updateLocale('en', {
    weekdaysMin : ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
})

moment.updateLocale('en',  {week : {
    dow : 1,
}})

const getColor = (color) => {
    switch (color) {
        case 'red':
            return 'error'
        case 'oragne':
            return 'warning'
        default:
            return 'success'
    }
}

const LessonInfo = ({data, setActive}) => {
    const start = new Date(data.start)
    const end = new Date(data.end)
    const time = `${start.getHours()}:${start.getMinutes()} - ${end.getHours()}:${end.getMinutes()}`
    return (
        <Modal close={() => setActive(false)}>
            <h2 className="lesson-card__header">{data.title}</h2>
            <span className="lesson-card__description">{data.description}</span>
            <div className="lesson-card__additional">
                <span>{data.teacher}</span>
                <span>{data.group}</span>
            </div>
            <span className="lesson-card__time">{time}</span>
            <div className="lesson-card__additional lesson-card__additional_right">
                <span>{data.location}</span>
            </div>
        </Modal>
    )
}

const Lesson = ({data}) => {
    const [active, setActive] = useState(false)
    return (
        <>
            <span className="lesson-title" onClick={() => setActive(true)}>
                {data.title}
            </span>
            {active ? <LessonInfo data={data} setActive={setActive}/> : null}
        </>

    )
}

const Calendar = ({lessons}) => {

    const getListData = (value) => {
        const filtered = lessons.filter(lesson => {
            const start = new Date(lesson.start)
            return (
                value.month() === start.getMonth() &&
                value.year() === start.getFullYear() &&
                value.date() === start.getDate()
            )
        })
        const listData = filtered.map(lesson => {
            return {
                type: getColor(lesson.color),
                content: <Lesson data={lesson}/>
            }
        })
        return listData || []
    }

    const dateCellRender = (value) => {
        const listData = getListData(value)
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        )
    }

    return <AntCalendar dateCellRender={dateCellRender}/>

}

export default Calendar
