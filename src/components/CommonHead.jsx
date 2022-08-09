import Button from "./Button"
import { removeStorage } from "../services/utils"
import { useNavigate } from "react-router-dom"

const CommonHead=()=>{
const navigate = useNavigate();
const goToNextPage =()=>{navigate('/create');};
const goToLogin =()=>{navigate(`/`)}
const logout=()=>{
                removeStorage("idToken");
                goToLogin();
}
return(
<div>
  <div></div>
  <aside>
    <div>
    <img id="logo" src={require("../styles/kvlogo.png")}></img>
    </div>
          <div class="tile">
            <nav>
              <div class="navelement">
                <img src={require("../styles/List.png")} id="formpic"></img>
                <a href="http://localhost:3000/list" id="tiletext" style={{ color : "white"  , textDecoration:"none"}}>Employee List</a>
              </div>
            </nav>
            <div style={{display:"flex" , justifyContent:"space-around" ,marginTop:"50px"} }>
            <Button id="login" label="Logout" style={{color:"white", width:"calc(70%)"}} handleClick={logout}/>
            </div>
          </div>
</aside>
<header>
</header>
</div>

)}
export default CommonHead