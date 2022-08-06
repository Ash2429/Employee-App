import TextField from "../components/TextField"
import Button from "../components/Button"
import { useState } from "react"
import { increment , decrement } from "../store/slices/Counterslice"
import {useSelector , useDispatch} from 'react-redux'

export function  Counter(){
    const use  = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch() 

return(
    <div>
    <Button label="Increase"  handleClick = {()=>dispatch(increment())}/>
    <br/>
    <Button label="Decrease" handleClick = {()=>dispatch(decrement())} />
    <br/>
    <TextField text={use}/>
    </div>
)
}

export default Counter