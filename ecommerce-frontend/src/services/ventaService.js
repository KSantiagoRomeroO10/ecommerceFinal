import axios from '../api/axiosConfig'

// Obtener todas las ventas
export const getVentas = () => {
  return axios.get('/ventas')
}

// Obtener una venta por ID
export const getVentaById = (id) => {
  return axios.get(`/ventas/${id}`)
}

// Crear una nueva venta
export const crearVenta = (venta) => {
  return axios.post('/ventas', venta)
}

// Actualizar una venta
export const actualizarVenta = (id, venta) => {
  return axios.put(`/ventas/${id}`, venta)
}

// Eliminar una venta
export const eliminarVenta = (id) => {
  return axios.delete(`/ventas/${id}`)
}
