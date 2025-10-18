import axios from "axios"


const instance$ = axios.create({
  baseURL: "https://coffee-squad-back.onrender.com/",
});

export const GET = async () => {
    const GetReq = instance$.get("api/users/");
    return GetReq.data
}