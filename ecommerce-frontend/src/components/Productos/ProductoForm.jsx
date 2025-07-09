import { useState } from 'react'
import { crearProducto } from '../../services/productoService'
import { useNavigate } from 'react-router-dom'

const ProductoForm = ({ onProductoCreado }) => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    nombreProducto: '',
    precioProducto: '',
    descripcionProducto: '',
    stockProducto: ''
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
      const producto = {
        ...form,
        precioProducto: parseFloat(form.precioProducto),
        stockProducto: parseInt(form.stockProducto)
      }
      await crearProducto(producto)
      setForm({
        nombreProducto: '',
        precioProducto: '',
        descripcionProducto: '',
        stockProducto: ''
      })
      if (onProductoCreado) onProductoCreado()
    } catch (error) {
      console.error('Error al crear producto:', error)
    }
  }

  return (
    <div>
      <h2>Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombreProducto"
          placeholder="Nombre"
          value={form.nombreProducto}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          step="0.01"
          name="precioProducto"
          placeholder="Precio"
          value={form.precioProducto}
          onChange={handleChange}
          required
        />
        <br />
        <textarea
          name="descripcionProducto"
          placeholder="Descripción"
          value={form.descripcionProducto}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          name="stockProducto"
          placeholder="Stock"
          value={form.stockProducto}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit" onClick={() => navigate('/productos/list')}>Guardar</button>
      </form>
    </div>
  )
}

export default ProductoForm
