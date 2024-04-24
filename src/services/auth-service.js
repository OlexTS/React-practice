import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

export const signUp =async (body) => {
  return await instance.post("/users", body);
};

export const login = async (body)=>{
     const {data} = await instance.post('/auth/login', body);
     return data
}
