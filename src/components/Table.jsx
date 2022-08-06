const Table=({
obj
})=>{
return(
<table>
    <div id="tbhead">
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
    {obj?.data?.map((item)=>(
  <div class="tbrow">
        <tr class="rowelement">
            <td>{item.name}</td>
            <td>{item.id}</td>
            <td>{item.dateOfJoining}</td>
            <td>{item.role}</td>
            <td>{item.status}</td>
            <td>{item.experience}</td>
            <td>Action</td>
        </tr>
   </div>
                 ))}
 
</table>
);
}
export default Table