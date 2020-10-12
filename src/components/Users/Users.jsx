import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css'

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          return <span
            className={props.currentPage === p && styles.selectedPage}
            onClick={() => { props.onPageChanged(p); }}
          >{p}</span>;
        })}
      </div>
      {props.users.map((item) => (
        <div key={item.id}>
          <span>
              <NavLink to={'/profile/'+ item.id}>
                <img
                  src={item.photos.small != null ? item.photos.small : require("../../assets/images/users.png")}
                  alt="photosos"
                  className={styles.userPhoto}
                />
              </NavLink>
            <div>
              {item.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(item.id)
                  }}
                >
                  {' '}
                  Unfollow{' '}
                </button>
              ) : (
                  <button
                    onClick={() => {
                      props.follow(item.id)
                    }}
                  >
                    {' '}
                  Follow{' '}
                  </button>
                )}
            </div>
          </span>
          <span>
            <div>{item.name}</div>
            <div>{item.status}</div>
          </span>
          {/* <span>
            <div>{item.location.country}</div>
            <div>{item.location.city}</div>
          </span> */}
        </div>
      ))}
    </div>
  )
}

export default Users;