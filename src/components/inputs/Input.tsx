
function Input(props: any) {
    return (
        <>
        <input type={props.type} className={props.class} id={props.id} placeholder={props.placeholder}></input>
        </>
    )
}

export default Input