import { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputField from "../components/InputField";
import TextField from "../components/TextField";
import InputSelect from "../components/InputSelect";
import Button from "../components/Button";
import CommonHead from "../components/CommonHead";

import "../styles/Styles.css";

const Emp_page = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    name: "",
    id: "",
    date: "",
    role: "",
    status: "",
    experience: "",
    address: {
      addressLine1 : "",
      addressLine2 : "",
      city : "",
      state : "",
      zipcode : ""
    },
  });

  const goToNextPage = () => {
    navigate("/list");
  };

  const onChangeValue = (key, value) => {
    if (key =="address"){

    }
    setFormState({
      ...formState,
      [key]: value,
    });
    console.log(formState);
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
                  placeholder="Employee Name"
                  onChange={(value) => onChangeValue("name", value)}
                ></InputField>
              </div>

              <div class="element">
                <InputField
                  label="Employee Id"
                  type="text"
                  id="idno"
                  placeholder="Employee ID"
                  onChange={(value) => onChangeValue("id", value)}
                ></InputField>
              </div>

              <div class="element">
                <InputField
                  label="Joining Date"
                  type="text"
                  id="datet"
                  placeholder="Joining Date"
                  onChange={(value) => onChangeValue("date", value)}
                ></InputField>
              </div>
              <div class="element">
                <InputSelect
                  label="Role"
                  onChange={(value) => onChangeValue("role", value)}
                  options={[
                    { key: "Dev", label: "Developer" },
                    { key: "QA", label: "QA" },
                    { key: "DevOps", label: "DevOps" },
                  ]}
                />
              </div>
              <div class="element">
                <InputSelect
                  label="Status"
                  onChange={(value) => onChangeValue("status", value)}
                  options={[
                    { key: "Intern", label: "Intern" },
                    { key: "Trainee", label: "Trainee" },
                    { key: "Employee", label: "Employee" },
                  ]}
                />
              </div>
              <div class="element">
                <InputField
                  label="Experience"
                  type="text"
                  id="num"
                  placeholder="Experience"
                  onChange={(value) => onChangeValue("experience", value)}
                ></InputField>
              </div>
              <div class="element">
                <InputField
                  label="Address Line 1"
                  type="text"
                  id="addressLine1"
                  placeholder="Address Line 1"
                  onChange={(value) => onChangeValue("address", value)}
                ></InputField>
              </div>
              <div class="element">
                <InputField
                  label="Address Line 2"
                  type="text"
                  id="addressLine2"
                  placeholder="Address Line 2"
                  onChange={(value) => onChangeValue("address", value)}
                ></InputField>
              </div>
              <div class="element">
                <InputField
                  label="City"
                  type="text"
                  id="city"
                  placeholder="City"
                  onChange={(value) => onChangeValue("address", value)}
                ></InputField>
              </div>
              <div class="element">
                <InputField
                  label="State"
                  type="text"
                  id="state"
                  placeholder="State"
                  onChange={(value) => onChangeValue("address", value)}
                ></InputField>
              </div>
              <div class="element">
                <InputField
                  label="Zipcode"
                  type="text"
                  id="zipcode"
                  placeholder="Zipcode"
                  onChange={(value) => onChangeValue("address", value)}
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
                  <Button
                    id="sub"
                    label="Submit"
                    onclick={formState}
                    onmouseout="def(event)"
                    onmousedown="myFunction(event)"
                  ></Button>
                  <Button
                  id= "cancel"
                    label="Cancel"
                  ></Button>
                <Button
                  label="Go to employee List page"
                  handleClick={goToNextPage}
                />
              </div>
        </section>
        </div>
      </div>
    </div>
  );
};
export default Emp_page;
