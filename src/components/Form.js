import React, { useState } from "react";
import uuid from "uuid/v4";
import PropTypes from "prop-types";

const Form = ({ addAppointment }) => {
  //Create Appointment state
  const [appointment, setAppointment] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
    symptoms: ""
  });
  //Create a Form Validation State
  const [error, setError] = useState(false);
  const { pet, owner, date, time, symptoms } = appointment;
  const handleSubmit = e => {
    e.preventDefault();
    //Validate
    if (
      !pet.trim() ||
      !owner.trim() ||
      !date.trim() ||
      !time.trim() ||
      !symptoms.trim()
    ) {
      setError(true);
      return;
    }
    //Eliminar the error message
    setError(false);

    //ID Assignment (with uuid)
    appointment.id = uuid();

    //Create Appointment
    addAppointment(appointment);

    //Reset Form
    setAppointment({
      pet: "",
      owner: "",
      date: "",
      time: "",
      symptoms: ""
    });
  };

  const handleChange = e => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <h2>Create Date</h2>
      {error ? (
        <p className="error-alert">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={handleSubmit}>
        <label>Pet Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet Name"
          onChange={handleChange}
          value={pet}
        />
        <label>Pet Owner</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner Name"
          onChange={handleChange}
          value={owner}
        />
        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />
        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={handleChange}
          value={time}
        />
        <label>Symptoms</label>
        <textarea
          type="text"
          name="symptoms"
          className="u-full-width"
          onChange={handleChange}
          value={symptoms}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Add Appointment
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
  addAppointment: PropTypes.func.isRequired
};

export default Form;
