function Myboton ({count, onClick}) {
    return (
        <button onClick={onClick}>
            Has dado click {count} veces
        </button>
    )

}

export default Myboton;