import { useEffect, useState } from 'react'
import {
  getVendedores,
  eliminarVendedor
} from '../../services/vendedorService'

import { useNavigate } from 'react-router-dom'

const VendedorList = () => {
  const [vendedores, setVendedores] = useState([])
  const navigate = useNavigate()

  const cargarVendedores = async () => {
    try {
      const response = await getVendedores()
      setVendedores(response.data)
    } catch (error) {
      console.error('Error al cargar vendedores:', error)
    }
  }

  const handleEliminar = async (id) => {
    try {
      await eliminarVendedor(id)
      cargarVendedores()
    } catch (error) {
      console.error('Error al eliminar vendedor:', error)
    }
  }

  useEffect(() => {
    cargarVendedores()
  }, [])

  return (
    <div>
      <h2>Listado de Vendedores</h2>
      <button onClick={() => navigate('/vendedor/create')}>Nuevo Vendedor</button>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Comisión (%)</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {vendedores.map((vend) => (
            <tr key={vend.idVendedor}>
              <td>{vend.idVendedor}</td>
              <td>{vend.nombreVendedor}</td>
              <td>{vend.correoVendedor}</td>
              <td>{vend.comisionVendedor}</td>
              <td>
                <button onClick={() => navigate(`/vendedor/editar/${vend.idVendedor}`)}>Editar</button>
                <button onClick={() => handleEliminar(vend.idVendedor)}>Eliminar</button>
              </td>
            </tr>
          ))}
          {vendedores.length === 0 && (
            <tr>
              <td colSpan="5">No hay vendedores registrados.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default VendedorList
