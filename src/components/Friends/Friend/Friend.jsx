import React from 'react';
import s from './Friend.module.css'

const Friend = (props) => {
    return (
        <div className={s.container}>
            <div className={s.photo}></div>
            <div className={s.name}>{props.name}</div>
        </div>
    )
}

export default Friend;