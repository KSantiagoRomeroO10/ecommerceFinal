CREATE DATABASE ecommerce;
GO

USE ecommerce;
GO

CREATE TABLE productos (
	id_producto INT PRIMARY KEY IDENTITY,
	nombre_producto NVARCHAR(50) NOT NULL,
	precio_producto DECIMAL(8, 2) NOT NULL,
	descripcion_producto NVARCHAR(MAX) NOT NULL,
	stock_producto INT NOT NULL
);

CREATE TABLE vendedores (
	id_vendedor INT PRIMARY KEY IDENTITY,
	nombre_vendedor NVARCHAR(50) NOT NULL,
	correo_vendedor NVARCHAR(50) NOT NULL,
	comision_vendedor INT NOT NULL
);

CREATE TABLE ventas (
	id_venta INT PRIMARY KEY IDENTITY,
	id_vendedor INT NOT NULL,
	fecha_venta DATETIME NOT NULL DEFAULT GETDATE(),
	FOREIGN KEY (id_vendedor) REFERENCES vendedores(id_vendedor)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);

CREATE TABLE venta_producto (
	id_venta_producto INT PRIMARY KEY IDENTITY,
	id_venta INT NOT NULL,
	id_producto INT NOT NULL,
	cantidad INT NOT NULL,
	precio_unitario DECIMAL(8,2) NOT NULL,
	FOREIGN KEY (id_venta) REFERENCES ventas(id_venta)
		ON DELETE CASCADE
		ON UPDATE CASCADE,
	FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);

INSERT INTO productos (nombre_producto, precio_producto, descripcion_producto, stock_producto) VALUES
('Laptop Lenovo', 3500.00, 'Laptop Lenovo Ideapad 3 con Ryzen 5', 20),
('Mouse Logitech', 80.00, 'Mouse inalámbrico Logitech M185', 100),
('Monitor LG 24"', 750.00, 'Monitor Full HD 24 pulgadas LG', 15),
('Teclado Redragon', 120.00, 'Teclado mecánico Redragon Kumara K552', 50),
('Impresora HP', 600.00, 'Impresora multifuncional HP DeskJet 3775', 30);

INSERT INTO vendedores (nombre_vendedor, correo_vendedor, comision_vendedor) VALUES
('Ana Torres', 'ana.torres@tienda.com', 5),
('Carlos Rojas', 'carlos.rojas@tienda.com', 8),
('Lucia Mendez', 'lucia.mendez@tienda.com', 7),
('Pedro Gomez', 'pedro.gomez@tienda.com', 6),
('Sofia Lopez', 'sofia.lopez@tienda.com', 10);

INSERT INTO ventas (id_vendedor) VALUES
(1),
(2),
(3),
(4),
(5);

INSERT INTO venta_producto (id_venta, id_producto, cantidad, precio_unitario) VALUES
(1, 1, 2, 3500.00),   -- 2 laptops
(1, 2, 1, 80.00),     -- 1 mouse
(2, 3, 1, 750.00),    -- 1 monitor
(3, 4, 3, 120.00),    -- 3 teclados
(4, 5, 2, 600.00),    -- 2 impresoras
(5, 2, 4, 80.00),     -- 4 mouses
(5, 3, 1, 750.00);    -- 1 monitor adicional
