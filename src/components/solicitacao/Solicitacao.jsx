import NavBar from "../navbar/navbar/NavBar.jsx"
import styles from "./Solicitacao.module.scss"
import Home from "../../assets/Header/botão - Home.png"
import Seta from "../../assets/Dashboard/Vector.png"
function Solicitacao(){
    return(
        <div className={styles.layoutSolicitacao}>
        <NavBar />

        <div className={styles.containerPrincipalSolicitacao}>

        <header className={styles.headerSolicitacao}>
            <img src={Home} alt="Vetor casinha" />
            <img src={Seta} alt="Vetor da seta" />
            <p>Reembolsos</p>
            <img src={Seta} alt="Vetor da setinha" />
            <p>Solicitação de Reembolsos</p>
        </header>

        <main className={styles.mainSolicitacao}>

        </main>
        </div>
        
        </div>
    )
}
export default Solicitacao