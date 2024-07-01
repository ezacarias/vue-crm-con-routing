import { data } from "autoprefixer";
import api from "../lib/axios";

export default{
    obtenerClientes(){
        return api.get('/clientes');
    },
    agregarCliente(data){
        return api.post('/clientes',data)
    },
    obtenerCliente(id){
        return api.get('/clientes/' + id)
    },
    actualizarCliente(id){
        return api.put('/clientes/' + id , data)
        .then(()=> router.push({name:'listado-clientes'}))
        .catch(error => console.log(error))
    },
    cambiarEstado(id, data){
        console.log(data)
        return api.patch('/clientes/' + id , data)
    }
}

