import http from '../../HttpService'

export default function deleteProduct(id){
    return http.delete(`/products/${id}`)
} 