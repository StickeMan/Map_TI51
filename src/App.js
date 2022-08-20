import React, { useState } from "react";
//Se importa la barra de busqueda.
import SearchBox from "./SearchBox";
//Se importa el mapa de Playa del Carmen.
import Maps from "./Maps";

function App() {
  const [selectPosition, setSelectPosition] = useState(null);

  console.log(selectPosition);
  return (
    <div
      style={{
        display: "block",
        flexDirection: "row",
        width: "600px",
        height: "600px"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}><h2>Trabel Time</h2></div>
      <div style={{ width: "50vw" }}>
        <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition} />
      </div>
      <div style={{ width: "50vw", height: "100%" }}>
        <Maps selectPosition={selectPosition} />
      </div>
      <p>Created by:</p><br />
      <p><i>Francisco Delgado Martínez</i></p><br />
      <p><i>José Enrique Méndez Márquez</i></p><br />
      <p><i>Josías Habacuc Castillo Colli</i></p><br />
      <p><i>Samara Raquel Cortés Muñoz</i></p><br />
      <p><i>Vanessa del Rosario Domínguez Arias</i></p>
    </div>

  );
}

export default App;