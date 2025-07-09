import { useEffect, useState } from 'react'
import { getVentaById, actualizarVenta } from '../../services/ventaService'
import { useNavigate, useParams } from 'react-router-dom'

const VentaEditar = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    idVendedor: '',
    fechaVenta: ''
  })

  useEffect(() => {
    const cargarVenta = async () => {
      try {
        const res = await getVentaById(id)
        setForm(res.data)
      } catch (error) {
        console.error('Error al cargar venta:', error)
      }
    }
    cargarVenta()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const ventaActualizada = {
        ...form,
        idVendedor: parseInt(form.idVendedor)
      }
      await actualizarVenta(id, ventaActualizada)
      navigate('/venta/list')
    } catch (error) {
      console.error('Error al actualizar venta:', error)
    }
  }

  return (
    <div>
      <h2>Editar Venta</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="idVendedor"
          value={form.idVendedor}
          onChange={handleChange}
          placeholder="ID del Vendedor"
          required
        />
        <br />
        <input
          type="date"
          name="fechaVenta"
          value={form.fechaVenta}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  )
}

export default VentaEditar
