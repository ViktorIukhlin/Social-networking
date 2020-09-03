let state = {
    profilePage:{
        posts: [
            { id: 1, message: 'How are you?', likesCount: 11 },
            { id: 2, message: 'mmmm?', likesCount: 2 },
            { id: 3, message: 'Are you ok?', likesCount: 4 }
        ]
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
    listOfFriends:[
        {name: 'Hanna'},
        {name: 'BonBon'},
        {name: 'Dino'},
        {name: 'Lex'},
        {name: 'MoMo'},
        {name: 'Mike'}
    ]

}

export default state;