import './InputsLogin.css'

const InputsLogin = () => {
    return (
/*         <section className='mySection'>
        <label for="inputEmail" className='labelEmail'>Email</label>
        <input type="email" className="inputLogin" id="inputEmail" aria-label="Email" placeholder="usuario@email.com" />
        <label for="inputSenha" className='labelSenha'>Senha</label>
        <input type="password" className="inputLogin" id="inputSenha" aria-label="Senha" placeholder="******" />
        </section> */

        <section className='mySection'>
      <div className='form-group'>
        <label htmlFor="inputEmail" className='labelEmail'>Email</label>
        <input type="email" className="inputLogin" id="inputEmail" aria-label="Email" placeholder="usuario@email.com" />
      </div>
      <div className='form-group'>
        <label htmlFor="inputSenha" className='labelSenha'>Senha</label>
        <input type="password" className="inputLogin" id="inputSenha" aria-label="Senha" placeholder="******" />
      </div>
    </section>
    )
}

export default InputsLogin