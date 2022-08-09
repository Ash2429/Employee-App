import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useGetEmployeeQuery } from "../services/api";
import CommonHead from "../components/CommonHead";
import Table from "../components/Table";
import "../styles/listpage.css"

const EmployeeList=()=>{
    const navigate = useNavigate();
    const goToNextPage =()=>{navigate('/create');};
    const {data: EmpObj,  error, isLoading} = useGetEmployeeQuery()
   
    return(
        <div>
            <CommonHead/>
            <br></br>
            <div class ="main">
                <section id="title">
                <h1>Employee List</h1>
                <div style={{display:"flex", width:"260px",alignItems:"center"}}>
                <Button id="create" handleClick={goToNextPage}/>
                <label style={{  backgroundColor: "#EAF9FF" , borderRadius: "0px 20px 20px 0px",height : "45px" ,width:"290px", verticalAlign : "middle" , marginBottom : "0px" , paddingTop: "14px", paddingLeft: "5px"}}>Create New Employee</label>
                </div>
                </section>
                <div id="table" style={{marginTop:"20px"}}>
                    <Table obj={EmpObj}/>
                </div>
            </div>
        </div>
    );
}
export default EmployeeList