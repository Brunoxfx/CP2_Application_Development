import Button from './Button'
import './ImcTable.css'

const ImcTable = ({ data, imc, info, infoClass, resetCalc }) => (
  <section id="result-container" aria-labelledby="result-title">
    <h1 id="result-title">Resultado do IMC</h1>
    <div className="result-summary" role="status">
      <p id="imc-number">Seu IMC: <span className={infoClass}>{imc}</span></p>
      <p id="imc-info">Situação atual: <strong className={infoClass}>{info}</strong></p>
    </div>
    <table id="imc-table">
      <caption>Confira as classificações:</caption>
      <thead>
        <tr>
          <th scope="col">IMC</th>
          <th scope="col">Classificação</th>
          <th scope="col">Obesidade</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.info} className={item.info === info ? 'selected-row' : undefined}>
            <td>{item.classification}</td>
            <td>{item.info}</td>
            <td>{item.obesity}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <Button id="back-btn" text="Voltar" action={resetCalc} />
  </section>
)

export default ImcTable
