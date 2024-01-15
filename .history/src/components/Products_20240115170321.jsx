import Counter from "./Counter";

function Products() {

  let title = "Learn how to create apps with reactjs 2023"
  let showList = true;
  let products = [
    {
      id: 1,
      label: "iphone 13",
      price: 2900
    },
    {
      id: 2,
      label: "samsung",
      price: 1200
    }
  ]
  return (
    <div>
      <h1>{title}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam soluta iure similique nostrum, minus iusto! Magnam, exercitationem quam sint eligendi quasi necessitatibus, deleniti, natus ut iure vero labore incidunt sapiente?</p>

      <Counter />

      {/* {showList ? "show list of product" : "none"} */}

      {showList ? (

        <div> 
        {products.map((product, index) => (
          <div key={index}>
            <h1>{product.label}</h1>
            <button className="btn btn-info">{}</button>
          </div>
        ))}
        </div>
      )
      : ("none")
      }

    </div>
  )
}

export default Products