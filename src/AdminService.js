import axios from "axios";

class UserService{
    getAllAdmin(){
        return axios.get("http://localhost:8080/policy/pmsadmin/listadmins");
    }
}
export default new UserService();