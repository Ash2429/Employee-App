const InputSelect = ({ label, options, onChange ,value}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" ,marginRight: "40px"}}  onChange={(event) => onChange(event.target.value)} >
      <label>{label}</label>
      <select name={label}>
        {options.map((item) => (
          <option key={item.key}>{item.label}</option>
        ))}
      </select>
    </div>
  );
};
export default InputSelect;
