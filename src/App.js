import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Appointment from "./components/Appointment";

function App() {
  //Appointments on Local Storage
  let initialAppointments = JSON.parse(localStorage.getItem("appointments"));
  if (!initialAppointments) {
    initialAppointments = [];
  }

  //Array of appointments
  const [appointments, setAppointments] = useState(initialAppointments);

  //Use Effect to save Appointments on Local Storage
  useEffect(() => {
    if (initialAppointments) {
      localStorage.setItem("appointments", JSON.stringify(appointments));
    } else {
      localStorage.setItem("appointments", JSON.stringify([]));
    }
  }, [appointments, initialAppointments]);

  //Update appointments function
  const addAppointment = appointment => {
    setAppointments([...appointments, appointment]);
  };

  //Delete Appointment
  const deleteAppointment = id => {
    const updatedAppointments = appointments.filter(
      appointment => id !== appointment.id
    );
    setAppointments(updatedAppointments);
  };

  //Conditional Message
  const title = appointments.length
    ? "Your Appointments"
    : "No appointments to show";

  return (
    <div>
      <h1>Appointments Admin</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form addAppointment={addAppointment} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map(appointment => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
