import { useEffect, useState } from 'react'
import { getVentaProductoById, actualizarVentaProducto } from '../../services/ventaProductoService'
import { useNavigate, useParams } from 'react-router-dom'

const VentaProductoEditar = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    nombreProducto: '',
    cantidadVendida: '',
    precioUnitario: ''
  })

  useEffect(() => {
    const cargarVenta = async () => {
      try {
        const res = await getVentaProductoById(id)
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
        cantidadVendida: parseInt(form.cantidadVendida),
        precioUnitario: parseFloat(form.precioUnitario)
      }
      await actualizarVentaProducto(id, ventaActualizada)
      navigate('/venta-producto/list')
    } catch (error) {
      console.error('Error al actualizar venta:', error)
    }
  }

  return (
    <div>
      <h2>Editar Venta de Producto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombreProducto"
          value={form.nombreProducto}
          onChange={handleChange}
          placeholder="Nombre del producto"
          required
        />
        <br />
        <input
          type="number"
          name="cantidadVendida"
          value={form.cantidadVendida}
          onChange={handleChange}
          placeholder="Cantidad"
          required
        />
        <br />
        <input
          type="number"
          name="precioUnitario"
          value={form.precioUnitario}
          onChange={handleChange}
          placeholder="Precio unitario"
          required
        />
        <br />
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  )
}

export default VentaProductoEditar
