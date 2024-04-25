function Input(props) {
    return(
        <>
            <label> {props.text}</label><input type={props.type} name={props.name} class={props.class} placeholder={props.placeholder} value=""/>
        </>
    )
}

export default Input;