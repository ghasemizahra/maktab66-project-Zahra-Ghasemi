import http from '../../HttpService'

export default function getOrderByStatus(selectedValue){
    return http.get(`/orders?orderStatus=${selectedValue}`)
} 