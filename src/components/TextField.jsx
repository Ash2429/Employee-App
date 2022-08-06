const TextField=(
    props)=>{
        const {text,id,fr,style} =props;
        return(
        <label id={id} for={fr} style={style}>{text}</label>
        )
}
export default TextField