
const Product = ({data}) => {
  let
  console.log("my data , props")
  return (
    <>
    <h1>{data.label}</h1>
    <button className="btn btn-info">{data.price}</button>
    </>
  )
}

export default Product