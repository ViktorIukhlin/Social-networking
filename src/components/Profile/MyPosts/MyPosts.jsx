import React from 'react';
import s from './MyPosts.module.css';

import Post from './Post/Post';

const MyPosts = (props) => {

    let myPosts = props.posts.map(
        item => <Post id={item.id} message={item.message} likesCount={item.likesCount} />
    )

    return (
        <div>
            My Post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {myPosts}
            </div>
        </div>

    )
}


export default MyPosts;