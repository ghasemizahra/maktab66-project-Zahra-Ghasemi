import http from '../../HttpService'
import { ACCESS_TOKEN } from "../../variable.config";
export default function UploadImage(data){
    const header={
        headers:{
            Authorization:`${ACCESS_TOKEN}`,
        },

    }
    return http.post(`/upload`,data,header)
} 