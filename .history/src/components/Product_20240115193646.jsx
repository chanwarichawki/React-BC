import PropTypes from 'prop-types'
const Product = ({label,price}) => {
  // let {label, price} = data;
  
  return (
    <>
    <h1>{label}</h1>
    <button className="btn btn-info">{price}</button>
    </>

  //  <>
  //  <h1>{data.label}</h1>
  //  <button className="btn btn-info">{data.price}</button>
  //  </>
  )
}

Product.prototype = {
  label: PropTypes.string,
  price: PropTypes.number
}

product.default
export default Product