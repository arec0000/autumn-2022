import { Badge, Calendar } from 'antd';
import React from 'react';
import "./userSchedule.scss";
import moment from 'moment'
import 'moment/locale/en-gb';

const UserSchedule = () => {

    moment.updateLocale('en', {
        weekdaysMin : ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
    });

    moment.updateLocale('en',  {week : {
        dow : 1,
    }});

    const data = {
        type: 'warning',
        content: 'This is warning event.',
    }

    // const updateListActivities = (data) => {
    //     const levels = data.map((item, i) => {
    //         switch (i) {
    //             case 1:
    //             // do something
    //             break;
    //             case 2:
    //             // do something
    //             break;
    //             case 3:
    //             // do something
    //             break;
    //         }
    //     });
    // }

    const getListData = (value) => {
        let listData;
        switch (value.date()) {
            case 8:
                listData = [{
                        type: 'warning',
                        content: 'This is warning event.',
                    },
                    {
                        type: 'success',
                        content: 'This is usual event.',
                    },
                ];
                break;
            case 10:
                listData = [{
                        type: 'warning',
                        content: 'This is warning event.',
                    },
                    {
                        type: 'success',
                        content: 'This is usual event.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event.',
                    },
                ];
                break;
            case 15:
                listData = [{
                        type: 'warning',
                        content: 'This is warning event',
                    },
                    {
                        type: 'success',
                        content: 'This is very long usual event。。....',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 1.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 2.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 3.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 4.',
                    },
                ];
                break;
            default:
        }
        return listData || [];
    };
    const getMonthData = (value) => {
        if (value.month() === 8) {
            return 1394;
        }
    };
    const App = () => {
        const monthCellRender = (value) => {
            const num = getMonthData(value);
                return num ? (
                        <div className="notes-month">
                            <section>{num}</section>
                            <span>Backlog number</span>
                        </div>
                ) : null;
        };
        const dateCellRender = (value) => {
            const listData = getListData(value);
            return (
                <ul className="events">
                    {listData.map((item) => (
                        <li key={item.content}>
                            <Badge status={item.type} text={item.content} />
                        </li>
                    ))}
                </ul>
            );
        };
        return <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />;
    };
    const ComponentDemo = App;

    return (
        <>
            <ComponentDemo />;
        </>
    )
}

export default UserSchedule
