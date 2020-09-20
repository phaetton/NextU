import React from 'react';
import '../css/detalle.css';

class Detalle extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        nombre: this.props.nombre,
        show: true,
        precio: this.props.precio,
        descripcion: this.props.descripcion,
        stock: this.props.stock,
        imagen: this.props.imagen
      }
  }

  hideDetalle() {
    this.setState({
      show: false
    });
    this.props.showCatalogo();
  }

  render(){
    let nombre=this.state.nombre;    
    let descripcion=this.state.descripcion;
    let precio=this.state.precio;
    let stock=this.state.stock;
    let imagen=this.state.imagen;
    let content;

    if (this.state.show) {
      content=<div className="card white"><div className="card-content">
                <span className="card-title gray-text text-lighten-2">{nombre}</span>
                <hr/>
                <div className="row main">
                  <div className="col m5">
                    <img className="img-detalle" src={`../assets/${imagen}`} />
                  </div>
                  <div className="col m7">
                    <dl>
                    <dt>Descrición:</dt>
                      <dd>{descripcion}</dd>
                      <dt>Precio:</dt>
                      <dd>${precio}</dd>
                      <dt>Unidades Disponibles:</dt>
                      <dd>{stock}</dd>
                    </dl>
                    <button onClick={this.hideDetalle.bind(this)} className="btn grey lighten-5 black-text text-darken-2 back-detalle" type="button">Atrás</button>
                  </div>
                </div>
              </div>
            </div>;
    }
    else {
      content=<div></div>;
    }

    return (
      <div>
        {content}
      </div>
    )
  }
}

export default Detalle;
