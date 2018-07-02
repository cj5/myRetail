import React from "react";

import ProductDetails from "./ProductDetails";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<ProductDetails />);
});
