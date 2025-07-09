import axios from '../api/axiosConfig'

// Obtener todos los registros de venta-producto
export const getVentaProductos = () => {
  return axios.get('/venta-productos')
}

// Obtener un registro de venta-producto por ID
export const getVentaProductoById = (id) => {
  return axios.get(`/venta-productos/${id}`)
}

// Crear un nuevo registro de venta-producto
export const crearVentaProducto = (ventaProducto) => {
  return axios.post('/venta-productos', ventaProducto)
}

// Actualizar un registro de venta-producto
export const actualizarVentaProducto = (id, ventaProducto) => {
  return axios.put(`/venta-productos/${id}`, ventaProducto)
}

// Eliminar un registro de venta-producto
export const eliminarVentaProducto = (id) => {
  return axios.delete(`/venta-productos/${id}`)
}
