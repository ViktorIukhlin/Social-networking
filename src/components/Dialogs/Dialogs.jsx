import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    
    let state = props.dialogsPage;

    let dialogsMessages = state.messages.map(
        item => <Message message={item.message} />
    )
    let dialogsItems = state.dialogs.map(
        item => <DialogItem name={item.name} id={item.id} />
    )
    let newMessageBody = state.newMessageBody;
     
    const onSendMessageClick = () => {
        props.sendMessage();
    }
    const onSendMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
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
                    placeholder={'Enter your message'} 
                    onChange={onSendMessageChange} 
                    ></textarea>

                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;