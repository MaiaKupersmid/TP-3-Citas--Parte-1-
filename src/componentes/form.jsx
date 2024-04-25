import Input from "./input";
import Button from "./button";

function Form(props) {
    return(
        <>
            <form>
                <Input
                    text= "Nombre Mascota"
                    type= "text"
                    name= "mascota"
                    class= "u-full-width"
                    placeholder="Nombre Mascota"
                />
                <Input
                    text= "Nombre Dueño"
                    type= "text"
                    name= "propietario"
                    class= "u-full-width"
                    placeholder="Nombre dueño de la mascota"
                />
                <Input
                    text= "Fecha"
                    type= "date"
                    name= "fecha"
                    class= "u-full-width"
                />
                <Input
                    text= "hora"
                    type= "time"
                    name= "hora"
                    class= "u-full-width"
                />                   
                <Input
                    text= "Sintomas"
                    name= "sintomas"
                    class= "u-full-width"
                />                                
                   <Button 
                     type="submit" 
                     class="u-full-width button-primary"
                     text= "Agregar Cita"
                   />
                </form>
        </>
    )
}

export default Form;