import http from '../../HttpService'

export default function getAllCategory(){
    return http.get(`/category`)
} 