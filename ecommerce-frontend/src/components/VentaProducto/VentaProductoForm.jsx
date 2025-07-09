import { useState } from 'react'
import { crearVentaProducto } from '../../services/ventaProductoService'
import { useNavigate } from 'react-router-dom'

const VentaProductoForm = ({ onVentaProductoCreada }) => {
  const [form, setForm] = useState({
    nombreProducto: '',
    cantidadVendida: '',
    precioUnitario: ''
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
        cantidadVendida: parseInt(form.cantidadVendida),
        precioUnitario: parseFloat(form.precioUnitario)
      }
      await crearVentaProducto(venta)
      setForm({
        nombreProducto: '',
        cantidadVendida: '',
        precioUnitario: ''
      })
      if (onVentaProductoCreada) onVentaProductoCreada()
      navigate('/venta-producto/list')
    } catch (error) {
      console.error('Error al crear venta de producto:', error)
    }
  }

  return (
    <div>
      <h2>Registrar Venta de Producto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombreProducto"
          placeholder="Nombre del producto"
          value={form.nombreProducto}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          name="cantidadVendida"
          placeholder="Cantidad"
          value={form.cantidadVendida}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          name="precioUnitario"
          placeholder="Precio unitario"
          value={form.precioUnitario}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Guardar</button>
      </form>
    </div>
  )
}

export default VentaProductoForm
