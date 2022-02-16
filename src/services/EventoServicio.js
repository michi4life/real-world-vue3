import axios from 'axios'

const apiCliente = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})


export default {
    getEventos() {
        return apiCliente.get('/events')
    },
    getEvento(id) {
        return apiCliente.get('/events/' + id)
    }
}