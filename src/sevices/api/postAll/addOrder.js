import http from '../../HttpService'
import { ACCESS_TOKEN } from "../../variable.config";
export default function addOrder(data){
    const header={
        headers:{
            Authorization:`${ACCESS_TOKEN}`,
        },

    }
    return http.post(`/orders`,data,header)
} 