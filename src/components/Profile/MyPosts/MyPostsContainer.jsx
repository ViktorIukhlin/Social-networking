import React from 'react';
import s from './MyPosts.module.css';

import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer'
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    let myPosts = props.posts.map(
        item => <Post id={item.id} message={item.message} likesCount={item.likesCount} />
    )

    let newPostElement = React.createRef();

    const addPost = () => {
        //props.addPost();
        props.dispatch(addPostActionCreator());
    }

    const onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return ( <MyPosts 
        updateNewPostText={(onPostChange) => {}}
    />)
}


export default MyPostsContainer;