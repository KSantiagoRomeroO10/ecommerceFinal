package com.example.ecommerce.Model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "ventas")
public class Venta {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer idVenta;

  @ManyToOne
  @JoinColumn(name = "id_vendedor", nullable = false)
  private Vendedor vendedor;

  @Column(name = "fecha_venta", nullable = false)
  private LocalDateTime fechaVenta;

  @PrePersist
  public void prePersist() {
    if (fechaVenta == null) {
      fechaVenta = LocalDateTime.now();
    }
  }

  public Integer getIdVenta() {
    return idVenta;
  }

  public void setIdVenta(Integer idVenta) {
    this.idVenta = idVenta;
  }

  public Vendedor getVendedor() {
    return vendedor;
  }

  public void setVendedor(Vendedor vendedor) {
    this.vendedor = vendedor;
  }

  public LocalDateTime getFechaVenta() {
    return fechaVenta;
  }

  public void setFechaVenta(LocalDateTime fechaVenta) {
    this.fechaVenta = fechaVenta;
  }
}
