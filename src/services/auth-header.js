import Cookies from "js-cookie";

export default function authHeader() {
  let user = undefined
  if (Cookies.get("MuficUser")) {
    user = JSON.parse(Cookies.get("MuficUser"));
  }

  let headers = {
    "Content-Type": "application/json",
  };

  if (user && user.accessToken) {
    const Authorization = "Bearer " + user.accessToken;
    headers["Authorization"] = Authorization;
  }

  return headers;
}
