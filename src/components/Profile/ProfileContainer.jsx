import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {getUserProfile} from '../../redux/profileReducer'
import { Redirect, withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component{
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }    
  render() {
    if(!this.props.isAuth){
      return <Redirect to={"/login"} />
    }
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile}/>
      </div>
  )}
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect (mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);