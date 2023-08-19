function Orderlist({ item, insertDrink }) {
  const onInsert = () => {
    const obj = {
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      count: 1,
    };
    insertDrink(obj);
  };

  return (
    <>
      <a
        href="#"
        className="list-group-item list-group-item-action"
        onClick={onInsert}
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{item.name}</h5>
          <small>${item.price}</small>
        </div>
        <p className="mb-1">{item.description}</p>
      </a>
    </>
  );
}

export default Orderlist;
