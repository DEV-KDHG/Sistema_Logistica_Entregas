package com.example.RegisterLoguin.Controlador;

import com.example.RegisterLoguin.Entidad.Pedido;
import com.example.RegisterLoguin.Repositorio.PedioRepository;
import com.example.RegisterLoguin.Servicios.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins ="http://localhost:3000")

@RestController
@RequestMapping(path = "api/v1/pedido")

public class PedioController {

    @Autowired


    private PedidoService pedidoService;



    @GetMapping("/listar")
    public List<Pedido> getAll(){
        return pedidoService.GetPedio();
    }



    //Guardar
    @PostMapping("/crear")
    public Pedido saveUpdate(@RequestBody Pedido pedido){
        pedidoService.saveOrUpdate(pedido);

        return pedido;
    }

    //Actualizar
    @PutMapping("/{pedidoid}")
    public ResponseEntity<Void> updatePedido(@PathVariable Long pedidoid, @RequestBody Pedido pedido) {
        Optional<Pedido> pedidoExistente = pedidoService.getpedidoid(pedidoid);
        if (pedidoExistente.isPresent()) {
            pedido.setIdPedido(pedidoid);
            pedidoService.saveOrUpdate(pedido);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    //Eliminar
    @DeleteMapping("/eliminar/{pedidoid}")
    public void saveUpdate(@PathVariable("pedidoid") Long pedidoid){
        pedidoService.delete(pedidoid);
    }

    @GetMapping("/{pedidoid}")
    public Optional<Pedido> getById(@PathVariable("pedidoid") Long pedidoid){
        return pedidoService.getpedidoid(pedidoid);
    }
    @GetMapping("/obtenerPedidoPorGuia/{guia}")
    public Optional<Pedido> obtenerPedidoPorGuia(@PathVariable Long guia) {
        return pedidoService.obtenerPedidoPorGuia(guia);
    }


}
