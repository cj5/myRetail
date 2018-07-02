import React, { Component } from "react";

import ProductHeroCarousel from "./ProductHeroCarousel";
import ProductDetails from "./ProductDetails";
import ProductReviews from "./ProductReviews";

let getProductImageList = Images => {
  try {
    // Note: If data changes - would need to update accordingly.
    return Images[0].PrimaryImage.concat(Images[0].AlternateImages).map(
      item => item.image
    );
  } catch (e) {
    return [];
  }
};

class ProductItem extends Component {
  render() {
    let images = getProductImageList(this.props.data.Images);

    return (
      <div className="container product-item">
        <section>
          <ProductHeroCarousel title={this.props.data.title} images={images} />
        </section>
        <section>
          <ProductDetails
            price={this.props.data.Offers[0].OfferPrice[0].formattedPriceValue}
            highlights={null}
            showPickUpInStore={
              this.props.data.purchasingChannelCode === "0" ||
              this.props.data.purchasingChannelCode === "2"
            }
            showAddToCart={
              this.props.data.purchasingChannelCode === "0" ||
              this.props.data.purchasingChannelCode === "1"
            }
            features={this.props.data.ItemDescription[0].features}
          />
        </section>
        <section>
          {/*TODO import date-fns and format date */}
          <ProductReviews
            proReviewTitle={this.props.data.CustomerReview[0].Pro[0].title}
            proReview={this.props.data.CustomerReview[0].Pro[0].review}
            proReviewScreenName={
              this.props.data.CustomerReview[0].Pro[0].screenName
            }
            proReviewDate={this.props.data.CustomerReview[0].Pro[0].datePosted}
            conReviewTitle={this.props.data.CustomerReview[0].Con[0].title}
            conReview={this.props.data.CustomerReview[0].Con[0].review}
            conReviewScreenName={
              this.props.data.CustomerReview[0].Con[0].screenName
            }
            conReviewDate={this.props.data.CustomerReview[0].Con[0].datePosted}
          />
        </section>
      </div>
    );
  }
}

export default ProductItem;
