import http from '../../HttpService'

export default function getOneProducts(selectedId){
    return  http.get(`/products?id=${selectedId}`)
} 