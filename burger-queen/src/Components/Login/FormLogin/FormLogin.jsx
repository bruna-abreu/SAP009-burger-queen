import { useState } from "react";
import Inputs from "../InputsLogin/InputsLogin";
import LoginButton from "../LoginButton/LoginButton"
import LogoImg from "../Logo/Logo.jsx"
import login from "../../../API/login"

function FormLogin () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = async (e) => {
        //previne o comprtamento padrão de um evento
        e.preventDefault()
        console.log('funcionou')
        return await login(email, password)
    }

    return (
        <>
        <LogoImg/>
        <Inputs 
        value= {email}
        onChange= {(e) => setEmail(e.target.value)}
        type= 'email'
        id= 'inputEmail'
        label= 'Email'
        placeholder= 'usuario@email.com'
        className= 'inputLogin'

        />
        <Inputs 
        value= {password}
        onChange= {(e) => setPassword(e.target.value)}
        type= 'password'
        id= 'inputSenha'
        label= 'Senha'
        placeholder= '******'
        className= 'inputLogin'

        />
        <LoginButton onClick={(e) => signIn(e)}/>
        </>
    )
}

export default FormLogin