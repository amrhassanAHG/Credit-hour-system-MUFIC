import axios from "axios";
import { serverURL } from "../staticData";
import Cookies from 'js-cookie'

const API_URL = `${serverURL}/users`;

class AuthService {
  constructor() {}

  login(username, password, days) {
    return axios
      .get(API_URL)
      .then((response) => {
        const users = response.data;
        let curUser = undefined;
        users.forEach(user => {
          if(user.username === username && user.password === password){
            curUser = user;
          }
        });
        if(curUser){
          Cookies.set("MuficUser", JSON.stringify(curUser), {
            expires: days,
          });
        }
      
        return curUser;
      }).catch((error)=>{
        return undefined;
      });
  }

  logout() {
    Cookies.remove("MuficUser");
  }

  getCurrentUser() {
    const user = Cookies.get("MuficUser");
    return (user)? JSON.parse(user) : undefined;
  }

  getRole() {
    const user = this.getCurrentUser();
    return (user)? user.role : "";
  }
}

export default new AuthService();
