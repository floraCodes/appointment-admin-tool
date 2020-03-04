import React from "react";
import PropTypes from "prop-types";

const Appointment = ({ appointment, deleteAppointment }) => {
  return (
    <div className="cita">
      <p>
        Mascota: <span>{appointment.pet}</span>
      </p>
      <p>
        Owner: <span>{appointment.owner}</span>
      </p>
      <p>
        Date: <span>{appointment.date}</span>
      </p>
      <p>
        Time: <span>{appointment.time}</span>
      </p>
      <p>
        Symptoms: <span>{appointment.symptoms}</span>
      </p>
      <button
        className="button delete u-full-width"
        onClick={() => deleteAppointment(appointment.id)}
      >
        Delete &times;
      </button>
    </div>
  );
};

Appointment.propTypes = {
  deleteAppointment: PropTypes.func.isRequired,
  appointment: PropTypes.object.isRequired
};

export default Appointment;
