import React, { useState } from 'react';
import uniqid from 'uniqid';
import axios from 'axios';


function AgregarUsuario(){

    //Hooks
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');


    function agregarUsuario(){


        var usuario = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            idusuario: uniqid()

        }

        //console.log(usuario);
        axios.post('/api/usuario/agregarusuario', usuario)
        .then(res=>{
            console.log(usuario);
            alert(res.data);
        }).then(error=>{
            console.log(error);
        });

    }






    return(
        <div className='container'>
            <div className='row'>
                <h2 className='col-md-12 display-4'>Crear un nuevo usuario</h2>
            </div>


            <div className='row'>
                <div className='col-md-6 offset-3'>
                    <div className='mb-3'>
                        <label htmlFor='nombre' className='form-label'>Nombre</label>
                        <input type='text' className='form-control' value={nombre} onChange={(e)=> {setNombre(e.target.value)}}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input type='text' className='form-control' value={email} onChange={(e)=> {setEmail(e.target.value)}}></input>
                    </div>



                    <div className='mb-3'>
                        <label htmlFor='telefono' className='form-label'>Teléfono</label>
                        <input type='text' className='form-control' value={telefono} onChange={(e)=> {setTelefono(e.target.value)}}></input>
                    </div>

                    <button onClick={agregarUsuario} className='btn btn-success'>Guardar usuario</button>
                </div>
            </div>
            
        </div>
    )
}

export default AgregarUsuario;