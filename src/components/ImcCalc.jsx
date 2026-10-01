import { useState } from 'react'
import Button from './Button'
import './ImcCalc.css'

const validateValue = (value, field, unit) => {
  const text = value.trim()
  if (!text) return `Informe ${field}.`
  if (!/^\d+(?:[.,]\d+)?$/.test(text)) {
    return `Informe ${field} com um número positivo em ${unit}.`
  }
  const number = Number(text.replace(',', '.'))
  if (!Number.isFinite(number) || number <= 0) {
    return `Informe ${field} maior que zero em ${unit}.`
  }
  return ''
}

const ImcCalc = ({ calcImc }) => {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [errors, setErrors] = useState({})
  const [calculationError, setCalculationError] = useState('')

  const clearForm = () => {
    setHeight('')
    setWeight('')
    setErrors({})
    setCalculationError('')
  }

  const handleChange = (field, value) => {
    if (field === 'height') setHeight(value)
    else setWeight(value)
    setErrors((previous) => ({ ...previous, [field]: '' }))
    setCalculationError('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = {
      height: validateValue(height, 'a altura', 'metros'),
      weight: validateValue(weight, 'o peso', 'quilogramas'),
    }
    setErrors(nextErrors)
    setCalculationError('')
    if (nextErrors.height || nextErrors.weight) return

    setCalculationError(
      calcImc(
        Number(height.trim().replace(',', '.')),
        Number(weight.trim().replace(',', '.')),
      ),
    )
  }

  return (
    <section id="calc-container" aria-labelledby="calc-title">
      <header className="calc-heading">
        <h1 id="calc-title">Calculadora de IMC</h1>
        <p>Informe sua altura e seu peso.</p>
      </header>
      <form id="imc-form" onSubmit={handleSubmit} noValidate>
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura <span>(m)</span></label>
            <input
              type="text"
              inputMode="decimal"
              name="height"
              id="height"
              placeholder="Exemplo: 1,75"
              value={height}
              onChange={(event) => handleChange('height', event.target.value)}
              aria-invalid={Boolean(errors.height)}
              aria-describedby={errors.height ? 'height-error' : undefined}
            />
            {errors.height && (
              <p id="height-error" className="field-error" role="alert">{errors.height}</p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="weight">Peso <span>(kg)</span></label>
            <input
              type="text"
              inputMode="decimal"
              name="weight"
              id="weight"
              placeholder="Exemplo: 70,5"
              value={weight}
              onChange={(event) => handleChange('weight', event.target.value)}
              aria-invalid={Boolean(errors.weight)}
              aria-describedby={errors.weight ? 'weight-error' : undefined}
            />
            {errors.weight && (
              <p id="weight-error" className="field-error" role="alert">{errors.weight}</p>
            )}
          </div>
        </div>
        {calculationError && (
          <p className="field-error" role="alert">{calculationError}</p>
        )}
        <div className="action-control">
          <Button id="calc-btn" text="Calcular" type="submit" />
          <Button id="clear-btn" text="Limpar" action={clearForm} />
        </div>
      </form>
    </section>
  )
}

export default ImcCalc
