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
            ]
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
    addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer; //pattern-observer
    },
    getState () {
        return this._state;
    }

}

export default store;
window.store = store;