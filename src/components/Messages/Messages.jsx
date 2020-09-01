import React from 'react';
import s from './Messages.module.css';

const Messages = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.namesList}>
                <li className={s.name +' '+ s.active}>Hanna</li>
                <li className={s.name}>Boris</li>
                <li className={s.name}>Alex</li>
                <li className={s.name}>BonBon</li>
                <li className={s.name}>Marina</li>
                <li className={s.name}>Leva</li>
            </div>
            <div className={s.content}>
                <p className={s.message}>I think the time has come...</p>
                <p className={s.message}>I'm very angry</p>
                <p className={s.message}>I know you ate my food!!!</p>
            </div>
        </div>
    )
}

export default Messages;