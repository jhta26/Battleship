import React, { Component } from 'react';


export default class ShipPickComponent extends Component {
  constructor(props){
  super(props)
  this.state = {
    shipName: '',
    shipSize: 0,
    vertical: true
  }
}

  render() {
    return (
      <div className="shipPick">
        <div className="row">
          <h4>Place Your Ships</h4>
        </div>
        <div className="row" />
        {this.props.Ships?this.props.Ships.map(ship=>
        <a class="waves-effect waves-light btn">{ship.name}</a>
        ):  <a class="waves-effect waves-light btn">button</a>}
      

      </div>
    );
  }
}
