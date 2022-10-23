import React from "react";
import bin from "../../../../assets/icon/bin.png";
const UsersList = ({
    users,
    setTokenFlag,
    tokenFlag,
    valueToken,
    setValueToken,
    removeUser,
    valueUser,
    setValueUser,
    createUser,
}) => {
    function changeCheck(e) {
        setValueToken(
            valueToken.map((i) =>
                i.id == e.target.id
                    ? { ...i, check: !i.check }
                    : { ...i, check: false }
            )
        );
    }
    function checkTocken() {
        const label = valueToken.filter((i) => i.check === true)[0].label;
        return label;
    }
    function handleChange(target) {
        setValueUser((prev) => ({ ...prev, [target.name]: target.value }));
    }

    return (
        <div className="containerAuthUsers">
            <div className="authUsers">Зарегестрированные пользователи</div>
            <div className="users">
                {users.map((i) => (
                    <div className="user">
                        <div className="topUser">
                            <div> {i.FCs} </div>
                            <img
                                onClick={() => removeUser(i.id)}
                                src={bin}
                                alt="bin"
                            />
                        </div>
                        <div> {i.email}</div>

                        <div className="bottUser">
                            <div> {i.group}</div>
                            <div> {i._id}</div>
                        </div>
                    </div>
                ))}
                <div
                    className="createToken"
                    onClick={() => setTokenFlag(!tokenFlag)}
                >
                    Панел пользователя
                </div>
                <div
                    className="blockToken"
                    style={{ opacity: tokenFlag ? "1" : "0" }}
                >
                    <input
                        value={valueUser.name}
                        placeholder="Имя"
                        type="text"
                        name="name"
                        onChange={(e) => handleChange(e.target)}
                    />
                    <input
                        value={valueUser.lastName}
                        placeholder="Фамилия"
                        name="lastName"
                        type="text"
                        onChange={(e) => handleChange(e.target)}
                    />

                    {valueToken[2].check ? (
                        <input
                            value={valueUser.group}
                            placeholder="Группа"
                            name="group"
                            type="text"
                            onChange={(e) => handleChange(e.target)}
                        />
                    ) : (
                        <input
                            disabled
                            value=""
                            type="text"
                            className="disabl"
                            placeholder="Только для студента"
                        />
                    )}
                    <input
                        value={valueUser.email}
                        placeholder="Email"
                        name="email"
                        type="text"
                        onChange={(e) => handleChange(e.target)}
                    />
                    <form>
                        {valueToken.map((i) => (
                            <div>
                                <label htmlFor="admin">{i.label}</label>
                                <input
                                    type="checkbox"
                                    checked={i.check}
                                    name=""
                                    id={i.id}
                                    onClick={(e) => changeCheck(e)}
                                />
                            </div>
                        ))}
                    </form>
                    <div className="createToken" onClick={createUser}>
                        Создать пользователя
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersList;
