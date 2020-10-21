import React from 'react';
import { connect } from 'react-redux';
import { 
  follow, 
  unfollow, 
  setCurrentPage, 
  toggleFollowingProgress,
  getUsers
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersPage } from '../../redux/usersSelectors';

class UsersContainer extends React.Component {

  componentDidMount(){
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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
    followingInProgress={this.props.followingInProgress}
    />
    </>
  }
}

// let mapStateToProps = (state) => {
//   return{
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress
//   }
// }
let mapStateToProps = (state) => {
  return{
    users: getUsersPage(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers })
) (UsersContainer)