import axios from "axios";

class UserService{
    getAllUsers(){
        return axios.get("http://localhost:8080/policy/pmsuser/listusers");
    }
    createUser(user){
        return axios.post("http://localhost:8080/policy/pmsuser/saveuser",user);
    }
    deleteUser(id){
        return axios.delete("http://localhost:8080/policy/pmsuser/deleteuserid/"+id);
    }
    updateUser(user,id){
        return axios.put("http://localhost:8080/policy/pmsuser/updateuser/"+id,user);
    }
    getUser(id){
        return axios.get("http://localhost:8080/policy/pmsuser/findbyuserid"+id)
    }

}
export default new UserService();