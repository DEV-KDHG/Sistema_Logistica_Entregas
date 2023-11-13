package com.example.RegisterLoguin.Entidad;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "estado")
public class Estado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idEstado;

    private String Descripcion;


}
