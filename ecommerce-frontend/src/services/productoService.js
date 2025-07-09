import axios from '../api/axiosConfig'

// Obtener todos los productos
export const getProductos = () => {
  return axios.get('/productos')
}

// Obtener un producto por ID
export const getProductoById = (id) => {
  return axios.get(`/productos/${id}`)
}

// Crear un nuevo producto
export const crearProducto = (producto) => {
  return axios.post('/productos', producto)
}

// Actualizar un producto
export const actualizarProducto = (id, producto) => {
  return axios.put(`/productos/${id}`, producto)
}

// Eliminar un producto
export const eliminarProducto = (id) => {
  return axios.delete(`/productos/${id}`)
}
