import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';

let Users = (props) => {
  return (
    <div>
      <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>
      {props.users.map((item) => (
         <User user={item} 
         followingInProgress={props.followingInProgress} 
         key={item.id}
         unfollow={props.unfollow}
         follow={props.follow}
         />
      ))}
    </div>
  )
}

export default Users;