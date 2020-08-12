import axios from "axios";
import {serverURL} from '../staticData'
import authHeader from './auth-header'

export default axios.create({
  baseURL: `${serverURL}/api/v2/`,
  headers: authHeader()
});
