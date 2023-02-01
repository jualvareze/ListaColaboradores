import './App.css';
import List from './component/List';
import { BaseColaboradores } from './bd';
import { useState } from 'react';

function App() {
  const [lista, setLista] = useState(BaseColaboradores)
  const [nombreColab, setNombreColab] = useState("")
  const [correoColab, setCorreoColab] = useState("")
  const [buscarState, setBuscarState] = useState("")

  const agregarColaborador = (e) =>{
    e.preventDefault()
    if(nombreColab === "")
    return(alert("Campo usuario vacio"))
    if(correoColab === "")
    return(alert("Campo Correo vacio"))
    setLista([...lista, {id:lista.length+1,nombre:nombreColab,correo:correoColab}])
  }


  return (
    <div className="App">
      <header className='bg bg-dark text-light p-4 d-flex justify-content-between'>
        <h1>Lista de colaboradores</h1>
        <div>
        <input type='text' className='form-control align-middle' value={buscarState} onChange={(input)=>setBuscarState(input.target.value)}/>
        </div>
        </header>
        <div className='container'>
        <form className='m-3' onSubmit={agregarColaborador}>
          <label htmlFor='name' className='form-label'>Nombre del colaborador</label>
          <input type='text' id='name' className='form-control' onChange={(input) => setNombreColab(input.target.value)}></input>
          <label htmlFor='email' className='form-label'>Correo del colaborador</label>
          <input type='email' id='email' className='form-control' onChange={(input) => setCorreoColab(input.target.value)}></input>
          <button type='submit' className='btn btn-primary m-3'>Agregar Colaborador</button>
          
        </form>
        <List lista={lista} buscar={buscarState}></List>
        </div>
    </div>
  );
}

export default App;
