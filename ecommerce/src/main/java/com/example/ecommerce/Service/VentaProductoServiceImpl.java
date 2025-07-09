package com.example.ecommerce.Service;

import com.example.ecommerce.Model.VentaProducto;
import com.example.ecommerce.Repository.VentaProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VentaProductoServiceImpl implements VentaProductoService {
  @Autowired
  private VentaProductoRepository ventaProductoRepository;

  @Override
  public List<VentaProducto> obtenerTodos() {
    return ventaProductoRepository.findAll();
  }

  @Override
  public Optional<VentaProducto> obtenerPorId(Integer id) {
    return ventaProductoRepository.findById(id);
  }

  @Override
  public VentaProducto guardar(VentaProducto ventaProducto) {
    return ventaProductoRepository.save(ventaProducto);
  }

  @Override
  public void eliminar(Integer id) {
    ventaProductoRepository.deleteById(id);
  }
}

