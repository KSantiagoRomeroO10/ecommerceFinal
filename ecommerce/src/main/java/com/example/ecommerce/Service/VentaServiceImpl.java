package com.example.ecommerce.Service;

import com.example.ecommerce.Model.Venta;
import com.example.ecommerce.Repository.VentaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VentaServiceImpl implements VentaService {
  @Autowired
  private VentaRepository ventaRepository;

  @Override
  public List<Venta> obtenerTodas() {
    return ventaRepository.findAll();
  }

  @Override
  public Optional<Venta> obtenerPorId(Integer id) {
    return ventaRepository.findById(id);
  }

  @Override
  public Venta guardar(Venta venta) {
    return ventaRepository.save(venta);
  }

  @Override
  public void eliminar(Integer id) {
    ventaRepository.deleteById(id);
  }
}
