import React, { useState, useEffect } from "react";
import BlockComments from "../shared/blockComments/blockComments";
import BlockNews from "../shared/blockNews/blockNews";
import UsersList from "../shared/usersList/usersList";
import useNews from "../../../services/useNews";
import useLetter from "../../../services/useLetter";
import useUsers from '../../../services/useUsers';
import "./admin.scss";
const Admin = () => {
    const [nw, setNew] = useState({title: '', text: ''});
    const [tokenFlag, setTokenFlag] = useState(false)
    const [tegs] = useState(['социальная жизнь', 'учебные новости', 'жизнь ВУЗа' ])
    const [valueUser, setValueUser] = useState({name: '', lastName: '', group: '', email: ''})
    const {createNews, getNews} = useNews()
    const {getLetters} = useLetter()
    const {createUser: postUser, getUsers, deleteUser} = useUsers()
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
    const [users, setUsers] = useState([]);
    const [news, setNews] = useState([])
    const [comments, setComments] = useState([])

    useEffect(() => {
        const req = async () => {
            const res = await getNews()
            setNews(res)
            const letters = await getLetters()
            setComments(letters)
            const users = await getUsers()
            setUsers(users)
        }
        req()
    }, []) // eslint-disable-line

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
        setUsers(users.filter(u => u._id !== id))
        deleteUser(id)
    }
    function renameRole(role) {
        switch (role) {
            case 'Сотрудник':
                return 'employee'
            case 'Преподаватель':
                return 'teacher'
            case 'Студент':
                return 'student'
            default:
                return
        }
    }
    function createUser(){
        if (valueUser.group && valueUser.lastName && valueUser.name){
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
            postUser({
                FCs: `${valueUser.lastName} ${valueUser.name}`,
                role: renameRole(valueToken.find(item => item.check).label),
                email: valueUser.email,
                group: valueUser.group
            })
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
