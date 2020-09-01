import React from 'react';
import s from './Messages.module.css';
import { NavLink } from 'react-router-dom';

const Messages = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.namesList}>
                <div className={s.nameContainer}>
                    <NavLink to="/messages/1" className={s.name} activeClassName={s.active}>Hanna</NavLink>
                </div>
                <div  className={s.nameContainer}>
                    <NavLink to="/messages/2" className={s.name} activeClassName={s.active}>BonBon</NavLink>
                </div>
                <div  className={s.nameContainer}>
                    <NavLink to="/messages/3" className={s.name} activeClassName={s.active}>Valera</NavLink>
                </div>
                <div  className={s.nameContainer}>
                    <NavLink to="/messages/4" className={s.name} activeClassName={s.active}>Tim</NavLink>
                </div>
                <div  className={s.nameContainer}>
                    <NavLink to="/messages/5" className={s.name} activeClassName={s.active}>Mike</NavLink>
                </div>
                <div  className={s.nameContainer}>
                    <NavLink to="/messages/6" className={s.name} activeClassName={s.active}>Boris</NavLink>
                </div>
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