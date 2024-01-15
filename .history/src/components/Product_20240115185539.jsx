
const Product = ({data}) => {
  console.log("my data , props")
  return (
    <>
    <h1>{data.label}</h1>
    <button className="btn btn-info">{props.data.price}</button>
    </>
  )
}

export default Product