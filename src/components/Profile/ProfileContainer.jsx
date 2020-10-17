import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {getUserProfile} from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api';

class ProfileContainer extends React.Component{
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }    
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile}/>
      </div>
  )}
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect (mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);