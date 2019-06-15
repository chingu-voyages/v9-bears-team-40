import { shallow } from "enzyme";
import React from "react";
import App from "./App";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("expect to render App component", () => {
  expect(shallow(<App />).length).toEqual(1);
});
