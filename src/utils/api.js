import axios from "axios";

export default class API {
  constructor() {
    this.api_token = null;
    this.client = null;
    this.api_url = process.env.REACT_APP_API_URL;
  }

  init = () => {
    this.client = axios.create({ baseURL: this.api_url, timeout: 31000 });
    return this.client;
  }

  login = (email, password) => {
    return this.init().post("/auth/authenticate", { "email": email, "password": password });
  }
}
