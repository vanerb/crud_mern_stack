import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function UsuarioIndividual({ usuario }) {
    const navegar = useNavigate();

    function borrarusuario(idusuario) {
        axios.post('/api/usuario/borrarusuario', { idusuario: idusuario }).then(res => {
            navegar(0);
        }).catch(err => {
            console.log(err);
        })
    }


    return (
        <div className='container'>


            <div class="modal fade" id="borrarmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Confirmación</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ¿Estás seguro de que quieres eliminar el siguiente elemento {usuario.idusuario} correspondiente a {usuario.nombre}?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button className='btn btn-danger mt-2' onClick={() => { borrarusuario(usuario.idusuario) }}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>



            <div className='row'>


                <div className='col-md-6 offset-3'>
                    <ul className='list-group'>
                        <li className='list-group-item'>{usuario.idusuario}</li>
                        <li className='list-group-item'>{usuario.nombre}</li>
                        <li className='list-group-item'>{usuario.email}</li>
                        <li className='list-group-item'>{usuario.telefono}</li>
                    </ul>

                    <Link to={`/editarusuario/${usuario.idusuario}`}><li className='btn btn-success mt-2'>Editar</li></Link>

                    &nbsp;
                    <button type="button" class="btn btn-danger mt-2" data-bs-toggle="modal" data-bs-target="#borrarmodal">
                    Eliminar
                    </button>

                    

                    <hr className='mt-4'></hr>
                </div>


            </div>
        </div>
    )
}

export default UsuarioIndividual;