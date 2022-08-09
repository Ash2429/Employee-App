import { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { useCreateEmployeeMutation, useEmployeeByIdQuery ,useUpdateEmployeeMutation} from "../services/api";
import InputField from "../components/InputField";
import TextField from "../components/TextField";
import InputSelect from "../components/InputSelect";
import Button from "../components/Button";
import CommonHead from "../components/CommonHead";

import "../styles/Styles.css";
const Emp_page = () => {
  const dept={"HR":"28ce2419-6e70-4531-b009-ca4d5283618b" ,
              "Tech 1":"a5f44b64-8f7a-4e2a-9a36-e7ce5321fe05",
              "Tech 2":"248c7033-f771-4286-a64b-517fb4ef5017", 
              "Tech 3":"564c464f-fb7c-45dc-93a6-838592c08dd0"}
  const navigate = useNavigate();
  const {id} = useParams();
  const [createEmployee,result]= useCreateEmployeeMutation()
  const {data: EmpObj,  error, isLoading} = useEmployeeByIdQuery(id)
const [body, setBody] = useState({
    name: "",
    DateOfJoining: "",
    departmentId:"",
    role: "",
    status: "",
    experience: "",
    password:"password",
    address: {
      addressline1 : "",
      addressline2 : "",
      city : "",
      state : "",
      zipcode : ""
    },
  });
  useEffect(()=>{
    if(id){
      console.log(EmpObj?.data)
    setBody({
    name: EmpObj?.data?.name,
    DateOfJoining: EmpObj?.data?.dateOfJoining,
    departmentId:EmpObj?.data?.departmentId,
    role: EmpObj?.data?.role,
    status: EmpObj?.data?.status,
    experience:EmpObj?.data?.experience,
    password:EmpObj?.data?.password,
    address: {
      addressline1 : EmpObj?.data?.address.addressLine1,
      addressline2 : EmpObj?.data?.address.addressLine2,
      city : EmpObj?.data?.address.city,
      state : EmpObj?.data?.address.state,
      zipcode : EmpObj?.data?.address.zipcode
  }
});
console.log(body)}
  }
,[EmpObj])
const[updateEmployee,res]=useUpdateEmployeeMutation(id,body)
  const goToNextPage = () => {
    navigate("/list");
  };

  const onChangeValue = (key, value) => {
    if (key =="addressline1"||key =="addressline2"||key =="city"||key =="state"||key =="zipcode") {
      setBody({
        ...body,
        address:{
          ...body.address,
          [key]: value,
        }
      })
      console.log(key, value);
    } else {
      setBody({
      ...body,
      [key]: value,
    });

  }
  };

  return (
    <div>
      <title>Key Value Employee APP</title>
      <div class="main1">
        <CommonHead/>
        <div id ="body">
        <section id="title">
          <h1>Create Employee</h1>
        </section>
        <section id="formBody">
           <div id= "inputfield">
              <div class="element">
                <InputField
                  label="Employee Name"
                  type="text"
                  id="Name"
                  value={body?.name}
                  placeholder="Employee Name"
                  onChange={(value) => onChangeValue("name", value)}
                ></InputField>
              </div>

              <div class="element">
                <div style={{ display: "flex", flexDirection: "column" ,marginRight: "40px"}}>
                <label>Department</label>
                <select onChange={(event)=>onChangeValue("departmentId",event.target.value)}>
                    <option >Select Department</option>
                    <option value={dept["HR"]}>Hr</option>
                    <option value={dept["Tech 1"]}>Tech 1</option>
                    <option value={dept["Tech 2"]}>Tech 2</option>
                    <option value={dept["Tech 3"]}>Tech 3</option>
                </select>
                </div>
              </div>
                  {/* onChange={(value) => onChangeValue("departmentId", value)}
                ></InputField> */}

              <div class="element">
                <InputField
                  label="Joining Date"
                  type="text"
                  id="datet"
                  placeholder="Joining Date"
                  value={body?.DateOfJoining}
                  onChange={(value) => onChangeValue("DateOfJoining", value)}
                ></InputField>
              </div>
              <div class="element">
                <div style={{ display: "flex", flexDirection: "column" ,marginRight: "40px"}}>
                <label>Role</label>
                <select onChange={(event)=>onChangeValue("role",event.target.value)}>
                    <option >Select Role</option>
                    <option value={"Developer"}>Developer</option>
                    <option value={"Hr"}>Hr</option>
                    <option value={"DevOps"}>DevOps</option>
                    <option value={"QA"}>QA</option>
                    <option value={"Admin"}>Admin</option>
                </select>
                </div>
              </div>
              <div class="element">
              <div style={{ display: "flex", flexDirection: "column" ,marginRight: "40px"}}>
                <label>Status</label>
                <select onChange={(event)=>onChangeValue("status",event.target.value)}>
                    <option >Select Status</option>
                    <option value={"Active"}>Active</option>
                    <option value={"Probation"}>Probation</option>
                    <option value={"Inactive"}>Inactive</option>
                </select>
                </div>
              </div>
              <div class="element">
                <InputField
                  label="Experience"
                  type="text"
                  id="num"
                  value={body?.experience}
                  placeholder="Experience"
                  onChange={(value) => onChangeValue("experience", Number(value))}
                ></InputField>
              </div>
              <div class="element">
                <InputField
                  label="Address Line 1"
                  type="text"
                  id="addressLine1"
                  placeholder="Address Line 1"
                  value={body?.address.addressline1}
                  onChange={(value) => onChangeValue("addressline1", value)}
                ></InputField>
              </div>
              <div class="element">
                <InputField
                  label="Address Line 2"
                  type="text"
                  id="addressLine2"
                  value={body?.address.addressline2}
                  placeholder="Address Line 2"
                  onChange={(value) => onChangeValue("addressline2", value)}
                ></InputField>
              </div>
              <div class="element">
                <InputField
                  label="City"
                  type="text"
                  id="city"
                  placeholder="City"
                  value={body?.address.city}
                  onChange={(value) => onChangeValue("city", value)}
                ></InputField>
              </div>
              <div class="element">
                <InputField
                  label="State"
                  type="text"
                  id="state"
                  placeholder="State"
                  value={body?.address.state}
                  onChange={(value) => onChangeValue("state", value)}
                ></InputField>
              </div>
              <div class="element">
                <InputField
                  label="Zipcode"
                  type="text"
                  id="zipcode"
                  placeholder="Zipcode"
                  value={body?.address.zipcode}
                  onChange={(value) => onChangeValue("zipcode", value)}
                ></InputField>
              </div>

              <div class="element">
                <label>Employee ID Proof</label>
                <div id="proof">
                          <label  style={{paddingLeft: "7px",paddingTop:"5px",fontSize: "13px"}} >Proof</label>
                          <input type="file"  id="idproof"  placeholder="Browse" style={{opacity:"0",display: "none"}}/>
                          <label for="idproof" style={{height: "calc((70%))",width: "calc((40%))",borderRadius: "3px",marginRight:"3px",marginTop:"8px"}} id="lab1" >Browse</label>
                </div>
              </div>
              </div>
              <div class="rowl">
                {id? <Button
                    id="sub"
                    label="Submit"
                    handleClick={()=>{updateEmployee({id,body});goToNextPage()}}
                    onmouseout="def(event)"
                    onmousedown="myFunction(event)"
                  ></Button>: <Button
                  id="sub"
                  label="Create"
                  handleClick={()=>{createEmployee(body);goToNextPage()}}
                  onmouseout="def(event)"
                  onmousedown="myFunction(event)"
                  body={body}
                ></Button>}
                  <Button
                  id= "cancel"
                    label="Cancel"
                    handleClick={()=>goToNextPage()}
                  ></Button>
              </div>
        </section>
        </div>
      </div>
    </div>
  );
};
export default Emp_page;
