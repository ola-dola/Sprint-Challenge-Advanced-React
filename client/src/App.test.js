import React from 'react';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the correct player set", () => {
  const wrapper = rtl.render(<App />);
  const footballer = wrapper.queryByText(/Megan Rapinoe/i);
  expect(footballer).toBeInTheDocument();
});