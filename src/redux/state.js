const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'How are you?', likesCount: 11 },
                { id: 2, message: 'mmmm?', likesCount: 2 },
                { id: 3, message: 'Are you ok?', likesCount: 4 }
            ],
            newPostText: ''
        },
        messagePage: {
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
        },
        sidebar: {
            listOfFriends: [
                { name: 'Hanna' },
                { name: 'BonBon' },
                { name: 'Dino' },
                { name: 'Lex' },
                { name: 'MoMo' },
                { name: 'Mike' }
            ]
        }
    },
    _callSubscriber () {},
    
    subscribe (observer) {
        this._callSubscriber = observer; //pattern-observer
    },
    getState () {
        return this._state;
    },

    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

         }else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

         }else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagePage.newMessageBody = action.body;
            this._callSubscriber(this._state);

         }else if (action.type === SEND_MESSAGE) {
            this._state.messagePage.messages.push({ id: 777, messages: this._state.messagePage.newMessageBody });
            this._state.messagePage.newMessageBody = '';
            this._callSubscriber(this._state);
         }
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => 
({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyActionCreator = (text) => 
({type: UPDATE_NEW_MESSAGE_BODY, newText: text})

export default store;
window.store = store;