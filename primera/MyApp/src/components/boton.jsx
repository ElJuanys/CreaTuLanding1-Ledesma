export const Boton = (props) =>{
    return <>
        <button style={{background:props.color}} onClick={props.onClick}>
            {props.texto}
        </button>
    </>
}