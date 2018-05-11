import React, { Component } from 'react';
import './App.css';
import Counter from "./Counter";
import Banner from './Banner';
import EmployeeForm from "./EmployeeForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Awesome Redux Counter</h1>
        <Counter />
          <div className="mt-5 mb-5" />
        <Banner />
          <div className="container mt-3">
              <div className="row justify-content-center">
                  <div className="col col-6">
                        <EmployeeForm />
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
