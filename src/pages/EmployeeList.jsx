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
                </section>
                <Button label="View All Employees"/>
                <Button label="Create new employees" handleClick={goToNextPage}/>
                <div id="table">
                    <Table obj={EmpObj}/>
                </div>
            </div>
        </div>
    );
}
export default EmployeeList