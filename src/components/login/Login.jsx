
import Logo from "../../assets/Tela Login/logo-ws.png"
import styles from "./Login.module.scss"
 
function Login (){
return(
        <>
        <main>
        
        <section className={styles.containerLogin}>
        </section>

        <section className={styles.containerForm}>
            <img src={Logo} alt="Logo da Wilson Sons" />
            
            <h1>Boas vindas ao Novo Portal SISPAR</h1>
            
            <p>Sistema de Emissão de Boleto e Parcelamento</p>

            <form action="">
                <input type="email" name="email" id="email" placeholder="Email" />

                <input type="password" name="senha" id="senha" placeholder="Senha" />

                <a href="Esqueci minha senha"></a>

                <div>
            <button className={styles.buttonEntrar}>Entrar</button>
            <button className={styles.buttonCriar}>Criar conta</button>
          </div>

            </form>   
        </section>
        </main>
        </>
    )
}
export default Login