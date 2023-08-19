import { useState, useEffect } from "react";
import "bootstrap/scss/bootstrap.scss";
import Orderlist from "./component/Orderlist";
import Drinklist from "./component/Drinklist";
import Cardorder from "./component/Cartorder";

function App() {
  const data = [
    {
      id: 1,
      name: "珍珠奶茶",
      description: "香濃奶茶搭配QQ珍珠",
      price: 50,
    },
    {
      id: 2,
      name: "冬瓜檸檬",
      description: "清新冬瓜配上新鮮檸檬",
      price: 45,
    },
    {
      id: 3,
      name: "翡翠檸檬",
      description: "綠茶與檸檬的完美結合",
      price: 55,
    },
    {
      id: 4,
      name: "四季春茶",
      description: "香醇四季春茶，回甘無比",
      price: 45,
    },
    {
      id: 5,
      name: "阿薩姆奶茶",
      description: "阿薩姆紅茶搭配香醇鮮奶",
      price: 50,
    },
    {
      id: 6,
      name: "檸檬冰茶",
      description: "檸檬與冰茶的清新組合",
      price: 45,
    },
    {
      id: 7,
      name: "芒果綠茶",
      description: "芒果與綠茶的獨特風味",
      price: 55,
    },
    {
      id: 8,
      name: "抹茶拿鐵",
      description: "抹茶與鮮奶的絕配",
      price: 60,
    },
  ];
  const [drink, setDrink] = useState([]);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [description, setDescription] = useState("");
  const [cartdescription, setCartdescription] = useState("");

  useEffect(() => {
    const total = drink.reduce((acc, cur) => {
      return acc + cur.count * cur.price;
    }, 0);

    setTotal(total);
  }, [drink]);

  const insertDrink = (obj) => {
    const rs = drink.some((item) => item.id === obj.id);
    if (rs) {
      const updateDrinks = drink.map((item) => {
        if (item.id === obj.id) {
          return { ...item, count: Number(item.count) + 1 };
        } else {
          return { ...item };
        }
      });
      if (updateDrinks.some((item) => item.count > 10)) {
        alert("單品項限制10個數量!");
        return;
      }
      setDrink(updateDrinks);
    } else {
      const updateDrinks = [...drink, obj];
      setDrink(updateDrinks);
    }
  };

  const deleteDrink = (id) => {
    const newDrink = drink.filter((item) => {
      return item.id !== id;
    });

    setDrink(newDrink);
  };

  const changeDrinkCount = (id, count) => {
    const updateDrinks = drink.map((item) => {
      if (item.id === id) {
        return { ...item, count };
      } else {
        return { ...item };
      }
    });
    setDrink(updateDrinks);
  };

  const submitOrder = () => {
    const order = [...drink];
    setCart(order);
    setDrink([]);
    setCartdescription(description);
    setDescription("");
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="list-group">
            {data.map((item) => {
              return (
                <Orderlist
                  key={item.id}
                  item={item}
                  insertDrink={insertDrink}
                />
              );
            })}
          </div>
        </div>
        <div className="col-md-8">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" width="50">
                  操作
                </th>
                <th scope="col">品項</th>
                <th scope="col">描述</th>
                <th scope="col" width="90">
                  數量
                </th>
                <th scope="col">單價</th>
                <th scope="col">小計</th>
              </tr>
            </thead>
            <tbody>
              {drink.map((item) => {
                return (
                  <Drinklist
                    key={item.id}
                    item={item}
                    onDelete={deleteDrink}
                    onChange={changeDrinkCount}
                  />
                );
              })}
            </tbody>
          </table>
          {drink?.length !== 0 ? (
            <>
              <div className="text-end mb-3">
                <h5>
                  總計: <span>${total}</span>
                </h5>
              </div>
              <textarea
                className="form-control mb-3"
                rows="3"
                placeholder="備註"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <div className="text-end">
                <button className="btn btn-primary" onClick={submitOrder}>
                  送出
                </button>
              </div>
            </>
          ) : (
            <>尚未選擇添加商品到購物車</>
          )}
        </div>
      </div>
      <hr />
      <div className="row justify-content-center">
        <div className="col-8">
          <Cardorder cart={cart} description={cartdescription} />
        </div>
      </div>
    </div>
  );
}

export default App;
