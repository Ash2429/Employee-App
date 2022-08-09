const Button = (props)=>{
    const{id,label,handleClick,icon,color,style}=props
    return(
        <button id={id} style={style} onClick={()=> handleClick()}>
        {label && label}
        {icon && <i className="material-icons" style={{color:{color}}}>{icon}</i>}
        </button>
    )
}
export default Button