import $api from '../http/index'



export default class UserService {
   
   static getUsers = async ()=> {
    return await $api.get('user/users')
   }

}