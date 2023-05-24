import './LoginButton.css'

const LoginButton = (props) => {
    return (
        <section className='loginBtn'>
           <button onClick={props.onClick} className="loginButton" aria-label="Botão de Login">LOGIN</button>  
        </section>
       
    )
}

export default LoginButton