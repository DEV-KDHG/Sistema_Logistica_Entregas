import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./StyleAcceder.css";
import Swal from 'sweetalert2'
import Headercomp from "../../compontens/Header/Headercomp";


function Acceder() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    window.location.href = "http://localhost:3000"; 
  };
  async function login(event) {
    event.preventDefault();

    // Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡El formato del correo electrónico no es válido!',
      
      });
      return; 
    }

    try {
      const response = await axios.post("http://localhost:9094/api/v1/employee/login", {
        email: email,
        password: password,
      });

      const data = response.data;

      if (data.message === "Login Success") {
        if (email === "khernandezg6@unicartagena.edu.co" && password === "12345678") {
          navigate("/Secretario");
        } else {
          navigate("/Repartidor");
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '¡El correo o la contraseña estan mal!',
         
        });
     
      
    } 
  }
  catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal. Por favor, inténtalo de nuevo más tarde.',
   
      });
    }
  }

  return (
    <>
      <Headercomp/>
      <div className="ContenedorAcceder">
        <div className="Contenedor_formulario">
          <h2>Iniciar Sesión</h2>

          <div className="Formulario_Acceder">
            <form>
              <div className="form-group">
                <label className="Labels">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Ingresa tu correo"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <label className="Labels">Contraseña</label>
              <input
                type="password"
                id="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <button type="submit" onClick={login}>Iniciar Sesión</button>
              <button
                  onClick={handleClick}
                  className="buttons"
                  type="button" 
                >
                  Salir
                </button>  
            </form>
          </div>
        </div>
      </div>
  
    </>
  );
}

export default Acceder;
