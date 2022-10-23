import React from "react";

const BlockComments = ({ comments }) => {
    return (
        <div className="commentsContainer">
            <div className="comments">
                <div className="commentsRector">Обращения к ректору</div>
                {comments.map((i) => (
                    <div className="comment">
                        <div className="commUser">
                            <div>{i.author}</div>
                        </div>
                        <div>{i.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlockComments;
