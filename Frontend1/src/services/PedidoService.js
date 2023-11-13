import axios from "axios";

const PEDIDO_BASE_URL = "http://localhost:9094/api/v1/pedido"; 

const PEDIDO_Listar_URL = "http://localhost:9094/api/v1/pedido/listar"; 
const PEDIDO_Crear_URL = "http://localhost:9094/api/v1/pedido/crear";
const PEDIDO_Eliminar_URL = "http://localhost:9094/api/v1/pedido/{idpedido}"
const PEDIDO_Editar_URL = "http://localhost:9094/api/v1/pedido/" 
const PEDIDO_Modificar_URL = "http://localhost:9094/api/v1/pedido/{ipedido}"

const PEDIDO_GUIA_URL = "http://localhost:9094/api/v1/pedido/obtenerPedidoPorGuia/"

class PedidoService{

    getAllPedido(){
        return axios.get( PEDIDO_Listar_URL)
    }


    createPedido(pedido) {
        return axios.post( PEDIDO_Crear_URL, pedido)
    }
getPedidoById(idPedido) {
    return axios.get(PEDIDO_GUIA_URL + idPedido)
}

deletePedido(idPedido) {
    return axios.delete(PEDIDO_Eliminar_URL  + idPedido)
}



UpdatePedido(IdPedido, pedido){
return axios.put(PEDIDO_Modificar_URL + IdPedido, pedido); 


}

getPedidoByGuia(guia){
    return axios.get(PEDIDO_GUIA_URL + guia)
}
}

export default new PedidoService();