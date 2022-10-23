import Calendar from '../shared/calendar/calendar'

const lessons = [
    {
        title: 'Физика',
        color: 'red',
        start: 1666506112847,
        end: 1666509712847,
        description: 'Лекция по электродинамике',
        group: 'ХИ12',
        teacher: 'Белоруков И.В.',
        location: '11 кор. 310'
    }
]

const UserSchedule = () => {
    return (
        <>
            <Calendar lessons={lessons}/>;
        </>
    )
}

export default UserSchedule
