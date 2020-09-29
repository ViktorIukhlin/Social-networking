const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    { name: 'Hanna', id: 1 },
    { name: 'BonBon', id: 2 },
    { name: 'Mike', id: 3 },
    { name: 'Dino', id: 4 },
    { name: 'Lex', id: 5 },
    { name: 'MoMo', id: 6 }
  ],
  messages: [
    { id: 1, message: 'I think the time has come...' },
    { id: 1, message: 'I\'m very angry' },
    { id: 1, message: 'I know you ate my food!!!' }
  ],
  newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
  let stateCopy = {
    ...state,
    //message: [...state.messages]
  };

  switch(action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    }
    case SEND_MESSAGE: { 
      let body = state.newMessageBody;
      stateCopy.newMessageBody = '';
      stateCopy.messages.push({ id: 777, message: body });
      return stateCopy;
    }
    
    default:
      return state;
  }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyActionCreator = (body) => 
({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;