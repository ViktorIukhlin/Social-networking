import { connect } from 'react-redux';
import {updateNewMessageBodyActionCreator, sendMessageActionCreator} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: () => {
      dispatch(sendMessageActionCreator());
    },
    sendMessage: (body) => {
      dispatch(updateNewMessageBodyActionCreator(body));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;