import axios from 'axios'
import {makeAutoObservable} from 'mobx';
import AuthService from '../services/AuthService'
import userService from '../services/UserService';



export default class Store {
    constructor() {
        this._isAuth = false;
        this._user = {};
        this._isLoading = false;
        makeAutoObservable(this)
    }
       

    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setUser(user) {
        this._user = user;
    }

    setLoading(bool) {
        this._isLoading = bool
    }


    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    get isLoading() {
        return this._isLoading
    }


     async login(email, password) {

        try {
            const response = await AuthService.login(email, password);
                console.log(response);
                localStorage.setItem('token', response.data.accessToken);
                this.setIsAuth(true);
                this.setUser(response.data.user);
        
        } catch(e) {
            console.log(e.response?.data?.message);
        }

        }



        async registration(login, email, password) {
            try {
                const response = await AuthService.registration(login, email, password);
                console.log(response.data.message);
                localStorage.setItem('token', response.data.accessToken);
                this.setIsAuth(true);
                this.setUser(response.data.user);
            } catch(e) {
                console.log(e.response?.data?.message);
            }
        }


     async checkAuth() {
        this.setLoading(true);
        try{
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/refresh`, {withCredentials: true});
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
                 this.setIsAuth(true);
                 this.setUser(response.data.user);

                 } catch(e) {
                      console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }

     }


     async logout() {
        try {
            await AuthService.logout();
            localStorage.removeItem('token');
            this.setIsAuth(false);
            this.setUser({});
        } catch(e) {
            console.log(e.response?.data?.message);
        }
     }
      

     async getUsers() {
        try {
            const users = await userService.getUsers();
            console.log(users);
        } catch(e) {
            console.log(e.response?.data?.message);
        }
     }
    

     }
     


    