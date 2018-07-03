import React from "react";

import ProductItem from "./ProductItem";
import { shallow } from "enzyme";

import data from "../../item-data.json";

it("renders without crashing", () => {
  shallow(<ProductItem data={data.CatalogEntryView[0]} />);
});
