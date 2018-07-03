import React from "react";

import ProductHeroCarousel from "./ProductHeroCarousel";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<ProductHeroCarousel title={"Title Test"} images={[]} />);
});
