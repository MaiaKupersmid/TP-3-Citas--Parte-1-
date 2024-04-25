import Button from "./button";

function Card(props) {
    return(
        <>
        <div class="cita">
            <p>Mascota: <span>{props.mascota}</span></p>
            <p>Dueño: <span>{props.dueño}</span></p>
            <p>Fecha: <span>{props.fecha}</span></p>
            <p>Hora: <span>{props.hora}</span></p>
            <p>Sintomas: <span>{props.sintomas}</span></p>
            <Button 
              class="button elimnar u-full-width"
              text= "Eliminar x"
            />
          </div>
        </>
    )
}

export default Card;