import $api from '../http/index'



export default class AuthService {

   static login = async (email, password) => {
    return await $api.post('user/login', {email, password});
   }
   
   static registration = async (login, email, password) => {
    return await $api.post('user/registration', {login, email, password});
   } 

   static logout = async ()=> {
    return await $api.post('user/logout');
   }

}