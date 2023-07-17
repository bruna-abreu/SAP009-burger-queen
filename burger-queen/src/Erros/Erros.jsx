export default function Erro({ message }) {
    switch (message) {
        case 'Cannot find user':
            return 'Usuário não encontrado';
        case 'Incorrect password':
            return 'Senha incorreta';
        case 'Email format is invalid':
            return 'Formato de email inválido';
        case  'Email and password are required':
            return 'E-mail e senha são obrigatórios'
        default:
            return 'Ocorreu algum erro. Confira seus dados.';
    }
}

console.log(Erro)
