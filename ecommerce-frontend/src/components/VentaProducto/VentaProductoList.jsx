import { useEffect, useState } from 'react'
import {
  getVentasProducto,
  eliminarVentaProducto
} from '../../services/ventaProductoService'

import { useNavigate } from 'react-router-dom'

const VentaProductoList = () => {
  const [ventas, setVentas] = useState([])
  const navigate = useNavigate()

  const cargarVentas = async () => {
    try {
      const response = await getVentasProducto()
      setVentas(response.data)
    } catch (error) {
      console.error('Error al cargar ventas:', error)
    }
  }

  const handleEliminar = async (id) => {
    try {
      await eliminarVentaProducto(id)
      cargarVentas()
    } catch (error) {
      console.error('Error al eliminar venta:', error)
    }
  }

  useEffect(() => {
    cargarVentas()
  }, [])

  return (
    <div>
      <h2>Listado de Ventas de Productos</h2>
      <button onClick={() => navigate('/venta-producto/create')}>Registrar Nueva Venta</button>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((venta) => (
            <tr key={venta.idVentaProducto}>
              <td>{venta.idVentaProducto}</td>
              <td>{venta.nombreProducto}</td>
              <td>{venta.cantidadVendida}</td>
              <td>{venta.precioUnitario}</td>
              <td>
                <button onClick={() => navigate(`/venta-producto/editar/${venta.idVentaProducto}`)}>Editar</button>
                <button onClick={() => handleEliminar(venta.idVentaProducto)}>Eliminar</button>
              </td>
            </tr>
          ))}
          {ventas.length === 0 && (
            <tr>
              <td colSpan="5">No hay ventas registradas.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default VentaProductoList
