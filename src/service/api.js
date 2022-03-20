import axios from "axios";
const url = 'http://localhost:3003/user';
// To show all users data or data by id
export const getuser = async (id) =>  {
    id=id || '';
    return axios.get(`${url}/${id}`);
      
}
// To Add User Data in Db
export const addUser= async(user) =>{
    return await axios.post(url,user);
}
//add editted data
export const addUserEdit= async(id,user) =>{
    return await axios.put(`${url}/${id}`,user);
}  
// delete user api
export const delUser= async (id)=>{
    return await axios
      .delete(`${url}/${id}`);
}