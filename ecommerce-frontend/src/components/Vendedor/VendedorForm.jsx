import { useState } from 'react'
import { crearVendedor } from '../../services/vendedorService'
import { useNavigate } from 'react-router-dom'

const VendedorForm = ({ onVendedorCreado }) => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    nombreVendedor: '',
    correoVendedor: '',
    comisionVendedor: ''
  })

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
      const vendedor = {
        ...form,
        comisionVendedor: parseInt(form.comisionVendedor)
      }
      await crearVendedor(vendedor)
      setForm({
        nombreVendedor: '',
        correoVendedor: '',
        comisionVendedor: ''
      })
      if (onVendedorCreado) onVendedorCreado()
    } catch (error) {
      console.error('Error al crear vendedor:', error)
    }
  }

  return (
    <div>
      <h2>Nuevo Vendedor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombreVendedor"
          placeholder="Nombre"
          value={form.nombreVendedor}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          name="correoVendedor"
          placeholder="Correo"
          value={form.correoVendedor}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          name="comisionVendedor"
          placeholder="Comisión (%)"
          value={form.comisionVendedor}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit" onClick={() => navigate('/vendedor/list')}>Guardar</button>
      </form>
    </div>
  )
}

export default VendedorForm
