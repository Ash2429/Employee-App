import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { set } from "../store/slices/Counterslice";
import { dataSlice } from "../store/slices/Counterslice";
import { useSelector, useDispatch } from "react-redux";
import { useDeleteemployeeMutation } from "../services/api";

const Table = ({ obj }) => {
  const [deleteEmployee, result] = useDeleteemployeeMutation();
  const navigate = useNavigate();
  const goToDetPage = (id) => {
    navigate(`/employee/${id}`);
  };
  const goToEditPage = (id) => {
    navigate(`/edit/${id}`);
  };
    var color = "#F5ECB8";
    function  setColor(status){
    if (status=="Active") {
      color = "#D3F4BE";
    }
    else if (status=="Inactive") {
      color = "#FFBFBF";
    } else {
      color = "#F5ECB8";
    }
  };
  return (
    <table>
      <div id="tbhead" style={{ position: "sticky" }}>
        <tr id="thead">
          <th>Name</th>
          <th>Employee ID</th>
          <th>Joining Date</th>
          <th>Role</th>
          <th>Status</th>
          <th>Experience</th>
          <th>Action</th>
        </tr>
      </div>
      {obj?.map((item) => (
        <div class="tbrow">
          <tr
            class="rowelement"
            onClick={() => {
              goToDetPage(item.id);
            }}
          >
            <td>{item.name}</td>
            <td>{item.id}</td>
            <td>{item.dateOfJoining}</td>
            <td>{item.role}</td>
            <div style={{display:"flex",justifyContent: "space-around", padding: "40px",alignItems:"center"}}>
                <td
              id="status"
              onLoad={setColor(item.status)}
              style={{ width:"150px", height:"31px",borderRadius:"15px",backgroundColor: `${color}` ,textAlign:"center",paddingTop:"6px",zIndex:"0"}}
            >
              {item.status}
            </td>
            </div>
            <td>{item.experience} Years</td>
            <td>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  padding: "40px",
                }}
              >
                <button
                  id="edit"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToEditPage(item.id);
                  }}
                >
                  <i className="material-icons" style={{ color: "#10AAC0" }}>
                    edit
                  </i>
                </button>
                <button
                  id="del"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteEmployee(item.id);
                  }}
                >
                  <i className="material-icons" style={{ color: "#FA4242" }}>
                    delete
                  </i>
                </button>
              </div>
            </td>
          </tr>
        </div>
      ))}
    </table>
  );
};
export default Table;
