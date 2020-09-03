import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsMessages = props.messages.map(
        item => <Message message={item.message} />
    )
    let dialogsItems = props.dialogs.map(
        item => <DialogItem name={item.name} id={item.id} />
    )

    return (
        <div className={s.dialogs}>
            <div className={s.namesList}>
                {dialogsItems}
            </div>
            <div className={s.content}>
                {dialogsMessages}
            </div>
        </div>
    )
}

export default Dialogs;