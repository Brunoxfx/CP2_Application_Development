import { useState } from 'react'
import ImcCalc from './components/ImcCalc'
import ImcTable from './components/ImcTable'
import { data } from './data/data'
import './App.css'

function App() {
  const [imc, setImc] = useState('')
  const [info, setInfo] = useState('')
  const [infoClass, setInfoClass] = useState('')

  const calcImc = (height, weight) => {
    const result = weight / (height * height)
    const imcResult = Number(result.toFixed(1))
    if (!Number.isFinite(result) || imcResult <= 0) {
      return 'Não foi possível calcular o IMC. Confira a altura e o peso informados.'
    }
    const classification = data.find(
      (item) => imcResult >= item.min && imcResult <= item.max,
    )
    setImc(imcResult.toFixed(1).replace('.', ','))
    setInfo(classification?.info ?? 'IMC fora das faixas da tabela da aula')
    setInfoClass(classification?.infoclass ?? '')
    return ''
  }

  const resetCalc = () => {
    setImc('')
    setInfo('')
    setInfoClass('')
  }

  return (
    <main className="container">
      {!imc ? (
        <ImcCalc calcImc={calcImc} />
      ) : (
        <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc} />
      )}
    </main>
  )
}

export default App
