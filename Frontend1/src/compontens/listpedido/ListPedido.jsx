import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PedidoService from "../../services/PedidoService";
import Headercomp from "../Header/Headercomp";
import AddPedidoComponent from "../addpedido/AddPedidoComponet";
import Register from "../../Screen/ViewRegistrar/Register";
import "./StyleListpedido.css";
import Modal from "react-modal";
import Footercomp from "../Footer/Footercomp";

export const ListPedido = () => {
  const [pedidos, setPedidos] = useState([]);
  const [modalAddPedidoIsOpen, setModalAddPedidoIsOpen] = useState(false);
  const [modalRegisterIsOpen, setModalRegisterIsOpen] = useState(false);
  const handleClick = () => {
    window.location.href = "http://localhost:3000/Acceder"; 
  };

  useEffect(() => {
    listarPedido();
  }, []);

  const listarPedido = () => {
    PedidoService.getAllPedido()
      .then((response) => {
        setPedidos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const location = useLocation();

  return (
    <> 
   
      <Headercomp />
      <div className={"ContendorSecretario"}>
        <div className={"Contenedor_textSecretario"}></div>
      </div>
      <div className={"contenedortablaSecretario"}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>N° GUÍA</th>
              <th>PRODUCTO</th>
              <th>DESTINARIO</th>
              <th>MODALIDAD</th>
              <th>COSTO</th>
              <th>FECHA DE ENVIO </th>
              <th>FECHA DE ENTREGA </th>
              <th>TIEMPO</th>
              <th>REMITENTE</th>
              <th>ESTADO</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido) => (
              <tr key={pedido.idPedido}>
                <td>{pedido.idPedido}</td>
                <td>{pedido.guia}</td>
                <td>{pedido.nombreProducto}</td>
                <td>{pedido.destinario}</td>
                <td>{pedido.modalidad}</td>
                <td>{pedido.valor}</td>
                <td>{pedido.fechaEnvio}</td>
                <td>{pedido.fechaEntrega}</td>
                <td>{pedido.tiempoEstimado} días </td>
                <td>{pedido.remitente}</td>

                <td>
                  {" "}
                  {pedido.codigo_estado
                    ? ` ${pedido.codigo_estado.descripcion}`
                    : "Sin estado"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {location.pathname === "/Repartidor" && (
        <>
          <div className="buttons-1">
            <button
              className="buttons"
              onClick={() => setModalAddPedidoIsOpen(true)}
            >
              Agregar pedido
            </button>
            <div className="modal">
              {" "}
              <Modal
                className={"ModalEstruc"}
                isOpen={modalAddPedidoIsOpen}
                onRequestClose={() => setModalAddPedidoIsOpen(false)}
              >
                <AddPedidoComponent />
              </Modal>{" "}
            </div>
            <button onClick={handleClick} className="buttons" type="button">
              Salir
            </button>{" "}
          </div>
        </>
      )}

      {location.pathname === "/Secretario" && (
        <>
          <div className="buttons-1">
            <button  className="buttons" onClick={() => setModalAddPedidoIsOpen(true)}>
              Agregar pedido
            </button>
            <div className="modal">
              {" "}
              <Modal
                className={"ModalEstruc"}
                isOpen={modalAddPedidoIsOpen}
                onRequestClose={() => setModalAddPedidoIsOpen(false)}
              >
                <AddPedidoComponent />
              </Modal>{" "}
            </div>

            <button className="buttons" onClick={() => setModalRegisterIsOpen(true)}>
              Registrar
            </button>
            <div className="modal_register">
             
              <Modal
                className={"ModalEstrucR"}
                isOpen={modalRegisterIsOpen}
                onRequestClose={() => setModalRegisterIsOpen(false)}
              >
                <Register />
              </Modal>
            </div>
            <button onClick={handleClick} className="buttons" type="button">
              Salir
            </button>
          </div>
          <Footercomp/>
        </>
      )}
    </>
  );
};
