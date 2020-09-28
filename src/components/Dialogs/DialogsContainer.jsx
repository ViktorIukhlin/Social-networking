import React from 'react';
import {updateNewMessageBodyActionCreator, sendMessageActionCreator} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState();
    
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }
    const onSendMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return <Dialogs 
        updateNewMessageBody={onSendMessageChange} 
        sendMessage={onSendMessageClick} 
        dialogsPage={state.dialogsPage}
    />
}

export default DialogsContainer;