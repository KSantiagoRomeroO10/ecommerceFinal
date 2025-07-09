package com.example.ecommerce.Controller;

import com.example.ecommerce.Model.Vendedor;
import com.example.ecommerce.Service.VendedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vendedores")
@CrossOrigin(origins = "*")
public class VendedorController {
  @Autowired
  private VendedorService vendedorService;

  @GetMapping
  public ResponseEntity<List<Vendedor>> obtenerTodos() {
    return ResponseEntity.ok(vendedorService.obtenerTodos());
  }

  @GetMapping("/{id}")
  public ResponseEntity<Vendedor> obtenerPorId(@PathVariable Integer id) {
    return vendedorService.obtenerPorId(id)
          .map(ResponseEntity::ok)
          .orElse(ResponseEntity.notFound().build());
  }

  @PostMapping
  public ResponseEntity<Vendedor> crear(@RequestBody Vendedor vendedor) {
    return ResponseEntity.ok(vendedorService.guardar(vendedor));
  }

  @PutMapping("/{id}")
  public ResponseEntity<Vendedor> actualizar(@PathVariable Integer id, @RequestBody Vendedor vendedor) {
    if (!vendedorService.obtenerPorId(id).isPresent()) {
      return ResponseEntity.notFound().build();
    }
    vendedor.setIdVendedor(id);
    return ResponseEntity.ok(vendedorService.guardar(vendedor));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> eliminar(@PathVariable Integer id) {
    if (!vendedorService.obtenerPorId(id).isPresent()) {
      return ResponseEntity.notFound().build();
    }
    vendedorService.eliminar(id);
    return ResponseEntity.noContent().build();
  }
}
