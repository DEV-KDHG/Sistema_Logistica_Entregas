package com.example.RegisterLoguin.Repositorio;

import com.example.RegisterLoguin.Entidad.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface PedioRepository extends JpaRepository <Pedido, Long> {

    Optional<Pedido> findByGuia(Long guia);


}
