import axios from 'axios';
import authHeader from './auth-header';
import {studentRole, lecturerRole, adminRole} from '../staticData'
import http from "./http-common";

class UserService {
  getData(API_URL) {
    return http.get(API_URL)
  }

  sendData(API_URL, data) {
    return http.post(API_URL, data)
  }

  removeData(API_URL) {
    return http.delete(API_URL)
  }

  uploadFile = (API_URL, file) => {
    let formData = new FormData();
  
    formData.append("file", file);
  
    return http.post(API_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };
  
  getFiles = (API_URL) => {
    return http.get(API_URL);
  };
}

export default new UserService();