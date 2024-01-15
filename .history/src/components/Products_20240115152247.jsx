
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

      <cou

      {/* {showList ? "show list of product" : "none"} */}

      {showList ? (

        <ul> 
        {products.map((product, index) => (
          <li key={index}>{product.label}</li>
        ))}
        </ul>
      )
      : ("none")
      }

    </div>
  )
}

export default Products