import axios from 'axios';

class UserService {
  getData(API_URL) {
    return axios.get(API_URL);
  }

  sendData(API_URL, data) {
    return axios.post(API_URL, data);
  }

  removeData(API_URL) {
    return axios.delete(API_URL);
  }

  uploadFile = (API_URL, file) => {
    let formData = new FormData();
    formData.append("file", file);
  
    return axios.post(API_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };
  
  getFiles = (API_URL) => {
    return axios.get(API_URL);
  };
}

export default new UserService();