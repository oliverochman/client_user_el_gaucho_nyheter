import React from "react";
import { shallow } from "enzyme";

import DisplayArticles from "../components/DisplayArticles";

describe("DisplayArticles", () => {
  const wrapper = shallow(
    <DisplayArticles />
  );

    it('should check `componentDidMount()`', () => {
      const instance = wrapper.instance(); 
      jest.spyOn(instance, 'getArticles'); 
      instance.componentDidMount();
      expect(instance.getArticles).toHaveBeenCalledTimes(1); 
    });
})