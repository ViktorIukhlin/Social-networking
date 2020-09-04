import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsMessages = props.state.messages.map(
        item => <Message message={item.message} />
    )
    let dialogsItems = props.state.dialogs.map(
        item => <DialogItem name={item.name} id={item.id} />
    )
    
    let newMessage = React.createRef();
    const addPost = () => {
        alert(newMessage.current.value);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.namesList}>
                {dialogsItems}
            </div>
            <div className={s.content}>
                {dialogsMessages}
                <div className={s.area}>
                    <textarea ref={newMessage}></textarea>
                    <button onClick={addPost}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;