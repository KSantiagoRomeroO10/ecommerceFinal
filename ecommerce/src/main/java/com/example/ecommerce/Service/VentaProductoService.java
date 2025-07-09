package com.example.ecommerce.Service;

import com.example.ecommerce.Model.VentaProducto;

import java.util.List;
import java.util.Optional;

public interface VentaProductoService {
  List<VentaProducto> obtenerTodos();
  Optional<VentaProducto> obtenerPorId(Integer id);
  VentaProducto guardar(VentaProducto ventaProducto);
  void eliminar(Integer id);
}
