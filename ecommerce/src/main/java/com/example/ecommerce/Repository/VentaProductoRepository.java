package com.example.ecommerce.Repository;

import com.example.ecommerce.Model.VentaProducto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VentaProductoRepository extends JpaRepository<VentaProducto, Integer> {  }
