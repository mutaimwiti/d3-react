import React from 'react';
import {mount, shallow} from 'enzyme';
import {BrowserRouter} from "react-router-dom";

export {mount, shallow};
export const mountWithRouter = (component, options = {}) =>
  mount(<BrowserRouter>{component}</BrowserRouter>, options);
