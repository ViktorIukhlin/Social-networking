import React from 'react'
import * as axios from 'axios';
import styles from './styles.module.css'

class Users extends React.Component {

  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    .then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then(response => {
      this.props.setUsers(response.data.items)
    });
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount;i++ ){
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map(p => {
            return <span 
            className={this.props.currentPage === p && styles.selectedPage}
            onClick={ () => {this.onPageChanged(p); } }
            >{p}</span>;
          })}
        </div>
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