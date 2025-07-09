package com.example.ecommerce.Service;

import com.example.ecommerce.Model.Producto;
import com.example.ecommerce.Repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoServiceImpl implements ProductoService {
  @Autowired
  private ProductoRepository productoRepository;

  @Override
  public List<Producto> obtenerTodos() {
    return productoRepository.findAll();
  }

  @Override
  public Optional<Producto> obtenerPorId(Integer id) {
    return productoRepository.findById(id);
  }

  @Override
  public Producto guardar(Producto producto) {
    return productoRepository.save(producto);
  }

  @Override
  public void eliminar(Integer id) {
    productoRepository.deleteById(id);
  }
}
