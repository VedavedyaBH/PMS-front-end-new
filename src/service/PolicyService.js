import axios from "axios";

class PolicyService{
    getAllPolicy(){
        return axios.get("http://localhost:8050/policy/pmspolicy/listpolicies");
    }
    createPolicy(policy){
        return axios.post("http://localhost:8050/policy/pmspolicy/savepolicy",policy);
        
    }
    deletePolicy(policyId){
        return axios.delete("http://localhost:8050/policy/pmspolicy/deletepolicyId/"+policyId);
    }
    updatePolicy(policy,policyId){
        return axios.put("http://localhost:8050/policy/pmspolicy/updatepolicy/"+policyId,policy);
    }
    getPolicy(Id){
        return axios.get("http://localhost:8050/policy/pmspolicy/findbypolicyId/"+Id);
    }
}
export default new PolicyService();