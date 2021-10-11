import React from "react";
import PropTypes from 'prop-types';

const Cita = ({ cita, handleEliminar }) => {
  const { mascota, propietario, fecha, hora, sintomas } = cita;
  return (
    <div className="cita">
      <p>
        Mascota: <span>{mascota}</span>
      </p>
      <p>
        Propietario: <span>{propietario}</span>
      </p>
      <p>
        Fecha: <span>{fecha}</span>
      </p>
      <p>
        Hora: <span>{hora}</span>
      </p>
      <p>
        Síntomas: <span>{sintomas}</span>
      </p>
      <button
        onClick={() => handleEliminar(cita.id)}
        className="button eliminar u-full-width"
      >
        Eliminar cita
      </button>
    </div>
  );
};


Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  handleEliminar: PropTypes.func.isRequired
}
export default Cita;
