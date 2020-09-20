import React from 'react';
import '../css/store.css';
import BarraSuperior from './BarraSuperior';
import Catalogo from './Catalogo';

class Store extends React.Component{
  constructor(props){
      super(props);
      document.body.classList.remove("bg-login");
      document.body.classList.add("bg-main");
      this.state = {
        count: 0,
        show: "catalogo"
      };
  }

  addCount = (number) => {
    let sum=this.state.count + parseInt(number)
    this.setState({ count: sum })
  };

  showComponent(componentName){
    this.setState({
      show: componentName
    })
  }

  setCountToZero(){
    this.setState({count:0})
  }

  render(){
    return (
      <div className="container">
        <div className="row main">
          <BarraSuperior showComponent={this.showComponent.bind(this)} count={this.state.count}></BarraSuperior>
          <div className="row">
              <div className="col m12">
                  <Catalogo setCountToZero={this.setCountToZero.bind(this)} addCount={this.addCount.bind(this)} 
                    show={this.state.show} showComponent={this.showComponent.bind(this)}></Catalogo>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Store;
