import axios from "axios"

//https://viacep.com.br/ws/numeroDoCep/json

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api