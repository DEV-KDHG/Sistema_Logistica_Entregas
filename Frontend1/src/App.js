import { BrowserRouter,Routes,Route } from "react-router-dom";
import Secretario from "./Screen/ViewSecretario/Secretario";
import Register from "./Screen/ViewRegistrar/Register";
import Acceder from "./Screen/ViewAcceder/Acceder";
import Rastrea from "./Screen/vistaOne/Rastrea";
import Home from "./Screen/Home/Home";
import AddPedidoComponet from "./compontens/addpedido/AddPedidoComponet";
import Repartidor from "./Screen/ViewRepartidor/Repartidor";


function App() {
  return (
    <div>
     

      <BrowserRouter>
            <Routes>
            <Route path="/Rastrea" element={<Rastrea/>} />
              <Route path="/Secretario" element= { <Secretario/>} />
              <Route path="/register" element= { <Register/>} />
              <Route path="/Acceder" element= { <Acceder/>} />
              <Route path="" element={<Home/>} />
              <Route path="/add_pedido" element={<AddPedidoComponet/>} />
              
              <Route path="/Repartidor" element={<Repartidor/>} />
             
              <Route path="/edite_pedido/:idPedido" element={<AddPedidoComponet/>} />
             
            </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;