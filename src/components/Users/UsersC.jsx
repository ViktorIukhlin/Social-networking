import React from 'react'
import * as axios from 'axios';
import styles from './styles.module.css'


class Users extends React.Component {

  getUsers = () => {
    if(this.props.users.length === 0){   
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        this.props.setUsers(response.data.items)
      });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.getUsers}>Get Users</button>
        {this.props.users.map((item) => (
          <div key={item.id}>
            <span>
              <div>
                <img
                  src={item.photos.small != null ? item.photos.small: require("../../assets/images/users.png")}
                  alt="photosos"
                  className={styles.userPhoto}
                />
              </div>
              <div>
                {item.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(item.id)
                    }}
                  >
                    {' '}
                    Unfollow{' '}
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(item.id)
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
}

export default Users;