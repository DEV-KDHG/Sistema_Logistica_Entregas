package com.example.RegisterLoguin.Repositorio;

import com.example.RegisterLoguin.Entidad.Secretario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface SecretarioRepo  extends JpaRepository<Secretario , Integer> {
    Optional<Secretario> findOneByEmailAndPassword(String email, String password);
    Secretario findByEmail(String email);
}
