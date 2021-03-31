import React from 'react';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login'
import Signup from './components/Signup';

const PageNotFound = () => {
  return <div>Page not found</div>
}



function App() {


  return (
  
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>


  );
}

export default App;