import React from 'react';
import { connect } from 'react-redux';
import { 
  follow, 
  setUsers, 
  unfollow, 
  setCurrentPage, 
  setUsersTotalCount, 
  toggleIsFetching 
} from '../../redux/usersReducer';
import Users from './Users';
import * as axios from 'axios'
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {

  componentDidMount(){
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
      withCredentials: true
    })
    .then(response => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(response.data.items);
      this.props.setUsersTotalCount(response.data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{
      withCredentials: true
    })
    .then(response => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(response.data.items)
    });
  }

  render() {
    return <>
    {this.props.isFetching ? <Preloader /> : null}
    <Users 
    totalUsersCount={this.props.totalUsersCount} 
    currentPage={this.props.currentPage}
    pageSize={this.props.pageSize}
    onPageChanged = {this.onPageChanged}
    users={this.props.users}
    follow={this.props.follow}
    unfollow={this.props.unfollow}
    />
    </>
  }
}

let mapStateToProps = (state) => {
  return{
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}
// let mapDispatchToProps = (dispatch) => {
//   return{
//     follow: (userId) => {
//       dispatch(followActionCreator(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowActionCreator(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersActionCreator(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount));
//     },
//     toggleIsFetching: (isFetching) =>{
//       dispatch(toggleIsFetchingAC(isFetching));
//     }
//   }
// }



export default connect(mapStateToProps, {
follow,
unfollow,
setUsers,
setCurrentPage,
setUsersTotalCount,
toggleIsFetching
}) (UsersContainer);