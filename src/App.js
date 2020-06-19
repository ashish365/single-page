import React, {Component, Fragment} from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import Login from './Components/Login'
import Admin from './Components/Admin'
import User from './Components/User'
import { DataBase } from './Config';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isAdmin: false,
      username: ""
    }
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onLogout = this.onLogout.bind(this);

  }

  onSubmitForm({username, password}) {
    console.log(username + "\n" + password);
    const found = DataBase.find((e) => e.username === username);
    
    //code logic
    if (found) {
      console.log(password);
      console.log(found.password);
      if (found.password === password) {
        if (username === "Admin") this.setState({isAdmin: true, isLoggedIn: true, username: username});
        else this.setState({isLoggedIn: true, username: username})
      } else {
        // password did not match
         alert("Wrong Credentials")
      }
    } else {
      // user not found
         alert("User Not found")
    }
  }

  onLogout() {
    this.setState({isLoggedIn: false, isAdmin: false, username: ""});
  }

  render() {
    if (!this.state.isLoggedIn) {
      return (
        <Login submitForm={this.onSubmitForm}/>
      );
    }
    else {
      if (this.state.isAdmin) {
        return (
          <Admin handleLogout={this.onLogout} username={this.state.username}/>
        );
      } else {
        return (
          <User handleLogout={this.onLogout} username={this.state.username}/>
        );
      }
    }
  }
}

export default App;
