Create Database ecommerce;
Go

Use ecommerce;
-- Crear tabla de productos
CREATE TABLE Producto (
    id_producto INT PRIMARY KEY,
    nombre VARCHAR(100),
    precio DECIMAL(10, 2)
);

-- Crear tabla de vendedores
CREATE TABLE Vendedor (
    id_vendedor INT PRIMARY KEY,
    nombre VARCHAR(100),
    correo VARCHAR(100)
);

-- Crear tabla de ventas con claves for�neas y ON DELETE/UPDATE CASCADE
CREATE TABLE Venta (
    id_venta INT PRIMARY KEY,
    id_producto INT,
    id_vendedor INT,
    cantidad INT,
    fecha_venta DATE,
    Constraint fk_id_producto FOREIGN KEY (id_producto) REFERENCES Producto(id_producto)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    Constraint fk_id_vendedor FOREIGN KEY (id_vendedor) REFERENCES Vendedor(id_vendedor)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Insertar productos
INSERT INTO Producto (id_producto, nombre, precio) VALUES
(1, 'Laptop Lenovo', 2500.00),
(2, 'Mouse inalambrico', 80.50),
(3, 'Monitor 24"', 720.99),
(4, 'Teclado mecanico', 150.75),
(5, 'Disco SSD 1TB', 320.00);

-- Insertar vendedores
INSERT INTO Vendedor (id_vendedor, nombre, correo) VALUES
(1, 'Laura Gomez', 'laura.gomez@ventas.com'),
(2, 'Carlos Ruiz', 'carlos.ruiz@ventas.com'),
(3, 'Andrea Torres', 'andrea.torres@ventas.com'),
(4, 'Javier Lopez', 'javier.lopez@ventas.com'),
(5, 'Sofia Mendoza', 'sofia.mendoza@ventas.com');

-- Insertar ventas
INSERT INTO Venta (id_venta, id_producto, id_vendedor, cantidad, fecha_venta) VALUES
(1, 1, 1, 2, '2025-07-01'),
(2, 3, 2, 1, '2025-07-02'),
(3, 2, 3, 5, '2025-07-03'),
(4, 4, 4, 3, '2025-07-04'),
(5, 5, 5, 1, '2025-07-05'),
(6, 1, 2, 1, '2025-07-06'),
(7, 3, 1, 2, '2025-07-06');
