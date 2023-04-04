import "./App.css";
import data from "../src/json/data";
import { List } from "./components/List";
import moment from "moment";
import "moment/locale/es";
import { useEffect, useState } from "react";

const esCumpleHoy = (persona) => {
  const fechaCumple = moment(persona.fecha, "D [de] MMMM").locale("es");
  const fechaActual = moment();
  return (
    fechaCumple.date() === fechaActual.date() &&
    fechaCumple.month() === fechaActual.month()
  );
};

function App() {
  const [personasCumplenHoy, setPersonasCumplenHoy] = useState([]);

  useEffect(() => {
    const personas = data.filter((persona) => esCumpleHoy(persona));
    setPersonasCumplenHoy(personas);
  }, []);
  
  return (
    <main>
      <section className="container">
        <h3>{personasCumplenHoy.length} Cumpleaños hoy</h3>
        <List people={personasCumplenHoy} />
        <button>Enviar al bot</button>
      </section>
    </main>
  );
}

export default App;
