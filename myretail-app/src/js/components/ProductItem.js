import React, { Component } from 'react';

import ProductHeroCarousel from './ProductHeroCarousel';

let ProductDetails = () => null
let ProductReviews = () => null

class ProductItem extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <ProductHeroCarousel title={this.props.data.title} />
        </div>
        <div>
          <ProductDetails />
        </div>
        <div>
          <ProductReviews />
        </div>
      </div>
    );
  }
}

export default ProductItem;
