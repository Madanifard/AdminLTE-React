function Checkbox(props: any) {
    return (
        <>
            <input type="checkbox" id={props.id} />
            <label htmlFor={props.id}>
                {props.label}
            </label>
        </>
    )
}

export default Checkbox