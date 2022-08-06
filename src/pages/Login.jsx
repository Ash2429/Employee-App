import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
const LogInPage=()=>{
    const navigate = useNavigate();
    const goToNextPage =()=>{navigate('/list');};
    return(
        <div>
            <Button label="Button" handleClick={goToNextPage}/>
        </div>
        
    );
}
export default LogInPage