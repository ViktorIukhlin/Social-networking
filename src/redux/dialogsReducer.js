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
  ] 
};

const dialogsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 777, message: body }]
      }
    default:
      return state;
  }
}

export const sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})
 
export default dialogsReducer;