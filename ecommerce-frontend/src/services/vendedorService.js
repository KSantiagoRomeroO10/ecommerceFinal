import axios from '../api/axiosConfig'

// Obtener todos los vendedores
export const getVendedores = () => {
  return axios.get('/vendedores')
}

// Obtener un vendedor por ID
export const getVendedorById = (id) => {
  return axios.get(`/vendedores/${id}`)
}

// Crear un nuevo vendedor
export const crearVendedor = (vendedor) => {
  return axios.post('/vendedores', vendedor)
}

// Actualizar un vendedor
export const actualizarVendedor = (id, vendedor) => {
  return axios.put(`/vendedores/${id}`, vendedor)
}

// Eliminar un vendedor
export const eliminarVendedor = (id) => {
  return axios.delete(`/vendedores/${id}`)
}
