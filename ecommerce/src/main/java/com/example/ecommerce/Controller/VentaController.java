package com.example.ecommerce.Controller;

import com.example.ecommerce.Model.Venta;
import com.example.ecommerce.Service.VentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ventas")
@CrossOrigin(origins = "*")
public class VentaController {
  @Autowired
  private VentaService ventaService;

  @GetMapping
  public ResponseEntity<List<Venta>> obtenerTodas() {
      return ResponseEntity.ok(ventaService.obtenerTodas());
  }

  @GetMapping("/{id}")
  public ResponseEntity<Venta> obtenerPorId(@PathVariable Integer id) {
      return ventaService.obtenerPorId(id)
              .map(ResponseEntity::ok)
              .orElse(ResponseEntity.notFound().build());
  }

  @PostMapping
  public ResponseEntity<Venta> crearVenta(@RequestBody Venta venta) {
      return ResponseEntity.ok(ventaService.guardar(venta));
  }

  @PutMapping("/{id}")
  public ResponseEntity<Venta> actualizarVenta(@PathVariable Integer id, @RequestBody Venta venta) {
      if (!ventaService.obtenerPorId(id).isPresent()) {
          return ResponseEntity.notFound().build();
      }
      venta.setIdVenta(id);
      return ResponseEntity.ok(ventaService.guardar(venta));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> eliminarVenta(@PathVariable Integer id) {
      if (!ventaService.obtenerPorId(id).isPresent()) {
          return ResponseEntity.notFound().build();
      }
      ventaService.eliminar(id);
      return ResponseEntity.noContent().build();
  }
}
