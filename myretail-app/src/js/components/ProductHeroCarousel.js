import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class ProductHeroCarousel extends Component {
  render(props) {
    return (
      <div className="product-hero-carousel">
        <h2 className="h1">{this.props.title}</h2>
        <div className="carousel-wrapper">
          {this.props.images.length > 0 ?
            <Carousel showIndicators={false}>
              {this.props.images.map(url => (
                <div key={url}>
                  <img src={url} />
                </div>
              ))}
            </Carousel> : <div>Loading...</div>
          }
        </div>
      </div>
    )
  }
}