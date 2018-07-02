import React, { Component } from "react";

import FiveStars from "./assets/images/review-5-stars.png";
import FiveStarReview from "./assets/images/review-1star.png";
import OneStarReview from "./assets/images/review-5star.png";

export default class ProductReviews extends Component {
  render(props) {
    return (
      <div className="product-reviews">
        <div className="review-header">
          <div className="stars">
            <img src={FiveStars} alt="" />
            <span>Overall</span>
          </div>
          <a href="#">View all 14 reviews</a>
        </div>
        <div className="review-wrapper">
          <div className="header islet">
            <div>
              <p className="title">Pro</p>
              <p className="description">Most helpful 4-5 star review</p>
            </div>
            <div>
              <p className="title">Con</p>
              <p className="description">Most helpful 1-2 star review</p>
            </div>
          </div>
          <div className="reviews">
            <div>
              <img src={OneStarReview} alt="" />
              <h4 className="h4">{this.props.proReviewTitle}</h4>
              <p>{this.props.proReview}</p>
              <p className="signed">
                <a href="#">{this.props.proReviewScreenName}</a>
                {this.props.proReviewDate}
              </p>
            </div>
            <div>
              <img src={FiveStarReview} alt="" />
              <h4 className="h4">{this.props.conReviewTitle}</h4>
              <p>{this.props.conReview}</p>
              <p className="signed">
                <a href="#">{this.props.conReviewScreenName}</a>
                {this.props.conReviewDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
