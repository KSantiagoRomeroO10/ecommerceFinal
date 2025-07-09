import { useState } from 'react'
import { crearVenta } from '../../services/ventaService'
import { useNavigate } from 'react-router-dom'

const VentaForm = ({ onVentaCreada }) => {
  const [form, setForm] = useState({
    idVendedor: '',
    fechaVenta: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const venta = {
        ...form,
        idVendedor: parseInt(form.idVendedor)
      }
      await crearVenta(venta)
      setForm({
        idVendedor: '',
        fechaVenta: ''
      })
      if (onVentaCreada) onVentaCreada()
      navigate('/venta/list')
    } catch (error) {
      console.error('Error al crear venta:', error)
    }
  }

  return (
    <div>
      <h2>Registrar Venta</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="idVendedor"
          placeholder="ID del Vendedor"
          value={form.idVendedor}
          onChange={handleChange}
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
        <button type="submit" onClick={() => navigate('/venta/list')}>Guardar</button>
      </form>
    </div>
  )
}

export default VentaForm
