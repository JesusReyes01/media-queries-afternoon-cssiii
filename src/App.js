import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header'

export default class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      spinning: false
    }
    this.animateButton = this.animateButton.bind(this)
  }
  animateButton = function(){
    this.setState({spinning: !this.state.spinning})
  }
  render(){
    return(
      <div>
        <Header/>
        <div className = 'image'>
          <h1>GRAYSCALE</h1>
          <p>A free, responsive, one page Bootstrap theme created by Start Bootstrap.</p>
          <button className={this.state.spinning ? 'main-button animate-button-on-demand-spin' : 'main-button'}
          onClick={this.animateButton}>GET STARTED</button>
        </div>
        <div className='demo-cont'></div>
      </div>
    )
  }


}
