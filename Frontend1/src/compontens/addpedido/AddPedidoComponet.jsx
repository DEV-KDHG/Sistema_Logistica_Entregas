import React, { useEffect, useState } from "react";
import PedidoService from "../../services/PedidoService";
import { useNavigate, useParams, useLocation, useHref } from "react-router-dom";
import Swal from "sweetalert2";
import Headercomp from "../Header/Headercomp";
import Footercomp from "../Footer/Footercomp";
import "./StyleAddPedido.css";

const AddPedidoComponent = () => {

  const navigate = useNavigate();
  const { idPedido } = useParams();
  const { pathname } = useLocation();
  const [guia, setguia] = useState("");
  const [nombreProducto, setnombreProducto] = useState("");
  const [destinario, setdestinario] = useState("");
  const [modalidad, setModalidad] = useState("");
  const [valor, setValor] = useState("");
  const [tiempoEstimado, setTiempo] = useState("");
  const [fechaEnvio, setfechaEnvio] = useState("");
  const [remitente, setRemitente] = useState("");
  const [fechaEntrega, setfechaEntrega] = useState("");
  const [estado, setEstado] = useState({
    idEstado: 1,
    descripcion: "EN BODEGA",
  });
  const validateForm = () => {
    return (
      guia.trim() !== "" &&
      nombreProducto.trim() !== "" &&
      destinario.trim() !== "" &&
      modalidad.trim() !== "" &&
      valor.trim() !== "" &&
      tiempoEstimado.trim() !== "" &&
      fechaEnvio.trim() !== "" &&
      remitente.trim() !== "" &&
      fechaEntrega.trim() !== ""
    );
  };

  const rutaActual = () => {
    if (pathname.includes("/Repartidor")) {

        window.location.href = "http://localhost:3000/Repartidor"; 
    
    ;
    } else if (pathname.includes("/Secretario")) {
      window.location.href = "http://localhost:3000/Secretario";
    }
  };
  
  const saveOrUpdatePedido = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son requeridos",
      });
      return;
    }

    const pedido = {
      guia,
      nombreProducto,
      destinario,
      modalidad,
      valor,
      tiempoEstimado,
      fechaEnvio,
      remitente,
      fechaEntrega,
      estado,
    };

    if (idPedido) {
      PedidoService.UpdatePedido(idPedido, pedido)
        .then((response) => {
          console.log(response.data);
          navigate(rutaActual);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      PedidoService.createPedido(pedido)
        .then((response) => {
          console.log(response.data);
          Swal.fire({
            icon: "success",
            title: "Perfecto...",
            text: "Pedido  registrado!"
           });  {rutaActual()}
            
          
          
         
           
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Pedido no registrado!",
          });
        });
    }
  };
  const title = () => {
    if (idPedido) {
      return <h2 className="Text"> Actualizar Pedido</h2>;
    } else {
      return <h2 className="Text"> Crear un pedido</h2>;
    }
  };

  return (
    <>
 

      <div className="contenedor">
        <div>
          {title()}
          
        </div>
        <div className="container_Producto_form">
        <ul className="list_date">
        <li class="large-6 medium-6 small-12 columns padding">
           
              <p> N° Guia <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-123"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.873 11.297V4.142H1.699L0 5.379v1.137l1.64-1.18h.06v5.961h1.174Zm3.213-5.09v-.063c0-.618.44-1.169 1.196-1.169.676 0 1.174.44 1.174 1.106 0 .624-.42 1.101-.807 1.526L4.99 10.553v.744h4.78v-.99H6.643v-.069L8.41 8.252c.65-.724 1.237-1.332 1.237-2.27C9.646 4.849 8.723 4 7.308 4c-1.573 0-2.36 1.064-2.36 2.15v.057h1.138Zm6.559 1.883h.786c.823 0 1.374.481 1.379 1.179.01.707-.55 1.216-1.421 1.21-.77-.005-1.326-.419-1.379-.953h-1.095c.042 1.053.938 1.918 2.464 1.918 1.478 0 2.642-.839 2.62-2.144-.02-1.143-.922-1.651-1.551-1.714v-.063c.535-.09 1.347-.66 1.326-1.678-.026-1.053-.933-1.855-2.359-1.845-1.5.005-2.317.88-2.348 1.898h1.116c.032-.498.498-.944 1.206-.944.703 0 1.206.435 1.206 1.07.005.64-.504 1.106-1.2 1.106h-.75v.96Z" />
                            </svg></p>
              <input
                type="number" min={10000}
                placeholder="Digite el numero de guía"
                value={guia}
                onChange={(e) => setguia(e.target.value)}
                required
              />
            </li>
          
            <li class="large-6 medium-6 small-12 columns padding">
              <p>Producto  <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-box-seam"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                            </svg></p>
              <input
                type="text"
                placeholder="Digite el nombre del producto"
                value={nombreProducto}
                onChange={(e) => setnombreProducto(e.target.value)}
                required
              />
         
            </li>
        
            <li class="large-6 medium-6 small-12 columns padding">
            <p>Destinatario  <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-people"
                              viewBox="0 0 16 16"
                            >
                              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                            </svg></p>
              <input
                type="text"
                placeholder="Digite el nombre del destinatario"
                value={destinario}
                onChange={(e) => setdestinario(e.target.value)}
                required
              />
              
         
            </li>
            <li class="large-6 medium-6 small-12 columns padding">
            <p>Modalidad   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
  <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
</svg>
</p>

<select
                    value={modalidad}
                    onChange={(e) => setModalidad(e.target.value)}
                    required
                >  <option value=" ">Selecionar </option>
                    <option value="Contraentrega">Contraentrega</option>
                    <option value="Pagado">Pagado</option>
                </select>
         
            </li>
            <li class="large-6 medium-6 small-12 columns padding">
            <p>Valor <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-coin"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                            </svg></p>
              <input
             type="number" min={12000} step={1000} 
                placeholder="Digite el costo"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                required
              
              /> 
              </li>
             
         
             <li class="large-6 medium-6 small-12 columns padding">
            
             <p>Tiempo Estimado <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg> </p>
              <input
                type="number" min={1}
                placeholder="Digite el tiempo"
                value={tiempoEstimado}
                onChange={(e) => setTiempo(e.target.value)}
                required
              />
             </li>
             <li class="large-6 medium-6 small-12 columns padding">
             <p>Remitente  <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-people"
                              viewBox="0 0 16 16"
                            >
                              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                            </svg></p>
              <input
                type="text"
                placeholder="Digite el remitente"
                value={remitente}
                onChange={(e) => setRemitente(e.target.value)}
                required
              />
              
             </li>
             <li class="large-6 medium-6 small-12 columns padding">
             <p>Fecha de Envío <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg> </p>
              <input
                type="date"
                placeholder="Digite la fecha de envío"
                value={fechaEnvio}
                onChange={(e) => setfechaEnvio(e.target.value)}
                required
              />
              
             </li>
             <li class="large-6 medium-6 small-12 columns padding">
             <p>Fecha de Entrega  <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-calendar-check"
                              viewBox="0 0 16 16"
                            >
                              <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                            </svg> </p>
              <input
                type="date"
                placeholder="Digite la fecha de entrega"
                value={fechaEntrega}
                onChange={(e) => setfechaEntrega(e.target.value)}
                required
              />
              
            </li>
            <li class="large-6 medium-6 small-12 columns padding">
            
            <p> Estado   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
</svg></p> {estado.descripcion}
            </li>
             
           
              
          
            <div className="buttonContainer">
              <button
                className="buttons"
                onClick={(e) => saveOrUpdatePedido(e)}
              >
                Guardar
              </button>
            </div>
         </ul>
        </div>
      </div>

   
    </>
  );
};

export default AddPedidoComponent;