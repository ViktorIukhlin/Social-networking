const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
let initialState = {
  users: []
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
