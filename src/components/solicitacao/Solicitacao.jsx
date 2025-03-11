import NavBar from "../navbar/navbar/NavBar"
import styles from "./Solicitacao.module.scss";
import Home from "../../assets/Dashboard/home.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Lixeira from "../../assets/Solicitacao/lixeira.png"
import Motivo from "../../assets/Solicitacao/motivo.png"
import Deletar from "../../assets/Solicitacao/deletar.png"
function Solicitacao() {
  return (
    <div className={styles.layoutSolicitacao}>
      <NavBar />
      <div className={styles.containerPrincipalSolicitacao}>
        <header className={styles.headerSolicitacao}>
          <img src={Home} alt="vetor da casinha" />
          <img src={Seta} alt="vetor da setinha" />
          <p>Reembolsos</p>
          <img src={Seta} alt="vetor da setinha" />
          <p>Solicitação de Reembolso</p>
        </header>

        <main className={styles.mainSolicitacao}>
          <form className={styles.formSolicitacao}>
            <div className={styles.grupo1}>
              <div className={styles.inputNome}>
                <label htmlFor="">Nome Completo</label>
                <input type="text" />
              </div>

              <div className={styles.inputEmpresa}>
                <label htmlFor="">Empresa</label>
                <input type="text" />
              </div>

              <div className={styles.inputPrestacao}>
                <label htmlFor="">Nº Prest. Contas</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.inputMotivo}>
                <label htmlFor="">Descrição / Motivo do Reembolso</label>
                <textarea name="" id="">
                  {" "}
                </textarea>
              </div>
            </div>

            <div className={styles.barraVertical}></div>

            <div className={styles.grupo2}>
              <div className={styles.inputData}>
                <label htmlFor="">Data</label>
                <input type="date" name="" id="" />
              </div>

              <div className={styles.despesas}>
                <label htmlFor=""> Tipo de Despesa</label>

                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value=""> Alimentação </option>
                  <option value=""> Combustível</option>
                  <option value=""> Condução</option>
                  <option value=""> Estacionamento</option>
                  <option value=""> Viagem Admin.</option>
                  <option value=""> Viagem Operacional</option>
                  <option value=""> Eventos de representação</option>
                </select>
              </div>

              <div className={styles.centroDeCusto}>
                <label htmlFor="">Centro de Custo</label>
                <select name="" id="">
                  <option value=""> Selecionar</option>
                  <option value="">
                    1100109002 - FIN CONTROLES INTERNOS MTZ
                  </option>
                  <option value="">
                    1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ
                  </option>
                  <option value="">11001101012 - FIN CONTABILIDADE MTZ</option>
                </select>
              </div>

              <div className={styles.ordem}>
                <label htmlFor=""> Ord. Int.</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.divisoes}>
                <label htmlFor="">Div.</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.pep}>
                <label htmlFor="">PEP</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.moeda}>
                <label htmlFor="">Moeda</label>
                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value="">BRL</option>
                  <option value="">ARS</option>
                  <option value="">USD</option>
                </select>
              </div>

              <div className={styles.distancia}>
                <label htmlFor="">Dist / Km</label>
                <input type="text" />
              </div>

              <div className={styles.valorKm}>
                <label htmlFor="">Valor / Km</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.valorFaturado}>
                <label htmlFor="">Val. Faturado</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.despesa}>
                <label htmlFor="">Despesa</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.botoes}>
                <button className={styles.botaoSalvar}> + Salvar</button>

                <button className={styles.botaoDeletar}>
                    <img className={styles.buttonDeletar} src={Deletar} alt="Botão de deletar" />
                </button>
              </div>
            </div>
          </form>

          {/* table é a tag principal que vai definir a tabela */}
          {/* thred é a tag que agrupa o cabeçalho */}
          {/* tr é a linha da tabela */}
          {/* th é o título da tabela, um para cada título. Ex: Nome - idade - cor - fruta */}
          {/* tbody é a tag que agrupa o corpo da tabela */}
          {/* td é a tag que representa uma célula */}

          <table>
            
            <thead>
              <tr>
                <th></th>
                <th>Colaborador(a)</th>
                <th>Empresa</th>
                <th>Nº Prest.</th>
                <th>Data</th>
                <th>Motivo</th>
                <th>Tipo de despesa</th>
                <th>Ctr. Custo</th>
                <th>Ord. Int.</th>
                <th>Div.</th>
                <th>PEP</th>
                <th>Moeda</th>
                <th>Dist. Km</th>
                <th>Val. Km</th>
                <th>Val. Faturado</th>
                <th>Despesa</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td> <img className={styles.imgLixeira} src={Lixeira} alt="ícone da lixeira" /></td>
                <td> Vitor Carvalho...</td>
                <td> WSS001</td>
                <td> 329456</td>
                <td> 08/01/2025</td>
                <td> <img className={styles.imgMotivo} src={Motivo} alt="" /></td>
                <td> Desp. de viagem a...</td>
                <td> 1100110002 - FIN...</td>
                <td>0003</td>
                <td>002</td>
                <td>001</td>
                <td>BRL</td>
                <td>434Km</td>
                <td>0.65</td>
                <td>242.10</td>
                <td>40.05</td>
              </tr>

              <tr>
                <td> <img className={styles.imgLixeira} src={Lixeira} alt="ícone da lixeira" /></td>
                <td>    Vanessa Port...</td>
                <td> WSS002</td>
                <td> 987789</td>
                <td> 01/01/2025</td>
                <td> <img className={styles.imgMotivo} src={Motivo} alt="" /></td>
                <td> Desp. de viagem a</td>
                <td> 1100110102 - FIN C...</td>
                <td>0002</td>
                <td>005</td>
                <td>001</td>
                <td>ARS</td>
                <td>289Km</td>
                <td>0.37</td>
                <td>106.93</td>
                <td>0.00</td>
              </tr>

              <tr>
                <td> <img className={styles.imgLixeira} src={Lixeira} alt="ícone da lixeira" /></td>
                <td> Washington Kl...</td>
                <td> WSS003</td>
                <td> 546791</td>
                <td> 03/01/2025</td>
                <td> <img className={styles.imgMotivo} src={Motivo} alt="" /></td>
                <td> Eventos de aprese...</td>
                <td> 1100109002 - FIN...</td>
                <td>0001</td>
                <td>005</td>
                <td>001</td>
                <td>USD</td>
                <td>197Km</td>
                <td>0.75</td>
                <td>109.75</td>
                <td>29.97</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </div>


    
  );
}
export default Solicitacao;