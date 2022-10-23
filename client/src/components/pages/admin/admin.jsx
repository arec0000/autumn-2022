import React, { useState, useEffect } from "react";
import BlockComments from "../shared/blockComments/blockComments";
import BlockNews from "../shared/blockNews/blockNews";
import UsersList from "../shared/usersList/usersList";
import useNews from "../../../services/useNews";
import "./admin.scss";
const Admin = () => {
    const [nw, setNew] = useState({title: '', text: ''});
    const [tokenFlag, setTokenFlag] = useState(false)
    const [tegs] = useState(['социальная жизнь', 'учебные новости', 'жизнь ВУЗа' ])
    const [valueUser, setValueUser] = useState({name: '', lastName: '', group: '', email: ''})
    const {createNews, getNews} = useNews()
    const [valueToken, setValueToken] = useState([{
        check: false,
        id: 1,
        label: "Сотрудник"
    },
    {
        check: false,
        id: 2,
        label: "Преподаватель"
    },
    {
        check: false,
        id: 3,
        label: "Студент"
    },
])
    const [users, setUsers] = useState([
        {
            name: "Вова",
            lastName: "Смирнов",
            group: "21HT",
            email: "123456Nn@gmail.com",
            id: 1
        },
        {
            name: "Андрей",
            lastName: "Карагачев",
            group: "21VQ",
            email: "123456Ak@gmail.com",
            id: 2
        },
    ]);
    const [news, setNews] = useState([])
    const [comments] = useState([{
        name: "Андрей",
        lastName: "Карагачев",
        text: 'Вы очень много работаете, может вам пора отдохнуть'
    },{
        name: "Вова",
        lastName: "Смирнов",
        text: 'Мне кажется вы слишком мало работаете, работайте побольше, а то результата не видно'
    }])

    useEffect(() => {

        const req = async () => {
            const res = await getNews()
            setNews(res)
        }
        req()
    }, [])

    function createNew(title, text)  {
        if(nw.text && nw.title){
            const newNews = {
                title: title,
                description: text,
                id: new Date().getTime()
            }
            createNews(newNews)
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
    function removeUser(id){
        setUsers(users.filter(u => u.id !== id))
    }
    function createUser(){
        if (valueUser.email && valueUser.group && valueUser.lastName && valueUser.name){
            const newUser = {
                name: valueUser.name,
                lastName: valueUser.lastName,
                group: valueUser.group,
                email: valueUser.email,
                id: new Date().getTime()
            }
            setUsers(prev => [...prev, newUser])
            setValueUser({name: '',
                lastName: '',
                group: '',
                email: '',})
        }
    }
    return (
        <div className="adminContainer">
            <div className="adminRow">

                <BlockComments comments={comments}/>
                <BlockNews setNews={setNews}  tegs={tegs} news={news} editNew={editNew} nw={nw} setNew={setNew} title={nw.title} text={nw.text} createNew={createNew} />
                
                <UsersList createUser={createUser} setValueUser={setValueUser} valueUser={valueUser} removeUser={removeUser} valueToken={valueToken} setValueToken={setValueToken} tokenFlag={tokenFlag} setTokenFlag={setTokenFlag} users={users} />
            </div>

        </div>
    );
};

export default Admin;


// {
//     title: 'Нашли котиков, которые умеют леветировать',
//     description: 'Характеристика: обезличен для зрителя, характера не имеет. Его игра строится на пластике движения во время строительства башни. Пластика задается характером активной личности, а так же настроением и смыслом передаваемого события.',
//     id: 1,
//     tegFlag: false,
//     teg: ''
// },
// {
//     title: 'Нашли котиков, которые умеют леветировать',
//     description: 'Среда/ситуация: старшие классы, широкий и разнообразный круг общения, влияние культурного пласта (литература, кино, музыка, история, философия).',
//     id: 2,
//     tegFlag: false,
//     teg: ''
// }
