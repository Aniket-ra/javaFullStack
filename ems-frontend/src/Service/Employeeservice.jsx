
import axios from 'axios'
const REST_API_BASE_URL = 'http://localhost:8002/api/employees';
export const  listEmployees = () => {
    return axios.get(REST_API_BASE_URL);
}
export const createEmployees=(employee)=>{
    return axios.post(REST_API_BASE_URL,employee);
}
