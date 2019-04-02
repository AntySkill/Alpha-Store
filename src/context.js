import React, { Component } from 'react'
import { StoreProducts, detailProduct, storeProducts } from './/data';
const ProductContext = React.createContext();


export default class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailProduct: detailProduct
    }
  handleDetail = () =>{
    console.log("Hello from detail")
  }
  addToCart = () =>{
    console.log("Hello add to cart")
  }
  
  render() {
    return (
      <ProductContext.Provider value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart

      }}>
          {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };