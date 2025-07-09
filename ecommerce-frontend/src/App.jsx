import ProductoList from './components/Productos/ProductoList'
import ProductoForm from './components/Productos/ProductoForm'
import ProductoEditar from './components/Productos/ProductoEditar'

import Landing from './components/Landing/Landing'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import VendedorList from './components/Vendedor/VendedorList'
import VendedorEditar from './components/Vendedor/VendedorEditar'
import VendedorForm from './components/Vendedor/VendedorForm'
import VentaList from './components/Venta/VentaList'
import VentaForm from './components/Venta/VentaForm'
import VentaEditar from './components/Venta/VentaEditar'
import VentaProductoForm from './components/VentaProducto/VentaProductoForm'
import VentaProductoEditar from './components/VentaProducto/VentaProductoEditar'
import VentaProductoList from './components/VentaProducto/VentaProductoList'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing/>}/>
      
      <Route path='/productos/list' element={<ProductoList />} />
      <Route path='/productos/create' element={<ProductoForm />}/>
      <Route path="/productos/editar/:id" element={<ProductoEditar />} />

      <Route path="/vendedor/list" element={<VendedorList />} />
      <Route path="/vendedor/create" element={<VendedorForm />} />
      <Route path="/vendedor/editar/:id" element={<VendedorEditar />} />

      <Route path="/ventas/list" element={<VentaList/>}/>
      <Route path="/ventas/create" element={<VentaForm/>}/>
      <Route path="/ventas/editar/:id"element={<VentaEditar/>} />

      <Route path="/venta-producto/list" element={<VentaProductoList/>}/>
      <Route path="/venta-producto/create" element={<VentaProductoForm/>}/>
      <Route path="/venta-producto/editar/:id"element={<VentaProductoEditar/>} />
    </Routes>
  )
}

export default App
