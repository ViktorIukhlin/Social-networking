import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import messages from './databaseMessages';
import dialogs from './databaseDialogs';

let dialogsMessages = messages.map(
    item => <Message message={item.message} />
)
let dialogsItems = dialogs.map(
    item => <DialogItem name={item.name} id={item.id} />
)

const Dialogs = (props) => {

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