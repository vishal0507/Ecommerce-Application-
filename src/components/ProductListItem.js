import React from 'react'

const ProductListItem = (props) => {
  return (
    <div className='d-flex m-4 align-items-center justify-content-center'>

      <img className="border-radius-9 me-4" src={props.thumbnail} height={150} weight={180} alt={props.title} />

      <h5 className='card-title me-4'>
        {props.title}
      </h5>
      <h6 className='mt-2 me-4'>Price: {`$${props.price}`}</h6>
      <h6 className='mt-2 me-4'>Discount: {props.discountPercentage}%</h6>
      <h6 className='mt-2 me4'>Rating {props.rating}</h6>
      <button className='btn btn-danger ms-3' onClick={props.incrementItem}>+</button>
      <br/>
      <span className='ms-3'>Quantity {props.count}</span>
      <button className='btn btn-danger ms-3' onClick={props.decrementItem}>-</button>
      <button className='btn btn-danger ms-3' onClick={props.removeItem}>Remove</button>
    </div>
  )
}

export default ProductListItem