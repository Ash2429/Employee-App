import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Emp_page from './pages/CreateEmployee/CreateEmployees';
import LogInPage from './pages/Login/Login';
import EmployeeList from './pages/EmployeeList/EmployeeList';
import Counter from './pages/counter';
import { store } from './store/store';
import { Provider } from "react-redux"
import Employee from './pages/Employee/Employee';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <Routes >
        <Route path="/" element={<LogInPage/>}/>
        <Route path="/list" element={<EmployeeList/>}/>
        <Route path="/list/:status" element={<EmployeeList/>}/>
        <Route path="/create" element={<Emp_page/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/employee/:id" element={<Employee/>}/>
        <Route path="/edit/:id" element={<Emp_page/>}/>
      </Routes>
    </Provider>
      </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
