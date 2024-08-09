/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom"

export default function ProductCart({product}) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    <div className="card p-3 rounded">
      <img className="card-img-top mx-auto" src={product.images[0].image} alt="Product 1"/>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          <p>{product.name} </p>
        </h5>
        <div className="ratings mt-auto">
          <div className="rating-outer">
            <div className="rating-inner" style={{width:`${product.ratings/5*100}%`}}></div>
          </div>
        </div>
       <p className="card-text">${product.price}</p>
        <Link to={'/product/'+ product._id}  className="btn btn-primary">View Details</Link>
        {/* id="view_btn" */}
      </div>
    </div>
  </div>
  )
}
