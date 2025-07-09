package com.example.ecommerce.Service;

import com.example.ecommerce.Model.Vendedor;
import com.example.ecommerce.Repository.VendedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VendedorServiceImpl implements VendedorService {

  @Autowired
  private VendedorRepository vendedorRepository;

  @Override
  public List<Vendedor> obtenerTodos() {
    return vendedorRepository.findAll();
  }

  @Override
  public Optional<Vendedor> obtenerPorId(Integer id) {
    return vendedorRepository.findById(id);
  }

  @Override
  public Vendedor guardar(Vendedor vendedor) {
    return vendedorRepository.save(vendedor);
  }

  @Override
  public void eliminar(Integer id) {
    vendedorRepository.deleteById(id);
  }
}
