import logo from '../../../Assets/logo.svg'
import './Logo.css'

const LogoImg = () => {
    return (
      <section className='logoSection'>
        <img src={logo} className='logo' alt="logo" />
      </section> 
    )
}

export default LogoImg