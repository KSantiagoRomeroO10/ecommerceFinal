package com.example.ecommerce.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ecommerce.Model.Producto;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Integer> {  }
