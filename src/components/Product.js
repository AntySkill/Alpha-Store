import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="image-container p-5" onclick={()=> {console.log('Fcker u clicked')}}>
            <Link to='/details'>
              <img src={img} alt="best items" className="card-image-top"/>
            </Link>
            <button className="card-btn" disabled={inCart ? true : false} onclick={()=>{console.log('added to the cart')}}>
            {inCart ? (<p className="text-capitalize mb-0" disabled>{" "}in cart</p>) : (<i className="fas fa-cart-plus"></i>)}
            </button>
            <div className="card-footer d-flex justify-content-between">
              <p className="align-self-center mb-0">
                {title}
              </p>
              <h5 className="text-blue font-italic mb-0">
                <span className="mr-1">$</span>
                {price}
              </h5>
            </div>
          </div>
        </div>
      </ProductWrapper>
    )
  }
}

const ProductWrapper = styled.div`
.card{
  border-color: transparent;
  transition: all 1s linear;
}
.card-footer{
  background: transparent;
  border-top: transparent;
  transition: all 1s linear;
}
img{
  object-fit: scale-down;
  height: 16rem;
  width 16rem;
}
.card-btn{}
`