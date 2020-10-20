import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form'

const Dialogs = (props) => {
  let state = props.dialogsPage

  let dialogsMessages = state.messages.map((item) => (
    <Message message={item.message} key={item.id} />
  ))
  let dialogsItems = state.dialogs.map((item) => (
    <DialogItem name={item.name} key={item.id} id={item.id} />
  ))

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.namesList}>{dialogsItems}</div>
      <div className={s.content}>{dialogsMessages}</div>
      <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.area}>
        <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm);

export default Dialogs
