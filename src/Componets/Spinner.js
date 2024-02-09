import React, { Component } from 'react'
import loading from './loading.gif'
export class spinner extends Component {
  render() {
    return (
      <div>
      <center> <img src={loading} alt="loading"/></center>   
      </div>
    )
  }
}

export default spinner
