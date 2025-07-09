package com.example.ecommerce.Model;

import java.math.BigDecimal;

import jakarta.persistence.*;

@Entity
@Table(name = "productos")
public class Producto {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer idProducto;

  @Column(name = "nombre_producto", nullable = false, length = 50)
  private String nombreProducto;

  @Column(name = "precio_producto", nullable = false, precision = 8, scale = 2)
  private BigDecimal precioProducto;

  @Column(name = "descripcion_producto", nullable = false, columnDefinition = "NVARCHAR(MAX)")
  private String descripcionProducto;

  @Column(name = "stock_producto", nullable = false)
  private Integer stockProducto;

  public Integer getIdProducto() {
    return idProducto;
  }

  public void setIdProducto(Integer idProducto) {
    this.idProducto = idProducto;
  }

  public String getNombreProducto() {
    return nombreProducto;
  }

  public void setNombreProducto(String nombreProducto) {
    this.nombreProducto = nombreProducto;
  }

  public BigDecimal getPrecioProducto() {
    return precioProducto;
  }

  public void setPrecioProducto(BigDecimal precioProducto) {
    this.precioProducto = precioProducto;
  }

  public String getDescripcionProducto() {
    return descripcionProducto;
  }

  public void setDescripcionProducto(String descripcionProducto) {
    this.descripcionProducto = descripcionProducto;
  }

  public Integer getStockProducto() {
    return stockProducto;
  }

  public void setStockProducto(Integer stockProducto) {
    this.stockProducto = stockProducto;
  }
}
