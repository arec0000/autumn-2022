import React from "react";

const UsersList = ({
    users,
    setTokenFlag,
    tokenFlag,
    valueToken,
    setValueToken,
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
    return (
        <div className="containerAuthUsers">
            <div className="authUsers">Зарегестрированные пользователи</div>
            <div className="users">
                {users.map((i) => (
                    <div className="user">
                        <div className="topUser">
                            <div> {i.name} </div>
                            <div> {i.lastName}</div>
                        </div>
                        <div className="bottUser">
                            <div> {i.email}</div>
                            <div> {i.grup}</div>
                        </div>
                    </div>
                ))}
                <div
                    className="createToken"
                    onClick={() => setTokenFlag(!tokenFlag)}
                >
                    Панель токенов
                </div>
                <div
                    className="blockToken"
                    style={{ opacity: tokenFlag ? "1" : "0" }}
                >
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
                    <div
                        className="createToken"
                        onClick={() =>
                            alert(
                                `Ваш токен для ${checkTocken()} ${new Date().getTime()}`
                            )
                        }
                    >
                        Создать токен
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersList;
