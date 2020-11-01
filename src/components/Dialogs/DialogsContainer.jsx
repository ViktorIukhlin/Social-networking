import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addDialogsActionCreator, sendMessageActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageActionCreator(newMessageBody));
    },
    sendName: (newNameOfFriend) => {
      dispatch(addDialogsActionCreator(newNameOfFriend));
    }
  }
}

export default compose (
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
) (Dialogs);