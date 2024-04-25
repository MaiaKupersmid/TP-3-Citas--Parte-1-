function Button(props) {
    return(
        <>
            <button type= {props.type} class={props.class}>{props.text} </button>
        </>
    )
}

export default Button;