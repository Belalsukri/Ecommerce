import React from 'react';
import Rating from '../components/Rating';
import data from '../../../backend/data';
import { Link, useParams } from 'react-router-dom';
export default function ProductScreen(props) {
  const  params= useParams();
  const product =data.products.find(x => x._id === params.id)
  if(!product){
    return <div> Product Not Found</div>
  }
  return (
    <div>
      <Link to='/'>Back To Home</Link>
      <div className='row card'> 
        <div className='col-2'> 
            <img className='large' src={product.images} alt={product.name}/>
        </div>
        <div className='col-1'> 
            <ul>
              <li>
                <h1>{product.name}</h1>
              </li>
              <li>
                <Rating   rating={product.rating} numReviews ={product.numReviews}/>
              </li>
              <li>
                Price :${product.price}
              </li>
              <li> Description :<p>  {product.description} </p></li>
            </ul>
        </div>
        <div className='col-1'> 
          <div className='card card-body card-text'>
            <ul>
              <li>
                <div className='row'>
                  <div>Price</div>
                  <div className='price'>${product.price}</div>
                </div>
              </li>
              <li>
                <div className='row'>
                  <div>Satus</div>
                  <div >
                  {product.countInStock>0? (<span className='success'>InStock</span>):
                  (<span className='error'>Unavailable</span>)
                  }
                  </div>
                </div>
              </li>
              <li>
                <button className='primary block'> Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      
      </div>
    </div>
  )
}
