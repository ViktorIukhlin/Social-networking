const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
let initialState = {
  users: [
    { id: 1, photoUrl: 'https://files.123freevectors.com/wp-content/uploads/new/objects/392-free-camera-iris-vector-art.png' , followed: true, fullName: 'Valera', status: 'I am a person', location: {city: 'Saint-Petersburg', country: 'Russia'} },
    { id: 2, photoUrl: 'https://files.123freevectors.com/wp-content/uploads/new/objects/392-free-camera-iris-vector-art.png' , followed: true, fullName: 'Senya', status: 'I am a people', location: {city: 'Moscow', country: 'Russia'} },
    { id: 3, photoUrl: 'https://files.123freevectors.com/wp-content/uploads/new/objects/392-free-camera-iris-vector-art.png' , followed: false, fullName: 'Sasha', status: 'Tired', location: {city: 'Dereven', country: 'Russia'} },
    { id: 4, photoUrl: 'https://files.123freevectors.com/wp-content/uploads/new/objects/392-free-camera-iris-vector-art.png' , followed: false, fullName: 'Lena', status: 'Happy', location: {city: 'Kolbaskino', country: 'Russia'} }
  ]
}

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(item => {
          if(action.userId === item.id){
            return {...item, followed: true}
          }
          return item;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(item => {
          if(action.userId === item.id){
            return {...item, followed: false}
          }
          return item;
        })
      }
    case SET_USERS:
      return{
        ...state,
        users: [...state.users, ...action.users]
      }
    default:
      return state;
  }
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})

export default usersReducer;
