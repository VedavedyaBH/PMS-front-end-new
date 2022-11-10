import axios from "axios";

class AddressService{
    getAllAddress(){ 
        return axios.get("http://localhost:8080/policy/pms/findalladdress");
    }
    createAddress(address){
        return axios.post("http://localhost:8080/policy/pms/saveaddress",address);
    }

}
export default new AddressService();