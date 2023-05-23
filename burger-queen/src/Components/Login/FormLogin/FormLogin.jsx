import { useState } from "react";
import Inputs from "../InputsLogin/InputsLogin";
import LoginButton from "../LoginButton/LoginButton"
import LogoImg from "../Logo/Logo.jsx"

function FormLogin () {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    return (
        <>
        <LogoImg/>
        <Inputs 
        value= {email}
        type= 'email'
        id= 'inputEmail'
        label= 'Email'
        placeholder= 'usuario@email.com'
        className= 'inputLogin'

        />
        <Inputs 
        value= {password}
        type= 'password'
        id= 'inputSenha'
        label= 'Senha'
        placeholder= '******'
        className= 'inputLogin'

        />
        <LoginButton />
        </>
    )
}

export default FormLogin