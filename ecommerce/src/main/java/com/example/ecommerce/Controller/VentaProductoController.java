package com.example.ecommerce.Controller;

import com.example.ecommerce.Model.VentaProducto;
import com.example.ecommerce.Service.VentaProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/venta-producto")
@CrossOrigin(origins = "*")
public class VentaProductoController {
  @Autowired
  private VentaProductoService ventaProductoService;

  @GetMapping
  public ResponseEntity<List<VentaProducto>> obtenerTodos() {
    return ResponseEntity.ok(ventaProductoService.obtenerTodos());
  }

  @GetMapping("/{id}")
  public ResponseEntity<VentaProducto> obtenerPorId(@PathVariable Integer id) {
    return ventaProductoService.obtenerPorId(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
  }

  @PostMapping
  public ResponseEntity<VentaProducto> crear(@RequestBody VentaProducto ventaProducto) {
    return ResponseEntity.ok(ventaProductoService.guardar(ventaProducto));
  }

  @PutMapping("/{id}")
  public ResponseEntity<VentaProducto> actualizar(@PathVariable Integer id, @RequestBody VentaProducto ventaProducto) {
    if (!ventaProductoService.obtenerPorId(id).isPresent()) {
      return ResponseEntity.notFound().build();
    }
    ventaProducto.setIdVentaProducto(id);
    return ResponseEntity.ok(ventaProductoService.guardar(ventaProducto));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> eliminar(@PathVariable Integer id) {
    if (!ventaProductoService.obtenerPorId(id).isPresent()) {
      return ResponseEntity.notFound().build();
    }
    ventaProductoService.eliminar(id);
    return ResponseEntity.noContent().build();
  }
}
