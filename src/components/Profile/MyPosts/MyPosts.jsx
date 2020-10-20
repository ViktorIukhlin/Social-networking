import React from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const AddNewPostForm = (props) => {
  return(
    <Form className={s.area} onSubmit={props.handleSubmit}>
      <Field name="newPostText" component="textarea"/>
      <button>Send</button>
    </Form>
  )
}

let ReduxAddNewPostForm = reduxForm({form: "profileAddNewPostForm"}) (AddNewPostForm);

const MyPosts = (props) => {
  let myPosts = props.posts.map(
    item => <Post id={item.id} message={item.message} key={item.id} likesCount={item.likesCount} />
  )

  const onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div>
      My Post
      <ReduxAddNewPostForm onSubmit={onAddPost}/>
      <div className={s.posts}>
        {myPosts}
      </div>
    </div>
  )
}



export default MyPosts;