import React from "react";

import ProductItem from "./ProductItem";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<ProductItem />);
});
