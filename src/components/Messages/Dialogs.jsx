import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import {updateNewMessageBodyActionCreator, sendMessageActionCreator} from '../../redux/state'

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogsMessages = state.messages.map(
        item => <Message message={item.message} />
    )
    let dialogsItems = state.dialogs.map(
        item => <DialogItem name={item.name} id={item.id} />
    )
    let newMessageBody = state.newMessageBody;
    

    let newMessage = React.createRef();
    const addMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }
    const onSendMessageClick = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.namesList}>
                {dialogsItems}
            </div>
            <div className={s.content}>
                {dialogsMessages}
                <div className={s.area}>
                    <textarea 
                    value={newMessageBody} 
                    ref={newMessage} 
                    placeholder={'Enter your message'} 
                    onChange={onSendMessageClick} 
                    ></textarea>

                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;