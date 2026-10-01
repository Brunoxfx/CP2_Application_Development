import './Button.css'

const Button = ({ id, text, action, type = 'button' }) => (
  <button id={id} type={type} onClick={action}>{text}</button>
)

export default Button
