export default SelectWithData = ({ data, handleInputChange, field_name }) => {
    return (
      <Select
        placeholder="Select option"
        onChange={(e) => handleInputChange(field_name, e.target.value)}
      >
        {data &&
          data.map((item, index) => (
            <option value={item.value} key={`item-${index}`}>
              {item.value}
            </option>
          ))}
      </Select>
    );
  };