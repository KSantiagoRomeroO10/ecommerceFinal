package com.example.ecommerce.Service;

import com.example.ecommerce.Model.Venta;

import java.util.List;
import java.util.Optional;

public interface VentaService {
  List<Venta> obtenerTodas();
  Optional<Venta> obtenerPorId(Integer id);
  Venta guardar(Venta venta);
  void eliminar(Integer id);
}
