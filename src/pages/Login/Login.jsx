import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import { useLoginMutation } from "./api";
import { useState } from "react";
import { setStorage} from "./../../services/utils.js"
const LogInPage=()=>{
    const navigate = useNavigate();
    const goToNextPage =()=>{navigate('/list');};
    const [body , setBody] =useState({ name : "" , password: "" })
    const onChangeValue = (key, value) => {
        setBody({
            ...body,
            [key]:value
        })
        console.log(body)
    }
    const [login,result]= useLoginMutation();
    
    const onLogin = async () => {
        const response = await login(body);
        if(response.data) {
            setStorage("idToken", response.data.data.idToken);
            goToNextPage();
        }
    }
    return(
        <div style={{display:"flex",width:"calc(100%)",height:"100%"}}>
            <img src={require("./../../styles/login.png")} style={{padding:"60px",paddingLeft:"80px",maxHeight:"48%",maxWidth:"48%"}}></img>
            <div style={{display:"flex",padding:"18%",paddingLeft:"15%"}}>  
            <div>
                <img src={require("./../../styles/kvlogo.png")} style={{paddingBottom:"20px"}}></img>
            <InputField 
                  label="Username"
                  type="text"
                  placeholder="Login"
                  onChange={(value) => onChangeValue("name", value)}/>
                  <br/>
                  <br/>
            <InputField 
                  type="text"
                  id="pass"
                  placeholder="Password"
                  
                  onChange={(value) => onChangeValue("password", value)}/>

            <Button id="login" style={{marginTop:"40px"}} label="Login" handleClick={()=>onLogin()}/>
            </div>
            </div>
        </div>
        
    );
}
export default LogInPage