package com.example.ecommerce.Model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "venta_producto")
public class VentaProducto {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer idVentaProducto;

  @ManyToOne
  @JoinColumn(name = "id_venta", nullable = false)
  private Venta venta;

  @ManyToOne
  @JoinColumn(name = "id_producto", nullable = false)
  private Producto producto;

  @Column(nullable = false)
  private Integer cantidad;

  @Column(name = "precio_unitario", nullable = false, precision = 8, scale = 2)
  private BigDecimal precioUnitario;

  public Integer getIdVentaProducto() {
    return idVentaProducto;
  }

  public void setIdVentaProducto(Integer idVentaProducto) {
    this.idVentaProducto = idVentaProducto;
  }

  public Venta getVenta() {
    return venta;
  }

  public void setVenta(Venta venta) {
    this.venta = venta;
  }

  public Producto getProducto() {
    return producto;
  }

  public void setProducto(Producto producto) {
    this.producto = producto;
  }

  public Integer getCantidad() {
    return cantidad;
  }

  public void setCantidad(Integer cantidad) {
    this.cantidad = cantidad;
  }

  public BigDecimal getPrecioUnitario() {
    return precioUnitario;
  }

  public void setPrecioUnitario(BigDecimal precioUnitario) {
    this.precioUnitario = precioUnitario;
  }
}
