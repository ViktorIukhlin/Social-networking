import React from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Textarea} from '../../common/FormsControls/FormsControls'

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return(
    <Form className={s.area} onSubmit={props.handleSubmit}>
      <Field name="newPostText" component={Textarea} validate={[required, maxLength10]} placeholder="Post message"/>
      <button>Send</button>
    </Form>
  )
}

let ReduxAddNewPostForm = reduxForm({form: "profileAddNewPostForm"}) (AddNewPostForm);

const MyPosts = React.memo((props) => {
   
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
});



export default MyPosts;