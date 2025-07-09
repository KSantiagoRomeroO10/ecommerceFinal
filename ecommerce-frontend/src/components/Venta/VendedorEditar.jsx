import { useEffect, useState } from 'react'
import { getVendedorById, actualizarVendedor } from '../../services/vendedorService'
import { useNavigate, useParams } from 'react-router-dom'

const VendedorEditar = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    nombreVendedor: '',
    correoVendedor: '',
    comisionVendedor: ''
  })

  useEffect(() => {
    const cargarVendedor = async () => {
      try {
        const res = await getVendedorById(id)
        setForm(res.data)
      } catch (error) {
        console.error('Error al cargar vendedor:', error)
      }
    }
    cargarVendedor()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const actualizado = {
        ...form,
        comisionVendedor: parseInt(form.comisionVendedor)
      }
      await actualizarVendedor(id, actualizado)
      navigate('/vendedor/list')
    } catch (error) {
      console.error('Error al actualizar vendedor:', error)
    }
  }

  return (
    <div>
      <h2>Editar Vendedor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombreVendedor"
          value={form.nombreVendedor}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
        <br />
        <input
          type="email"
          name="correoVendedor"
          value={form.correoVendedor}
          onChange={handleChange}
          placeholder="Correo"
          required
        />
        <br />
        <input
          type="number"
          name="comisionVendedor"
          value={form.comisionVendedor}
          onChange={handleChange}
          placeholder="Comisión (%)"
          required
        />
        <br />
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  )
}

export default VendedorEditar
