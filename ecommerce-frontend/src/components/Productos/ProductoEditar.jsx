import { useEffect, useState } from 'react'
import { getProductoById, actualizarProducto } from '../../services/productoService'
import { useNavigate, useParams } from 'react-router-dom'

const ProductoEditar = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    nombreProducto: '',
    precioProducto: '',
    descripcionProducto: '',
    stockProducto: ''
  })

  useEffect(() => {
    const cargarProducto = async () => {
      try {
        const res = await getProductoById(id)
        setForm(res.data)
      } catch (error) {
        console.error('Error al cargar producto:', error)
      }
    }
    cargarProducto()
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
        precioProducto: parseFloat(form.precioProducto),
        stockProducto: parseInt(form.stockProducto)
      }
      await actualizarProducto(id, actualizado)
      navigate('/productos/list')
    } catch (error) {
      console.error('Error al actualizar producto:', error)
    }
  }

  return (
    <div>
      <h2>Editar Producto</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombreProducto" value={form.nombreProducto} onChange={handleChange} required />
        <br />
        <input type="number" step="0.01" name="precioProducto" value={form.precioProducto} onChange={handleChange} required />
        <br />
        <textarea name="descripcionProducto" value={form.descripcionProducto} onChange={handleChange} required />
        <br />
        <input type="number" name="stockProducto" value={form.stockProducto} onChange={handleChange} required />
        <br />
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  )
}

export default ProductoEditar
