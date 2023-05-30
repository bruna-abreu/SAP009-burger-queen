import './InputsLogin.css'

const InputsLogin = (props) => {
    return (
    <section className='mySection'>
      <div className='form-group'>
        <label htmlFor= {props.id}>{props.label}</label>
        <input 
        value= {props.value} 
        onChange= {props.onChange}
        type= {props.type} 
        className= {props.className}
        id= {props.id}
        label= {props.label}
        placeholder= {props.placeholder}
        />
      </div>
      {/* <div className='form-group'>
        <label htmlFor="inputSenha" className='labelSenha'>Senha</label>
        <input value='' type="password" className="inputLogin" id="inputSenha" aria-label="Senha" placeholder="******" />
      </div> */}
    </section>
    )
}

export default InputsLogin