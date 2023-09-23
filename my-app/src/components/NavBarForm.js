import React, { Component } from 'react'
import css from './css/NavBarForm.module.css';// import css from './NavBarForm.module.css';

export class NavBarForm extends Component {

constructor(props) {
  super(props)

  this.state = {
     isLoggedIn: true
  }
}


handleClick = () => {
    this.setState =({
      isLoggedIn: false,
    });
}

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gellery</h1>
        <button isLoggedIn={this.state.isLoggedIn}>LogIn</button>
      </div>
    )
  }
}

export default NavBarForm