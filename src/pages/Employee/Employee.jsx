
import Button from "../../components/Button";
import { useParams } from "react-router-dom";
import { useEmployeeByIdQuery } from "./api";
import CommonHead from "../../components/CommonHead";
import { useNavigate } from "react-router-dom";
import "../../styles/details.css"

const Employee=()=>{
  const dept={"HR":"28ce2419-6e70-4531-b009-ca4d5283618b" ,
              "Tech 1":"a5f44b64-8f7a-4e2a-9a36-e7ce5321fe05",
              "Tech 2":"248c7033-f771-4286-a64b-517fb4ef5017", 
              "Tech 3":"564c464f-fb7c-45dc-93a6-838592c08dd0"}
  const {id} = useParams();
  const navigate = useNavigate();
  const goToNextPage =()=>{navigate(`/edit/${id}`)}
  console.log(id)
  const {data: EmpObj,  error, isLoading} = useEmployeeByIdQuery(id)
  console.log(EmpObj?.data?.address)
    return(

        <div>
            <CommonHead/>
            <br></br>
            <div class ="main">
                <section id="title">
                <h1>Employee Details</h1>
                <div style={{display:"flex", width:"260px",alignItems:"center"}}>
                <Button id="editdetails" handleClick={goToNextPage}/>
                <label style={{ height : "35px" ,width:"290px", verticalAlign : "middle", marginBottom : "0px" , paddingTop: "9px", paddingLeft: "30px",fontSize:"18px"}}>Edit Details</label>
                </div>
                </section>
            <section id="dataBody">
           <div id= "field">
              <div class="dataelement">
                <label class="fieldhead">Employee Name</label>
                <label class="fielddata">{EmpObj?.data?.name}</label>
              </div>

              <div class="dataelement">
              <label class="fieldhead">Employee ID</label>
                <label class="fielddata">{EmpObj?.data?.id}</label>
              </div>

              <div class="dataelement">
              <label class="fieldhead">Joining Date</label>
                <label class="fielddata">{EmpObj?.data?.dateOfJoining}</label>
              </div>
              <div class="dataelement">
              <label class="fieldhead">Role</label>
                <label class="fielddata">{EmpObj?.data?.role}</label>
              </div>
              <div class="dataelement">
                <label class="fieldhead">Status</label>
                <label class="fielddata">{EmpObj?.data?.status}</label>
              </div>
              <div class="dataelement">
              <label class="fieldhead">Experience</label>
                <label class="fielddata">{EmpObj?.data?.experience}</label>
              </div>
              <div class="dataelement">
              <label class="fieldhead">Address</label>
                <label class="fielddata">{EmpObj?.data?.address.addressLine1+" "+EmpObj?.data?.address.addressLine2+", "+EmpObj?.data?.address.city+", "+EmpObj?.data?.address.state+", "+EmpObj?.data?.address.zipcode}</label>
              </div>
              <div class="dataelement">
              <label class="fieldhead">Department</label>
                <label class="fielddata">{Object.keys(dept).find(key => dept[key] === EmpObj?.data?.departmentId)}</label>
              </div>
              <div class="dataelement">
              <label class="fieldhead">ID Proof</label>
                <label class="fielddata"><img src={require("../../styles/file.png")}/></label>
              </div>
              </div>
        </section>
            </div>
        </div>
        )
    }
export default Employee