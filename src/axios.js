import axios from "axios";

const instance = axios.create({
  baseURL: "https://tin-clown.herokuapp.com",
});

export default instance;
