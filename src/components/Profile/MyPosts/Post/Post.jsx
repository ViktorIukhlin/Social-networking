import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    debugger;
    return (
        <div className={s.post}>
            <img src="https://s0.rbk.ru/v6_top_pics/resized/1200xH/media/img/2/31/755913669534312.jpg" alt="avatar" />
                <br/>{props.id}:{props.message} 
            <div>
                <span> {props.likesCount} like</span>
            </div>
        </div>
    )
}


export default Post;