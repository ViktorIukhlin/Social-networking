import React from 'react';
import s from './MyPosts.module.css';

import Post from './Post/Post';

const MyPosts = (props) => {

    let myPosts = props.posts.map(
        item => <Post id={item.id} message={item.message} likesCount={item.likesCount} />
    )

    let newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    }

    return (
        <div>
            My Post
            <div className={s.area}>
                <textarea onChange={onPostChange} 
                ref={newPostElement} 
                value={props.newPostText}
                /> 

                <button onClick={addPost}>Send</button>
            </div>
            <div className={s.posts}>
                {myPosts}
            </div>
        </div>

    )
}


export default MyPosts;