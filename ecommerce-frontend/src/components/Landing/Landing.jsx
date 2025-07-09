import { NavLink } from 'react-router-dom'
import styles from './Landing.module.css'

const Landing = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenido a Mi Sitio</h1>
      <p className={styles.description}>Explora nuestras secciones usando los enlaces a continuación:</p>

      <nav className={styles.nav}>
        <NavLink
          to="/productos/list"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Listar Productos
        </NavLink>
        <NavLink
          to="/vendedor/list"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Listar Vendedor
        </NavLink>
        <NavLink
          to="/ventas/list"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Listar Ventas
        </NavLink>
        <NavLink
          to="/venta-producto/list"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Listar Venta Producto
        </NavLink>
      </nav>
    </div>
  )
}

export default Landing
