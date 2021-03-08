import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import Contenido from "./Contenido";


class App extends React.Component{
  constructor(){
    super();

  };

    render(){
      return(
            <div className="container">
              <Contenido />
            </div>
        );
    }
}


export default App;
