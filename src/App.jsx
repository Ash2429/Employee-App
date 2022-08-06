import "./App.css";
import Button from "./components/Button";
import InputField from "./components/InputField";
import { useEffect, useState } from "react";
import TextField from "./components/TextField";
import Emp_page from "./pages/CreateEmployees";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer :{},
})
  var count =0
function App() {
  const [username, setUsername] = useState("");
  const [dispName, setDispName] = useState("");
  useEffect(()=>{
    count=count+1
    setUsername(`${count} renders have occured`)
  },[dispName])
  const onUserNamerChange = (value) => {
    setUsername(value);
  };
  return (
    <div>
      <Emp_page />
    </div>
  );
}
export default App;
