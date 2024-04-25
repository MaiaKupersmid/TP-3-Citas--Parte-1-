import Card from "./componentes/card";
import Form from "./componentes/form";

function App() {
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
              <Form
              />
        </div>
        <div class="one-half column">
          <h2>Administra tus citas</h2>
          <Card
            mascota= "Nina"
            dueño= "Martin"
            fecha= "2021-08-05" 
            hora= "08:20"
            sintomas= "Le duele la pierna"
          />
          <Card
            mascota= "Sifon"
            dueño= "Flecha"
            fecha= "2023-08-05" 
            hora= "09:24"
            sintomas= "Duerme mucho"
          />
          <Card
            mascota= "Floki"
            dueño= "Ari"
            fecha= "2023-08-05" 
            hora= "16:15"
            sintomas= "No está comiendo"
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
