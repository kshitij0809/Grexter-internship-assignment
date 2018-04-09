import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Udemy from './components/subcomponents/AllTask';

class App extends Component {
  render() {
    return (
        <div>
          <div className="table-responsive">          
            <table className="table table-bordered table-dark">
              <thead>
                <tr>
                  <th >All Tasks</th>
                  <th >Tasks To Do</th>
                  <th >Progress</th>
                  <th >Commpleted</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Udemy/></td>
                  <td>Anna</td>
                  <td>Pitt</td>
                  <td>35</td>
                  
                </tr>
              </tbody>
            </table>
            </div>
          </div>        
    );
  }
}

export default App;
