import http from '../../HttpService'

export default function getOneGroupProducts(idCategory){
    return  http.get(`/products?category=${idCategory}`)
} 