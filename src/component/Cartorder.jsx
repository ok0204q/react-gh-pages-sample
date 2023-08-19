import { useState, useEffect } from "react";

const Cardorder = ({ cart, description }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, cur) => {
      return acc + cur.count * cur.price;
    }, 0);

    setTotal(total);
  }, [cart]);

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          <h5>訂單</h5>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">品項</th>
                <th scope="col">數量</th>
                <th scope="col">小計</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.count}</td>
                    <td>{item.price * item.count}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="text-end">
            備註: <span>{description}</span>
          </div>
          <div className="text-end">
            <h5>
              總計: <span>${total}</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardorder;
