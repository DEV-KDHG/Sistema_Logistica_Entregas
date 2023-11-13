
import "./StyleHome.css";
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

export const Home = () => {
  return (
    <div className={"ContainerHome"}>
      <header>
        <div className={"ContainerNavegaitor"}>
          <nav>
            <div className={"ContainerList"}>
              <ul>
                <li>
                  <a href="/Rastrea">RASTREA TU PEDIDO</a>
                </li>
               
                <li>
                  <a href="/Acceder">ACCEDER</a>
                </li>
              </ul>{" "}
            </div>
          </nav>
        </div>
      </header>
      <div className={"Image_background"}>
        <img src={'entregas.png'} alt="" />
      </div>

      <div className={"Con_Foteer_Black"}>
        <footer id={"footerBlack"}>
          <div className={"ImageBlack"}>
            <img src={'logofinal.png'} alt="Logo" />
          </div>
          <div className={"Container_Text"}>
            <h2>JRKR</h2>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Home;