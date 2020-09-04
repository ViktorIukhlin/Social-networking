import React from 'react';
import s from './MyPosts.module.css';

import Post from './Post/Post';

const MyPosts = (props) => {

    let myPosts = props.posts.map(
        item => <Post id={item.id} message={item.message} likesCount={item.likesCount} />
    )

    let newPostElement = React.createRef();

    const addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div>
            My Post
            <div className={s.area}>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Send</button>
            </div>
            <div className={s.posts}>
                {myPosts}
            </div>
        </div>

    )
}


export default MyPosts;