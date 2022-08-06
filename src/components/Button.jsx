const Button = (props)=>{
    const{id,label,handleClick}=props
    return(
        <button id={id} onClick={()=> handleClick()}>{label}</button>
    )
}
export default Button