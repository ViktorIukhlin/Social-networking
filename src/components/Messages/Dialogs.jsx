import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.namesList}>
                <DialogItem name="Hanna" id="1"/>
                <DialogItem name="BonBon" id="2"/>
                <DialogItem name="Mike" id="3"/>
                <DialogItem name="Dino" id="4"/>
                <DialogItem name="Lex" id="5"/>
                <DialogItem name="MoMo" id="6"/>
            </div>
            <div className={s.content}>
                <p className={s.message}>I think the time has come...</p>
                <p className={s.message}>I'm very angry</p>
                <p className={s.message}>I know you ate my food!!!</p>
            </div>
        </div>
    )
}

export default Dialogs;