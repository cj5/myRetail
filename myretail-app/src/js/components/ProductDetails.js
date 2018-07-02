import React, { Component } from "react";

import IconTag from "./IconTag";
import QuantitySelector from "./QuantitySelector";

export default class ProductDetails extends Component {
  render(props) {
    return (
      <div className="product-details">
        <div>
          <p className="product-price">{this.props.price}</p>
        </div>
        <div className="special-offers landmark">
          <p>
            <IconTag />Spend $50, ship free
          </p>
          <p>
            <IconTag />$25 gift card with purchase of a select Ninja Blender
          </p>
        </div>
        <QuantitySelector />
        <div className="btn-wrapper islet">
          {this.props.showPickUpInStore && (
            <button className="btn btn--primary">Pick up in Store</button>
          )}
          {this.props.showAddToCart && (
            <button className="btn btn--secondary">Add to Cart</button>
          )}
        </div>
        <div className="return-details island">
          <div className="title">
            <p>returns</p>
          </div>
          <div className="description">
            <p>
              This item must be returned within 30 days of the ship date. See{" "}
              <a href="#">return policy</a> for details. Price, promotions,
              styles, and availability may vary by store and online.
            </p>
          </div>
        </div>
        <div className="btn-wrapper">
          <button className="btn btn--tertiary">Add to Registry</button>
          <button className="btn btn--tertiary">Add to list</button>
          <button className="btn btn--tertiary">Share</button>
        </div>
        <div className="product-highlights">
          <h3 className="h2">product highlights</h3>
          <ul>
            <li>Wattage Output: 1100 Watts</li>
            <li>Number of Speeds: 3 </li>
            <li>Capacity (volume): 72.0 Oz.</li>
            <li>Appliance Capabilities: Blends</li>
            <li>Includes: Travel Lid</li>
            <li>Material: Plastic</li>
            <li>Finish: Painted</li>
            <li>Metal Finish: Chrome</li>
            <li>Safety and Security Features: Non-Slip Base</li>
            <li>Care and Cleaning: Easy-To-Clean, Dishwasher Safe Parts</li>
          </ul>

          {/* If data could be modified, send it back w/o embedded html */}
          {/*<ul>
            {this.props.features.map(feature => (
              <li key={feature}>{feature}</li>
            ))}
          </ul> */}
        </div>
      </div>
    );
  }
}
