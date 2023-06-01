import './Input.css'

const Input = (props) => {
  const whenTyped = (evento) => {
    props.whenChanged(evento.target.value)
  }
    return (
    <section className={props.sectionClassName}>
      <div className={props.formClassName}>
        <label htmlFor= {props.id}>{props.label}</label>
        <input 
        value= {props.value} 
        onChange= {whenTyped}
        type= {props.type} 
        className= {props.className}
        id= {props.id}
        label= {props.label}
        placeholder= {props.placeholder}
        />
      </div>
    </section>
    )
}

export default Input