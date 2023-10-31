import "../styles/header.css"
import { NavLink } from 'react-router-dom'

const HeaderComida = () => {
  return (
    <header>
      <div>
        <h1>Random Food</h1>
      </div>
      <nav>
        <div>
          <NavLink to="/" className="all-food" href="#">Todas las Comidas</NavLink>
        </div>
        <div>
          <NavLink to="/add" className="add-food" href="#">Agregar Comida</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default HeaderComida
