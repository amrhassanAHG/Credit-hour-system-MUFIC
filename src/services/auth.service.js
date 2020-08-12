import axios from "axios";
import { serverURL } from "../staticData";
import Cookies from 'js-cookie'

const API_URL = `${serverURL}/api/auth/`;

class AuthService {
  constructor() {}

  login(username, password, days) {
    return axios
      .post(API_URL + "signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          Cookies.set("MuficUser", JSON.stringify(response.data), {
            expires: days,
          });
        }

        return response.data;
      })
      .catch((error) => {});
  }

  logout() {
    Cookies.remove("MuficUser");
  }

  getCurrentUser() {
    const user = Cookies.get("MuficUser");
    if(user)
      return JSON.parse(user)
    else
      return undefined
  }

  getRole() {
    const user = this.getCurrentUser();
    if (user) {
      return user.roles.find((role) => role.includes("ROLE"));
    } else {
      return "";
    }
  }
}

export default new AuthService();
