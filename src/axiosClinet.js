import axios from "axios"

const axiosClinet = axios.create({
    baseURL: 'http://127.0.0.1:8090/api/collections',
})

export default axiosClinet;