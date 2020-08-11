import axios from "axios";
import {serverURL} from '../staticData'

const API_URL = `${serverURL}/api/auth/`;

class AuthService {
  constructor() {}

  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("MuficUser", JSON.stringify(response.data));
        }

        return response.data;
      }).catch((error)=>{})
  }

  logout() {
    localStorage.removeItem("MuficUser");
  }

  getCurrentUser() {
      return JSON.parse(localStorage.getItem("MuficUser"));
  }

  getRole() {
      const user = this.getCurrentUser() 
      if(user){
        return user.roles.find(role => role.includes('ROLE'))
      }else{
        return ""
      }
  }
}

export default new AuthService();
