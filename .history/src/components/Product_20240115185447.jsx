
const Product(props) {
  console.log("my data , props")
  return (
    <>
    <h1>{props.data.label}</h1>
    <button className="btn btn-info">{props.data.price}</button>
    </>
  )
}

export default Product