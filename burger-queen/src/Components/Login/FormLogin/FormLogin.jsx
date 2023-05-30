import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Inputs from "../InputsLogin/InputsLogin";
import LoginButton from "../LoginButton/LoginButton"
import LogoImg from "../Logo/Logo.jsx"
import login from "../../../API/login"
import Erro from "../../../Erros/Erros";
import './FormLogin.css'

function FormLogin () {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [erro, setErro] = useState(null)

    const signIn = async (e) => {
        //previne o comprtamento padrão de um evento
        e.preventDefault()
        setErro('');
        //console.log('funcionou')
        //return await login(email, password)

        try {
            const loginUser = await login(email, password)
            console.log(loginUser)

            if (loginUser.user.role === 'Atendimento') {
                navigate('/Nav')
            }
            if (loginUser.user.role === 'Cozinha') {
                navigate('/cozinha')
            }  
            if (loginUser.user.role === 'admin') {
                navigate('/HomePage')
            }              
        } catch (erro) {
            setErro(Erro(erro.message));
        }
    } 

    return (
        <>
        <LogoImg/>

        <Inputs 
        value= {email}
        whenChanged= {(value) => setEmail(value)}
        type= 'email'
        id= 'inputEmail'
        label= 'Email'
        placeholder= 'usuario@email.com'
        className= 'inputLogin'
        />

        <Inputs 
        value= {password}
        whenChanged= {(value) => setPassword(value)}
        type= 'password'
        id= 'inputSenha'
        label= 'Senha'
        placeholder= '******'
        className= 'inputLogin'
        />

        <div className="msgErroLogin">
            {erro && <Erro message={erro} />}
        </div>

        <LoginButton onClick={(e) => signIn(e)}/>
        </>
    )
}

export default FormLogin