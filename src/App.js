import React, { Component } from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Explore from './components/Explore';
import MenuBar from './components/MenuBar';
import Login from './components/Login';
import SignUp from './components/SignUp'
import { GoogleMapKey } from './keys'

class App extends Component {
  render() {


    return (
      <div className="App">
      <script type="text/javascript" src={`https://maps.googleapis.com/maps/api/js?key=${GoogleMapKey}&libraries=places`}></script>

        <MenuBar />
        <Switch>
          <Route path='/explore' component={Explore} />
          <Route path='/logout' component={Home} />
          <Route path='/signup' component={SignUp} />
          <Route path='/' component={Home} />

        </Switch>
      </div>
    );
  }
}

export default App;
