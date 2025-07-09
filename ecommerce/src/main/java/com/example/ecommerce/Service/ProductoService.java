package com.example.ecommerce.Service;

import com.example.ecommerce.Model.Producto;
import java.util.List;
import java.util.Optional;

public interface ProductoService {
  List<Producto> obtenerTodos();
  Optional<Producto> obtenerPorId(Integer id);
  Producto guardar(Producto producto);
  void eliminar(Integer id);
}
