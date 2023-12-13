import React from "react";
import { Link } from "react-router-dom";

export const Signup =() =>{
    return(
        <div className="signup template d-flex justify-content-center aling-items-center vh-100 bg-dark">
            <div className="form-container p-5 rounded bg-white">
                <form>
                    <h3 className="text-center">Registrarse</h3>
                    <div className="mb-2">
                        <label htmlFor="fname">Primer Apellido</label>
                        <input type="text"placeholder="Introduce tu Primer Apellido" className="form-control"/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="lname">Segundo Apellido</label>
                        <input type="text"placeholder="Introduce tu Segundo Apellido" className="form-control"/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="Email">Correo Electronico</label>
                        <input type="email"placeholder="Introduce tu Correo" className="form-control"/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password"placeholder="Introduce una contraseña" className="form-control"/>
                    </div>
                    <div className="d-grid mt-2">
                        <button className="btn btn-primary">Registarse</button>
                    </div>
                    <p className="text-end mt-2">
                        Se registró <Link to="/" className="ms-2">Iniciar Sesion </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
export default Signup