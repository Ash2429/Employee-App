import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useGetEmployeeQuery ,useGetEmployeeByStatusQuery} from "./api";
import CommonHead from "../../components/CommonHead";
import Table from "../../components/Table";
import "../../styles/Styles.css"
import "../../styles/listpage.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EmployeeList=()=>{
    const navigate = useNavigate();
    const goToNextPage =()=>{navigate('/create');};
    const {data: Emp,  error, isLoading} = useGetEmployeeQuery()
    const[EmpObj,setObj]= useState(Emp?.data)
    const {status} = useParams();
    const {data: Emp2,  err, isLoad} = useGetEmployeeByStatusQuery(status)
    const onChangeValue = (value) =>{
      const goToNextPage =()=>{navigate(`/list/${value}`);};
      goToNextPage()
    }
    useEffect(()=>{
        if(Emp && !status){
        setObj(Emp?.data)
        console.log("Enter 1")
    }
    },[Emp,status])
    
    console.log(EmpObj)
    useEffect(()=>{
        if(Emp2 && status){
        setObj(Emp2?.data[0])
    }
    },[Emp2])
    console.log(EmpObj)
    console.log(status)
    return(
        <div>
            <CommonHead/>
            <br></br>
            <div class ="main">
                <section id="title">
                <h1>Employee List</h1>
                <div style={{display:"flex", width:"260px",alignItems:"center"}}>
                <label>Filter By</label>
                <select onChange={(event)=>onChangeValue(event.target.value)} style={{width:"70px",height:"30px",borderRadius:"6px"}}>
                    <option value=" ">Status</option>
                    <option value={"Active"}>Active</option>
                    <option value={"Probation"}>Probation</option>
                    <option value={"Inactive"}>Inactive</option>
                </select>
                </div>
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