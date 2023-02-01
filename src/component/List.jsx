
const List = (props) => {
    const { lista, buscar } = props
    return (
        <>
            <h1>Lista</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Correo</th>
                    </tr>
                </thead>
                <tbody>

                    {
                    lista.map((colab,index)=>{
                        let nombreMin = colab.nombre.toLowerCase()
                        if(buscar === "" || nombreMin.includes(buscar)){
                        return (
                                <tr key={index}>
                                    <td>{colab.id}</td>
                                    <td>{colab.nombre}</td>
                                    <td>{colab.correo}</td>
                                </tr>
                        )}else{
                            return ""
                        }
                    })}
                </tbody>
            </table>
        </>
    )
}

export default List