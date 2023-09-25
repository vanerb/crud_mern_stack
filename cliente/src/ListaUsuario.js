import React, { useEffect, useState } from 'react';
import UsuarioIndividual from './UsuarioIndividual';
import axios from 'axios';

function ListaUsuario(){

    const[datausuarios, setdatausuario] = useState([]);

    useEffect(() => {
      
        axios.get('/api/usuario/obtenerusuarios').then(res=>{
            console.log(res.data);
            setdatausuario(res.data);
        }).catch(err=>{
            console.log(err);
        })


    }, [])


    //MAPEAR

    const listausuarios = datausuarios.map(usuario => {
        return(
            <div>
                <UsuarioIndividual usuario={usuario}></UsuarioIndividual>
            </div>
        )
    });
    
   

    return(
        <div>
            <h2>Lista de usuarios</h2>

            {listausuarios}
            
        </div>
    )
}

export default ListaUsuario;