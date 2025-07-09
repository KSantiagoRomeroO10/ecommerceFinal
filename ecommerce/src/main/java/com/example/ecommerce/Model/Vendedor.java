package com.example.ecommerce.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "vendedores")
public class Vendedor {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer idVendedor;

  @Column(name = "nombre_vendedor", nullable = false, length = 50)
  private String nombreVendedor;

  @Column(name = "correo_vendedor", nullable = false, length = 50)
  private String correoVendedor;

  @Column(name = "comision_vendedor", nullable = false)
  private Integer comisionVendedor;

  public Integer getIdVendedor() {
    return idVendedor;
  }

  public void setIdVendedor(Integer idVendedor) {
    this.idVendedor = idVendedor;
  }

  public String getNombreVendedor() {
    return nombreVendedor;
  }

  public void setNombreVendedor(String nombreVendedor) {
    this.nombreVendedor = nombreVendedor;
  }

  public String getCorreoVendedor() {
    return correoVendedor;
  }

  public void setCorreoVendedor(String correoVendedor) {
    this.correoVendedor = correoVendedor;
  }

  public Integer getComisionVendedor() {
    return comisionVendedor;
  }

  public void setComisionVendedor(Integer comisionVendedor) {
    this.comisionVendedor = comisionVendedor;
  }
}
