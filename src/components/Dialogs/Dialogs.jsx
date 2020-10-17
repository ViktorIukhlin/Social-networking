import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {
    
    let state = props.dialogsPage;

    let dialogsMessages = state.messages.map(
        item => <Message message={item.message} key={item.id} />
    )
    let dialogsItems = state.dialogs.map(
        item => <DialogItem name={item.name} key={item.id} id={item.id} />
    )
    let newMessageBody = state.newMessageBody;
     
    const onSendMessageClick = () => {
        props.sendMessage();
    }
    const onSendMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if(!props.isAuth){
        return <Redirect to={"/login"} />
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