import batatinha from '../../Assets/batatinha.svg'
import './ImgHome.css'

const ImgHome = () => {
    return (
      <section className='batatinhaSection'>
        <img src={batatinha} className='batatinha' alt="imagem de batata frita" />
      </section> 
    )
}

export default ImgHome