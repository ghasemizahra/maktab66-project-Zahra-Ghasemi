import http from '../../HttpService'

export default function gatAllProduct(){
    return http.get(`/products`)
} 