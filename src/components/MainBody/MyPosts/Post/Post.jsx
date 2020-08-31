import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src="https://s0.rbk.ru/v6_top_pics/resized/1200xH/media/img/2/31/755913669534312.jpg" alt="avatar" />
            {props.message}
            <div>
                <span>{props.like} like</span>
            </div>
        </div>
    )
}


export default Post;