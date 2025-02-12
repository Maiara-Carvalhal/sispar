import Home from "../../assets/Dashboard/home.png"
import Seta from "../../assets/Dashboard/vector.png"
import styles from "./reembolsos.module.scss"
function Reembolsos(){
    return(
        <div>
        <header>
            <img src={Home} alt="Casinha da header" />
            <img src={Seta} alt="Setinha da header" />
            <h2>Reembolsos</h2>
        </header>

        <main>
            <h1>Sistema de <Reembolso></Reembolso></h1>
            <p></p>
            <section>
                
                <div></div>
                <div></div>
                <div></div>
                
            </section>
        </main>
        </div>
    )
}
export default Reembolsos