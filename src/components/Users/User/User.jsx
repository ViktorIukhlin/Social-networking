import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './User.module.css'

const User = ({user, followingInProgress, unfollow, follow}) => {
  return (
        <div>
          <span>
              <NavLink to={'/profile/'+ user.id}>
                <img
                  src={user.photos.small != null ? user.photos.small : require("../../../assets/images/users.png")}
                  alt="photosos"
                  className={styles.userPhoto}
                />
              </NavLink>
            <div>
              {user.followed ? (
                <button disabled={followingInProgress.some(id => id === user.id)} 
                onClick={() => {unfollow(user.id)}}> 
                  Unfollow 
                </button>
              ) : (
                <button disabled={followingInProgress.some(id => id === user.id)} 
                onClick={() => {follow(user.id)}}>
                  Follow
                </button>)}
            </div>
          </span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
        </div>
  )
}

export default User;