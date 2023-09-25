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
        {this.state.isLoggedIn ? (
          <button isLoggedIn={this.handleClick}>LogIn</button>
        ) : (
        <form>
          <label>
            Username:
            <input type="text" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" />
          </label>
          <br />
          <button onClick={this.handleClick}>Submit</button>
        </form>
        )}
      </div>
    );
  }
}

export default NavBarForm;