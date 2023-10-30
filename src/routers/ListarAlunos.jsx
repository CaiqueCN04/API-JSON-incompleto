import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { FaEdit, FaTrash} from 'react-icons/fa';

function ListarAlunos(){
    const [alunos, setAlunos] = useState([]);

    //promise assincrona

    useEffect(()=>{
        fetch()
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setAlunos
        })
    })
    return(
        <>
        <h1>Listar Alunos</h1>
        <Link to="/incluir">INSERIR ALUNOS</Link>
        <table>
            <thead>
            <tr>
                <th>Nome:</th>
                <th>Idade:</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {alunos.map((alu)=(
                    <tr key={alu.id}>
                       <td>{alu.nome}</td>
                       <td>{alu.idade}</td>                  
                    <td>
                        <Link to={`/editar/${alu.id}`}>
                            <FaEdit/>
                        </Link>
                        <button onClick={handleDelete.bind(this, alu.id)}>
                            <FaTrash/>
                        </button>
                    </td>
                    </tr>
                ))}
            </tbody>
            
        </table>
        </>
    )
}
export default ListarAlunos()