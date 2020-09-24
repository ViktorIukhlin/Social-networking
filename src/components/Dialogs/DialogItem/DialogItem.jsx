import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/messages/" + props.id;

    return (
        <div className={s.nameContainer}>
            <NavLink to={path} className={s.name} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;