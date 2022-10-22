import React from "react";
import pancil from "../../../../assets/pancil.png";
import hambur from "../../../../assets/hamburger.png";
const BlockNews = ({
    news,
    createNew,
    tegs,
    setNews,
    title,
    text,
    nw,
    setNew,
    editNew,
}) => {
    return (
        <div className="newsContainer">
            <div className="news">
                <div className="newsTitle">Новости</div>
                {news.map((i) => (
                    <div className="">
                        <div className="nw">
                            <div className="title">
                                {i.title}
                                <img
                                    src={pancil}
                                    alt="pancil"
                                    onClick={() => editNew(i.id)}
                                />
                            </div>
                            <div className="text">
                                {i.text}
                                <img
                                    src={hambur}
                                    alt="hambur"
                                    onClick={() =>
                                        setNews(
                                            news.map((n) =>
                                                n.id === i.id
                                                    ? {
                                                          ...n,
                                                          tegFlag: !i.tegFlag,
                                                      }
                                                    : { ...n, tegFlag: false }
                                            )
                                        )
                                    }
                                />
                            </div>
                            {i.teg && (
                                <div className={"getTeg teg" + i.teg[0]}>
                                    {i.teg}
                                </div>
                            )}
                        </div>
                        <div
                            className="blockTeg "
                            style={{
                                position: "absolute",
                                display: i.tegFlag ? "block" : "none",
                            }}
                        >
                            {tegs.map((t) => (
                                <div
                                    onClick={() =>
                                        setNews(
                                            news.map((n) =>
                                                n.id === i.id
                                                    ? {
                                                          ...n,
                                                          tegFlag: false,
                                                          teg: t,
                                                      }
                                                    : { ...n, tegFlag: false }
                                            )
                                        )
                                    }
                                    className={"teg teg" + t[0]}
                                >
                                    {t}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="createNews">
                <textarea
                    value={nw.title}
                    cols="86"
                    rows="1"
                    placeholder="Заголовок"
                    onChange={(e) => setNew({ ...nw, title: e.target.value })}
                />
                <textarea
                    cols="86"
                    rows="4"
                    placeholder="Текст"
                    value={nw.text}
                    onChange={(e) => setNew({ ...nw, text: e.target.value })}
                />
                <button onClick={() => createNew(title, text)}>Создать</button>
            </div>
        </div>
    );
};

export default BlockNews;
