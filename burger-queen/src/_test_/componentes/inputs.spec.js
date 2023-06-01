import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
//import userEvent from '@testing-library/user-event';
import Input from '../../Components/Input/Input.jsx'

it ('Deve chamar a função whenChanged ao digitar no campo de email', () => {
  const whenChanged = jest.fn()
  const valueEmail = 'valor digitado no email'
  render (
    <Input value= {valueEmail} whenChanged={whenChanged} />
  )
  const inputEmail = screen.getByDisplayValue('valor digitado no email')
  expect (inputEmail).toBeInTheDocument()

  const digitandoEmail = 'teste@teste.com'
  fireEvent.change(inputEmail, {target: {value: digitandoEmail}})
  expect (whenChanged).toHaveBeenCalledTimes(1)
  expect (whenChanged).toHaveBeenCalledWith(digitandoEmail)
})

it ('Deve chamar a função whenChanged ao digitar no campo de senha', () => {
  const whenChanged = jest.fn()
  const valuePassword = 'valor digitado na senha'
  render (
    <Input value= {valuePassword} whenChanged={whenChanged} />
  )
  const inputPassword = screen.getByDisplayValue('valor digitado na senha')
  expect (inputPassword).toBeInTheDocument()

  const digitandoSenha = '123456'
  fireEvent.change(inputPassword, {target: {value: digitandoSenha}})
  expect (whenChanged).toHaveBeenCalledTimes(1)
  expect (whenChanged).toHaveBeenCalledWith(digitandoSenha)
})
