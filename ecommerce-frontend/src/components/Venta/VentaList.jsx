import { useEffect, useState } from 'react'
import {
  getVentas,
  eliminarVenta
} from '../../services/ventaService'

import { useNavigate } from 'react-router-dom'

const VentaList = () => {
  const [ventas, setVentas] = useState([])
  const navigate = useNavigate()

  const cargarVentas = async () => {
    try {
      const response = await getVentas()
      setVentas(response.data)
    } catch (error) {
      console.error('Error al cargar ventas:', error)
    }
  }

  const handleEliminar = async (id) => {
    try {
      await eliminarVenta(id)
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
      <h2>Listado de Ventas</h2>
      <button onClick={() => navigate('/venta/create')}>Registrar Nueva Venta</button>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID Venta</th>
            <th>ID Vendedor</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((venta) => (
            <tr key={venta.idVenta}>
              <td>{venta.idVenta}</td>
              <td>{venta.idVendedor}</td>
              <td>{new Date(venta.fechaVenta).toLocaleDateString()}</td>
              <td>
                <button onClick={() => navigate(`/venta/editar/${venta.idVenta}`)}>Editar</button>
                <button onClick={() => handleEliminar(venta.idVenta)}>Eliminar</button>
              </td>
            </tr>
          ))}
          {ventas.length === 0 && (
            <tr>
              <td colSpan="4">No hay ventas registradas.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default VentaList
