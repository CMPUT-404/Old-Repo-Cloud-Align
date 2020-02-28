import React from 'react';
import './App.css';
import FriendsList from './Pages/Friends/FriendsList';
import Following from './Pages/Friends/Following';
import Friends from './Pages/Friends/Friends';
import Profile from './Pages/Profile';
import NavBar from './Components/NavBar';
import Timeline from './Pages/Timeline';
import Login from './Pages/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
class App extends React.Component {
  constructor(){
    super()
    this.state={
      isLoggedIn: true,
    }
  }

  render(){

    if (this.state.isLoggedIn===false){
      return (
        <Login />
      )
    } else {
      return(
        <Router>
          <NavBar />
          <Switch>
            <Route path="/profile" component={Profile}/>
            <Route path="/friends" component={Friends}/>
            <Route path="/friendslist" component={FriendsList}/>
            <Route path="/following" component={Following}/>
            <Route exact path="/timeline" component={Timeline}/>
          </Switch>
        </Router>
      );
    }
  }
}
export default App
