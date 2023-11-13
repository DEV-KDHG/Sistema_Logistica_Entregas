import React, { useState } from "react";
import axios from "axios";
import "./StyleRegister.css";
import Headercomp from "../../compontens/Header/Headercomp";
import Footercomp from "../../compontens/Footer/Footercomp";
import Swal from 'sweetalert2';



function Register() {
  const [employeename, setEmployeename] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  async function save(event) {
    event.preventDefault();
    if (!employeename || !email || !password) {
      Swal.fire({
        icon: 'info',
        title: 'Al parecer...',
        text: '¡No has ingresado todos los campos!',
      });
      return;
    }

    // Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'El correo es inválido!',
      });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:9094/api/v1/employee/save",
        {
          employeename: employeename,
          email: email,
          password: password,
        }
      );

      if (response.data === "El correo ya está registrado") {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'El correo ya está registrado. Por favor, utilice otro.',
        });
      } else if (response.status === 200) {
        window.location.href = "/Secretario";
        Swal.fire({
          icon: 'success',
          title: 'Tu registro es exitoso',
        });
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Error!',
        });
      }
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <>
   
        <div className="ContainerLogin">
      <div className="Container_form">
        <h2>Regístrate</h2>
        <div className="Form_Login">
          <form>
            <label>Nombre</label>
            <input
              type="text"
              id="employeename"
              placeholder="Ingresa tu nombre"
              value={employeename}
              onChange={(event) => {
                setEmployeename(event.target.value);
              }}
            />

            <label>Email</label>
            <input
              type="email"
              id="email"
              placeholder="Ingresa tu correo electrónico"
              value={email}
              required
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />

            <label>Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            <button type="submit" onClick={save}>
              Registrar
            </button>
          </form>
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      </div>
    </div>
   
     
     
    </>
  );
}

export default Register;