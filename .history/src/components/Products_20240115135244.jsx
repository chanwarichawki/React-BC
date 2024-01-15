
function Products() {

  let title = "Learn how to create apps with reactjs 2023"
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
      <ul>
        {products.map(() => )}
        <li></li>
      </ul>
    </div>
  )
}

export default Products