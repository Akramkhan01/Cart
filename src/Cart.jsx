import React from "react";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      counting: 0,
    };
    // this.state1 = { counting: 0 };
  }
  componentDidMount() {
    fetch("https://dummyjson.com/products")
      .then((list) => list.json())
      .then((json) => {
        console.log(json);
        this.setState({ items: json.products });
      });
  }

  addcount = (counting) => {
    this.setState({ counting: counting + 1 });
    return counting;
  };
  render() {
    return this.state.items.map((item) => {
      return (
        <>
          <div id="div">
            <div id="photo">
              <img
                style={{ height: 200, width: 200 }}
                id="img"
                src={item.thumbnail}
              />
            </div>
            <div>
              <ul>
                <li>
                  <h1>
                    {item.brand} {item.title}
                  </h1>
                </li>
                <li>
                  <h2>{item.price}$</h2>
                </li>
                <li>{item.rating}</li>
              </ul>
            </div>

            <button
              style={{ height: 50, width: 70 }}
              type="button"
              onClick={() => this.addcount()}
            >
              Add to Cart
            </button>
          </div>
        </>
      );
    });
  }
}
export default Cart;
