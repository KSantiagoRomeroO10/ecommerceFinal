package com.example.ecommerce.Service;

import com.example.ecommerce.Model.Vendedor;

import java.util.List;
import java.util.Optional;

public interface VendedorService {
  List<Vendedor> obtenerTodos();
  Optional<Vendedor> obtenerPorId(Integer id);
  Vendedor guardar(Vendedor vendedor);
  void eliminar(Integer id);
}
