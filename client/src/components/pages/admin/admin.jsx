import React, { useState } from "react";
import BlockComments from "../shared/blockComments/blockComments";
import BlockNews from "../shared/blockNews/blockNews";
import UsersList from "../shared/usersList/usersList";
import "./admin.scss";
const Admin = () => {
    const [nw, setNew] = useState({title: '', text: ''});
    const [tokenFlag, setTokenFlag] = useState(false)
    const [tegs, setTegs] = useState(['социальная жизнь', 'учебные новости', 'жизнь ВУЗа' ])
    const [tegFlag, setTegFlag] = useState(false)
    const [valueToken, setValueToken] = useState([{
        check: false,
        id: 1,
        label: "Админ"
    },
    {
        check: false,
        id: 2,
        label: "Учитель"
    },
    {
        check: false,
        id: 3,
        label: "Ученик"
    },
])
    const [users] = useState([
        {
            name: "Вова",
            lastName: "Смирнов",
            grup: "21HT",
            email: "123456Nn@gmail.com",
        },
        {
            name: "Андрей",
            lastName: "Карагачев",
            grup: "21VQ",
            email: "123456Ak@gmail.com",
        },
    ]);
    const [news, setNews] = useState([
        {
            title: 'Нашли котиков, которые умеют леветировать',
            text: 'Характеристика: обезличен для зрителя, характера не имеет. Его игра строится на пластике движения во время строительства башни. Пластика задается характером активной личности, а так же настроением и смыслом передаваемого события.',
            id: 1,
            tegFlag: false,
            teg: ''
        },
        {
            title: 'Нашли котиков, которые умеют леветировать',
            text: 'Среда/ситуация: старшие классы, широкий и разнообразный круг общения, влияние культурного пласта (литература, кино, музыка, история, философия).',
            id: 2,
            tegFlag: false,
            teg: ''
        }
    ])
    const [comments] = useState([{
        name: "Андрей",
        lastName: "Карагачев",
        text: 'Вы очень много работаете, может вам пора отдохнуть'
    },{
        name: "Вова",
        lastName: "Смирнов",
        text: 'Мне кажется вы слишком мало работаете, работайте побольше, а то результата не видно'
    }])
    function createNew(title, text)  {
        if(nw.text && nw.title){
            const newNews = {
                title: title,
                text: text,
                id: new Date().getTime()
            }
            setNews(prev => [...prev, newNews])
            setNew({title: '', text: ''})
        }
        
    }
    function editNew(id){
        if(!nw.text && !nw.title){
            const edNew = news.filter(i => i.id === id)[0]
            setNews(news.filter(i => i.id !== id))
            setNew({title: edNew.title, text: edNew.text})
        }
        

    }
    return (
        <div className="adminContainer">
            
            <div className="adminRow">
                
                <BlockComments comments={comments}/>
                <BlockNews setTegFlag={setTegFlag} setNews={setNews} tegFlag={tegFlag} tegs={tegs} news={news} editNew={editNew} nw={nw} setNew={setNew} title={nw.title} text={nw.text} createNew={createNew} />
                
                <UsersList valueToken={valueToken} setValueToken={setValueToken} tokenFlag={tokenFlag} setTokenFlag={setTokenFlag} users={users} />
            </div>

        </div>
    );
};

export default Admin;
