import React from 'react';
import axios from 'axios';
import '../css/carro.css';

class Carro extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: true,
            items: this.props.items
        }

        this.itemsProcessed = []
        this.total = 0
    }

  componentDidMount(){
    let cart = this.props.itemsInCart

    for (var i in cart) {
        let word = cart[i].nombre;
        let unidades = cart[i].cantidad;
        let myItem = this.state.items.filter(c => c.nombre.toLowerCase() === word.toLowerCase());
        let subtotal = Number(myItem[0].precio) * Number(unidades);
        let precio = myItem[0].precio;
        let imagen = myItem[0].imagen;
        let json = {nombre: word, unidades: unidades,precio:precio, subtotal: subtotal, imagen: imagen};
        this.itemsProcessed.push(json);
        this.total = Number(this.total) + Number(subtotal)        
    }
  }

    pay(){
        for (var i in this.props.itemsInCart) {
            let index = this.getIndex(this.state.items, this.props.itemsInCart[i].nombre);
            let stock = Number(this.state.items[index].stock);
            this.updateStock(index, stock);
        }
        alert('Gracias por su compra.');
        this.hideCarro();
        this.props.cleanCatalog();
    }

    updateStock(index, stock){
        let url = 'https://tiendaphaetton.firebaseio.com/productos/'+index+'/.json';
        let body = '{"stock": '+stock+'}';
        axios.patch(url, body)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    listItems() {
        let items = this.itemsProcessed;
        return (
            <ul className="collection">
            {
            items.map((item) => {
                return (
                    <li className="collection-item avatar">
                        <img src={`../assets/${item.imagen}`} alt="" className="circle" />
                        <span className="title">{item.nombre}</span>
                        <p><strong>Unidades:</strong> {item.unidades}<br/>
                            <strong>Precio:</strong> ${item.precio}<br/>
                            <strong>Subtotal:</strong> ${item.subtotal}
                        </p>
                    </li>              
                );
            })
            }
        </ul>
        );
    }

    getIndex(allItems, name){
        for (var i in allItems){
        if (allItems[i].nombre === name){
            return i;
        }
        }
        return 0;
    }

    hideCarro() {
        this.setState({
            show: false
        });
        this.props.showComponent("catalogo");
    }

    render(){
        let content;       
        
        if(this.state.show){
            content=<div className="card white">
            <div className="card-content">
            <div className="row main">
                <div className="col m5">

                { this.listItems() }
                
                </div>
                <div className="col m7">
                    <div className="total">Total: ${this.total}</div>
                    <button onClick={this.hideCarro.bind(this)} className="btn white cart-button" type="button" name="mas">Cancelar</button>
                    <button onClick={this.pay.bind(this)} className="btn white cart-button" type="button" name="mas">Pagar</button>
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

export default Carro;
