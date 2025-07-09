import { useEffect, useState } from 'react'
import {
  getProductos,
  eliminarProducto
} from '../../services/productoService'

import { useNavigate } from 'react-router-dom'

const ProductoList = () => {
  const [productos, setProductos] = useState([])
  const navigate = useNavigate()

  const cargarProductos = async () => {
    try {
      const response = await getProductos()
      setProductos(response.data)
    } catch (error) {
      console.error('Error al cargar productos:', error)
    }
  }

  const handleEliminar = async (id) => {
    try {
      await eliminarProducto(id)
      cargarProductos()
    } catch (error) {
      console.error('Error al eliminar producto:', error)
    }
  }

  useEffect(() => {
    cargarProductos()
  }, [])

  return (
    <div>
      <h2>Listado de Productos</h2>
      <button onClick={() => navigate('/productos/create')}>Nuevo Producto</button>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((prod) => (
            <tr key={prod.idProducto}>
              <td>{prod.idProducto}</td>
              <td>{prod.nombreProducto}</td>
              <td>{prod.precioProducto}</td>
              <td>{prod.descripcionProducto}</td>
              <td>{prod.stockProducto}</td>
              <td>
                <button onClick={() => navigate(`/productos/editar/${prod.idProducto}`)}>Editar</button>
                <button onClick={() => handleEliminar(prod.idProducto)}>Eliminar</button>
              </td>
            </tr>
          ))}
          {productos.length === 0 && (
            <tr>
              <td colSpan="6">No hay productos registrados.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ProductoList
