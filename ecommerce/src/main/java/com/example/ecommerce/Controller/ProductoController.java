package com.example.ecommerce.Controller;

import com.example.ecommerce.Model.Producto;
import com.example.ecommerce.Service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "*") // Permitir solicitudes desde cualquier origen (útil para Angular local)
public class ProductoController {
  @Autowired
  private ProductoService productoService;

  @GetMapping
  public ResponseEntity<List<Producto>> obtenerTodos() {
    return ResponseEntity.ok(productoService.obtenerTodos());
  }

  @GetMapping("/{id}")
  public ResponseEntity<Producto> obtenerPorId(@PathVariable Integer id) {
      return productoService.obtenerPorId(id)
              .map(ResponseEntity::ok)
              .orElse(ResponseEntity.notFound().build());
  }

  @PostMapping
  public ResponseEntity<Producto> crearProducto(@RequestBody Producto producto) {
    return ResponseEntity.ok(productoService.guardar(producto));
  }

  @PutMapping("/{id}")
  public ResponseEntity<Producto> actualizarProducto(@PathVariable Integer id, @RequestBody Producto producto) {
    if (!productoService.obtenerPorId(id).isPresent()) {
      return ResponseEntity.notFound().build();
    }
    producto.setIdProducto(id);
    return ResponseEntity.ok(productoService.guardar(producto));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> eliminarProducto(@PathVariable Integer id) {
    if (!productoService.obtenerPorId(id).isPresent()) {
      return ResponseEntity.notFound().build();
    }
    productoService.eliminar(id);
    return ResponseEntity.noContent().build();
  }
}
