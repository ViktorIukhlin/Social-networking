let renderDomTree = () => {}

let state = {
    profilePage:{
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
    sidebar:{
        listOfFriends:[
            {name: 'Hanna'},
            {name: 'BonBon'},
            {name: 'Dino'},
            {name: 'Lex'},
            {name: 'MoMo'},
            {name: 'Mike'}
        ]
    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderDomTree(state);
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderDomTree(state);
}
export let subscribe = (observer) => {
    renderDomTree = observer; //pattern-observer
}
export default state;