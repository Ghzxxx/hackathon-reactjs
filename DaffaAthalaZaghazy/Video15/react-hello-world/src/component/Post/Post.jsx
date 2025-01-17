import React from "react";

const Post =(props)=> {
    return(
        <div className="post">
                <div className="img-thumb">
                    <img src="https://placehold.co/200x150/png" alt="dummy"/>
                </div>
                <div className="content">
                    <p className="title">{props.data.title}</p>
                    <p className="desc">{props.data.body}</p>
                    <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>

                </div>

            </div>
    )
}

export default Post;