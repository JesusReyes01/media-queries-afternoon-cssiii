import React, {Component} from 'react'
import './Header.css'

export default class Header extends Component{
    constructor(){
        super();
        this.state = {
            menu: false
        }
    }
    slide = () => {
        this.setState({menu: !this.state.menu})
    }
    render(){
        return(
            <div className='menus'>
                <nav className='navbar'>   
                    <div className="navbar-container">
                        <h1 className='navbar-title'>Start Bootstrap</h1>
                        <div className='navbar-icon' onClick={this.slide}>&#9776;</div>
                        <div className='navbar-menu'>
                            <a href='#'>About</a>
                            <a href='#'>Projects</a>
                            <a href='#'>Contact</a>
                        </div>

                    </div>
                </nav>

            
                <div className={this.state.menu ? 'menu slide' : 'menu'}>
                    <a href='#'>About</a>
                    <a href='#'>Projects</a>
                    <a href='#'>Contact</a>
                </div>
            </div>
        )
    }
}