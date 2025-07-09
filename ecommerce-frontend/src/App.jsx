import ProductoList from './components/Productos/ProductoList'
import ProductoForm from './components/Productos/ProductoForm'
import ProductoEditar from './components/Productos/ProductoEditar'

import Landing from './components/Landing/Landing'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import VendedorList from './components/Vendedor/VendedorList'
import VendedorEditar from './components/Vendedor/VendedorEditar'
import VendedorForm from './components/Vendedor/VendedorForm'

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

      <Route path="/ventas/list" />
      <Route path="/ventas/create" />
      <Route path="/ventas/editar/:id" />

      <Route path="/venta-producto/list" />
      <Route path="/venta-producto/create" />
      <Route path="/venta-producto/editar/:id" />
    </Routes>
  )
}

export default App
