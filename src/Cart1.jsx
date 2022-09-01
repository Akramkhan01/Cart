import { useState, React, useEffect } from "react";

function Cart() {
  const [user, setUser] = useState([]);
  // const [bag, setBag] = useState("id");
  console.log(user);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((json) => setUser(json));
  }, []);
  return (
    <>
      {user.map((a) => {
        return (
          <div>
            <div className="img">
              <img src={a.image}></img>
            </div>
            <div className="text">
              <p>{a.id}</p>

              <p>{a.category}</p>

              <p>{a.title}</p>

              <button type="button" onClick={() => console.log(a)}>
                Add to cart{" "}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Cart;
