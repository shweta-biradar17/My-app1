import React, { Component } from 'react';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login'
import Signup from './components/Signup';

export async function getUsers() {
    const userResponse = await fetch('http://localhost:4300/users')
    const users = await userResponse.json();
    return users;

}

export async function createUser(data) {
    console.log(data);
    const response = await fetch('http://localhost:4300/createUser', {
    
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content-type': "application/json"
            }
        });
            const result = await response.json();
            return result;
}

export async function deleteUser(id) {
  
    const response = await fetch('http://localhost:4300/deleteUser'+"?id=" + id,{
    
            method: 'DELETE',
            headers: {
                'content-type': "application/json"
            }
        });
            const result = await response.json();
            return result;
}

export async function updateUser(data, id) {
    console.log(data);
    const response = await fetch('http://localhost:4300/updateUser'+"?id=" + id, {
    
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'content-type': "application/json"
            }
        });
            const result = await response.json();
            return result;
}

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