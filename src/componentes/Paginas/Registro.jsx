import React from "react";
import './Registro.css'
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Registro =() =>{
    return(
        <div className="Login template d-flex justify-content-center aling-items-center vh-100 bg-dark">
            <div className="form-container p-5 rounded bg-white">
                <form>
                    <h3 className="text-center">Iniciar Sesion</h3>
                    <div className="mb-2">
                        <label htmlFor="email">Correo Electronico</label>
                        <input type="email"placeholder="Introduce tu correo" className="form-control"/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password"placeholder="Introduce tu Contraseña" className="form-control"/>
                    </div>
                    <div className="mb-2">
                        <input type="checkbox" className="custom-control custom-checkbox" id='check'/>
                        <label htmlFor="check" className="custom-input-label ms-2">
                            Recordar
                        </label>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary">Iniciar sesion</button>
                    </div>
                    <p className="text-end mt-2">
                        Olvidaste tu <a href="">Contraseña?</a><Link to="/signup" className="ms-2">Registrarse</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
export default Registro