import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";




const Contenido = () => {
  const [segundos, setsegundos] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
      setsegundos(segundos => segundos + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);


		return(
			<div className="container">
        <h1> Contador </h1>
        <div className="contenido">
        <i className="far fa-clock"></i>
        <p className="informacion">
        {segundos}
        </p>
        </div>
      </div>      
			);

	}

export default Contenido;
