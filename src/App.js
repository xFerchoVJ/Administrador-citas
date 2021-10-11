import React, { useState, useEffect } from "react";
import Cita from "./components/Cita";
import Formulario from "./components/Formulario";

const App = () => {

  //Citas localstorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  //Arreglo de citas
  const [citas, setCitas] = useState(citasIniciales ? citasIniciales : []);

  //useEffect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas, citasIniciales]);

  //Funcion que tome las citas actuales y agregue la nueva
  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus citas";

  //Funcion para eliminar cita por el id
  const handleEliminar = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };
  return (
    <>
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} handleEliminar={handleEliminar} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
