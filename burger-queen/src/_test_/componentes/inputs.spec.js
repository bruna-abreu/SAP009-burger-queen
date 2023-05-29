import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputsLogin from '../../Components/Login/InputsLogin/InputsLogin'

it('Deve renderizar o campo corretamente com um valor e disparar uma ação ao modificar', () => {
  // Cria um mock para a propriedade onChange
  const onChange = jest.fn();
  // Renderiza o componente InputsLogin com valor inicial e o mock da função onChange
  render(
    <InputsLogin valor='valor digitado' onChange={onChange} />
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
  expect(onChange).toHaveBeenCalledTimes(digitando.length);
  // Verifica se a função onChange foi chamada com o valor correto
  expect(onChange).toHaveBeenCalledWith(digitando);
});
