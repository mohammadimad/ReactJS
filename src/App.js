import React, { Component } from 'react';
import Welcome from "./copmonents/welcome";
import Hello from "./copmonents/hello";
import Lists from "./copmonents/lists";
import Conditions from "./copmonents/conditions";
class App extends Component {
  render() {
    return (
      <div className="App">
        Welcome from App.
          <Welcome name="Mohammad" lastName="Abdelfattah">Desription</Welcome>
          <Hello name="Mohammad"/>
          <Lists />
          <Conditions />
      </div>
      
    );
   }
 }
export default App;