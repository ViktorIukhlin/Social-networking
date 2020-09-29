import React from 'react';
import s from './Friends.module.css'
import Friend from './Friend/Friend';

import store from '../../redux/store'

const Friends = (props) => {
    let listOfFriends = store.getState().sidebar.listOfFriends.map(
        item => <Friend name={item.name} key={item.id} />
    )
    return (
        <div className={s.container}>
            <div className={s.title}>Friends</div>
            <div className={s.content}> {listOfFriends} </div>
        </div>
    )
}

export default Friends;