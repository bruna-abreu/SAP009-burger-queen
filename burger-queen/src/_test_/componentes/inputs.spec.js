import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
//import userEvent from '@testing-library/user-event';
import InputsLogin from '../../Components/Login/InputsLogin/InputsLogin'

it ('Deve chamar a função whenChanged ao digitar no campo de email', () => {
  const whenChanged = jest.fn()
  const valueEmail = 'valor digitado no email'
  render (
    <InputsLogin value= {valueEmail} whenChanged={whenChanged} />
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
    <InputsLogin value= {valuePassword} whenChanged={whenChanged} />
  )
  const inputPassword = screen.getByDisplayValue('valor digitado na senha')
  expect (inputPassword).toBeInTheDocument()

  const digitandoSenha = '123456'
  fireEvent.change(inputPassword, {target: {value: digitandoSenha}})
  expect (whenChanged).toHaveBeenCalledTimes(1)
  expect (whenChanged).toHaveBeenCalledWith(digitandoSenha)
})

/* it('Deve renderizar o campo corretamente com um valor e disparar uma ação ao modificar', () => {
  // Cria um mock para a propriedade onChange
  const whenChanged = jest.fn();
  // Renderiza o componente InputsLogin com valor inicial e o mock da função onChange
  render(
    <InputsLogin value='valor digitado' whenChanged={whenChanged} />
  );
  // Obtém o elemento de tela que contém o valor 'valor digitado' no campo de input
  const input = screen.getByDisplayValue('valor digitado');
  // Verifica se o elemento está presente no documento
  expect(input).toBeInTheDocument();

  // Define o valor a ser digitado 
  const digitando = 'novo valor';
  // Simula a digitação do valor no campo de input
  userEvent.type(input, digitando);
  // Verifica se a função onChange foi chamada o número correto de vezes
  expect(whenChanged).toHaveBeenCalledTimes(digitando.length);
  // Verifica se a função onChange foi chamada com o valor correto
  expect(whenChanged).toHaveBeenCalledWith(digitando);
}); */
