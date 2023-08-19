import { useState, useEffect } from "react";
function Drinklist({ item, onDelete, onChange }) {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setPrice(item.count * item.price);
  }, [item]);

  const deleteDrink = () => {
    onDelete(item.id);
  };

  const changeCount = (e) => {
    onChange(item.id, e.target.value);
  };
  return (
    <tr>
      <td>
        <button type="button" className="btn btn-sm" onClick={deleteDrink}>
          x
        </button>
      </td>
      <td>{item.name}</td>
      <td>
        <small>{item.description}</small>
      </td>
      <td>
        <select
          className="form-select"
          value={item.count}
          onChange={changeCount}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </td>
      <td>{item.price}</td>
      <td>{price}</td>
    </tr>
  );
}

export default Drinklist;
