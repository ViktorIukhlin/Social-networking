import React from 'react';
import s from './Friends.module.css'
import Friend from './Friend/Friend';

const Friends = (props) => {
    let listOfFriends = props.state.map(
        item => <Friend name={item.name} />
    )
    return (
        <div className={s.container}>
            <div className={s.title}>Friends</div>
            <div className={s.content}> {listOfFriends} </div>
        </div>
    )
}

export default Friends;