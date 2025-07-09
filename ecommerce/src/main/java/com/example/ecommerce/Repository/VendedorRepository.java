package com.example.ecommerce.Repository;

import com.example.ecommerce.Model.Vendedor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VendedorRepository extends JpaRepository<Vendedor, Integer> {  }
