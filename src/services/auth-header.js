export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('MuficUser'));
    
    let headers = {
      'Content-Type': 'application/json'
    } ;
  
    if (user && user.accessToken) {
      const Authorization = 'Bearer ' + user.accessToken ;
      headers['Authorization'] = Authorization ;
    }

    return headers;
}