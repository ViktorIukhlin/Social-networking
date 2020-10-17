import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY':'accc52ca-f4dc-4254-a328-cfdd24e04b7e'
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
       return response.data;
     });
   },
   follow(userId){
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
   },

   unfollow(userId){
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  }
}


export const getUsers2 = (currentPage = 1, pageSize = 10) => {
  return instance.get(`follow?page=${currentPage}&count=${pageSize}`,)
  .then(response => {
    return response.data;
  });
 }