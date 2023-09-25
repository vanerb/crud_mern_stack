import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditarUsuario() {


    const params = useParams()

    const[nombre, setNombre]=useState('')
    const[email, setEmail]=useState('')
    const[telefono, setTelefono]=useState('')

    //Para volver atrás al index
    const navegar = useNavigate();
    

    useEffect(() => {
       axios.post('/api/usuario/obtenerdatausuario', {idusuario: params.idusuario}).then(res => {
           console.log(res.data[0]) 
           const datausuario = res.data[0]
           setNombre(datausuario.nombre)
           setEmail(datausuario.email)
           setTelefono(datausuario.telefono)    
       })
    }, [])


    function editarUsuario() {
        //Nuevo objeto para acrualizar
        const actualizarusuario = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            idusuario: params.idusuario
        }


        //Peticion axios

         //console.log(usuario);
         axios.post('/api/usuario/actualizausuario', actualizarusuario)
         .then(res=>{
             navegar("/");
         }).then(error=>{
             console.log(error);
         });
    }




    return (
        <div>
            <h2>Editar un usuario</h2>
            <div className='row'>
                <div className='col-md-6 offset-3'>
                    <div className='mb-3'>
                        <label htmlFor='nombre' className='form-label'>Nombre</label>
                        <input type='text' className='form-control' value={nombre} onChange={(e) => { setNombre(e.target.value) }}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input type='text' className='form-control' value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                    </div>



                    <div className='mb-3'>
                        <label htmlFor='telefono' className='form-label'>Teléfono</label>
                        <input type='text' className='form-control' value={telefono} onChange={(e) => { setTelefono(e.target.value) }}></input>
                    </div>

                    <button onClick={editarUsuario} className='btn btn-success'>Guardar usuario</button>
                </div>
            </div>
        </div>
    )
}

export default EditarUsuario;