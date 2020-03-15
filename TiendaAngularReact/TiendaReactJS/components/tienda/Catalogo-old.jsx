import React from 'react'
import { Link } from 'react-router-dom'
import CatalogoRow from './CatalogoRow.jsx' 

class Catalogo extends React.Component {


  render() {
    return (
      <div className="container-fluid">
        <ul className="media-list">
          {
            this.props.listado.map(
              (producto) => { return <CatalogoRow key={ producto.id } id={producto.id}  nombre={ producto.nombre } imagen={ producto.imagen } descripcion={ producto.descripcion } disponible={ producto.disponible } actualizarVistaDisponible={this.props.actualizarVistaDisponible} /> }
            )
          }
        </ul>
      </div>
    )
  }
}

export default Catalogo
