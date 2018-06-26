import React, { Component } from 'react';
import '../css/main.css';

import ProductItem from "./components/ProductItem"
import Loading from "./components/Loading"

class App extends Component {
  state = {
    product: null,
  }

  async componentDidMount() {
    let product = await this.props.apiClient.loadProduct()
    this.setState({product})
  }

  render() {
    let {product} = this.state
    return (
      // data={product} || {...product}
      product != null ? <ProductItem data={product} /> : <Loading />
    );
  }
}

export default App;
