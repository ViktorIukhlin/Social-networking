import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
 
let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data
        }
   
    default:
      return state;
  }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data:{userId, email, login, isAuth}})
export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();

  if(response.data.resultCode === 0) {
    let {id, login, email} = response.data.data;
    dispatch(setAuthUserData(id, email, login, true))
  }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe)

  if(response.data.resultCode === 0) {
      dispatch(getAuthUserData())
  } else {
    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
    let action = stopSubmit("login", {_error: message});
    dispatch(action)
  }
}

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout()
  
  if(response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export default authReducer;
