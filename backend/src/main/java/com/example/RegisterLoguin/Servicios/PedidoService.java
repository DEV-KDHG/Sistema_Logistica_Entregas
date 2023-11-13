package com.example.RegisterLoguin.Servicios;

import com.example.RegisterLoguin.Entidad.Pedido;
import com.example.RegisterLoguin.Repositorio.PedioRepository;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
public class PedidoService {
    @Autowired
   private PedioRepository pedioRepository;

    public List<Pedido> GetPedio() {

        return pedioRepository.findAll();
    }

    //Buscar por ID
    public Optional<Pedido> getpedidoid(Long id) {
        return pedioRepository.findById(id);

    }

    //Guardar
    public void saveOrUpdate(Pedido pedido) {
        pedioRepository.save(pedido);
    }





    //Eliminar por ID
    public void delete(Long id) {

        pedioRepository.deleteById(id);
    }

    public Optional<Pedido> obtenerPedidoPorGuia(@PathVariable Long guia) {
        return pedioRepository.findByGuia(guia);
    }


}