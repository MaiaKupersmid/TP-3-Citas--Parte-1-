import Listado from "./componentes/listado/listado.jsx";
import Form from "./componentes/form/form.jsx";
import { useState } from "react";

function App() {
  const[citas, setCitas] = useState([]);
  return (
    <>
    <div className="App">
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div class="container">
          <div class="row">
            <div class="one-half column">
              <h2>Crear mi Cita</h2>
              <Form setCitas={setCitas} citas={citas}
              />
        </div>
        <div class="one-half column">
          <h2>Administra tus citas</h2>
          <Listado citas={citas} setCitas={setCitas}
          />
        </div>
      </div>
    </div>
  </div>
  <script src="/static/js/bundle.js"></script>
  <script src="/static/js/vendors~main.chunk.js"></script>
  <script src="/static/js/main.chunk.js"></script>
  </div>
  </>
  );
}

export default App;
