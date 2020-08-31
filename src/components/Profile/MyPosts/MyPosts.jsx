import React from 'react';
import s from './MyPosts.module.css';

import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My Post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
             <Post message="Where is my money ?" like="20"/>
             <Post message="I know you read my posts!" like="5"/>
         </div>
        </div>

    )
}


export default MyPosts;