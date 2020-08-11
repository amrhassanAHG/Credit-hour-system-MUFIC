import axios from "axios";
import {serverURL} from '../staticData'
import authHeader from './auth-header'

const user = JSON.parse(localStorage.getItem('MuficUser'));
let authValue=''
if (user && user.accessToken) {
    authValue = 'Bearer ' + user.accessToken ;
}

export default axios.create({
  baseURL: `${serverURL}/api/v2/`,
  headers: {
    "Content-type": "application/json",
    Authorization: authValue
  }
});
