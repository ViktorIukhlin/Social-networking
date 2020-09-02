import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';

const Message = (props) => {
    return (
    <div className={s.message}>{props.message}</div>
    )
}
let messages = [
    {id: 1, message: 'I think the time has come...'},
    {id: 1, message: 'I\'m very angry'},
    {id: 1, message: 'I know you ate my food!!!'}
]
let dialogsMessages = messages.map(
    item => <Message message={item.message} />
)

let dialogs = [
   { name: 'Hanna', id: 1},
   { name: 'BonBon', id: 2},
   { name: 'Mike', id: 3},
   { name: 'Dino', id: 4},
   { name: 'Lex', id: 5},
   { name: 'MoMo', id: 6}
]
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