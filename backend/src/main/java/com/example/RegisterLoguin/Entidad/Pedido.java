package com.example.RegisterLoguin.Entidad;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "pedido")
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idPedido;

    private  long guia;
    private  double valor;
    private  String modalidad;
    private long tiempoEstimado;
    private String fechaEnvio;
    private String fechaEntrega;
    private  String nombreProducto;
    private  String remitente;
    private  String destinario;

    @ManyToOne
    @JoinColumn(name = "codigo_estado")
    private Estado codigo_estado;


    public long getIdPedido() {
        return idPedido;
    }

    public void setIdPedido(long idPedido) {
        this.idPedido = idPedido;
    }

    public long getGuia() {
        return guia;
    }

    public void setGuia(long guia) {
        this.guia = guia;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public String getModalidad() {
        return modalidad;
    }

    public  void setModalidad(String modalidad) {
        this.modalidad = modalidad;
    }

    public long getTiempoEstimado() {
        return tiempoEstimado;
    }

    public  void setTiempoEstimado(long tiempoEstimado) {
        this.tiempoEstimado = tiempoEstimado;
    }

    public String getFechaEnvio() {
        return fechaEnvio;
    }

    public  void setFechaEnvio(String fechaEnvio) {
        this.fechaEnvio = fechaEnvio;
    }

    public String getFechaEntrega() {
        return fechaEntrega;
    }

    public void setFechaEntrega(String fechaEntrega) {
        this.fechaEntrega = fechaEntrega;
    }

    public String getNombreProducto() {
        return nombreProducto;
    }

    public  void setNombreProducto(String nombreProducto) {
        this.nombreProducto = nombreProducto;
    }

    public String getRemitente() {
        return remitente;
    }

    public  void setRemitente(String remitente) {
        this.remitente = remitente;
    }

    public String getDestinario() {
        return destinario;
    }

    public void setDestinario(String destinario) {
        this.destinario = destinario;
    }

    public Estado getCodigo_estado() {
        return codigo_estado;
    }

    public void setCodigo_estado(Estado codigo_estado) {
        this.codigo_estado = codigo_estado;
    }
}
