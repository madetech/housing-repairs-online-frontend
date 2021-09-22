import React from 'react';
import Report from '../../../src/components/reportRepair'
import { shallow } from 'enzyme';

import { useHistory, useRouteMatch } from 'react-router-dom';
jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(),
  useRouteMatch: jest.fn().mockImplementation(() => {
    return {path: 'some-path', url: 'some-url'};
  })
}))


test('true equals true', () => {
  const wrapper = shallow(<Report />);

  console.log(wrapper);
  expect(wrapper.state).toBe({data:{}, step: 'type'});
});
// it('should disable submit button on submit click', () => {
//     const submitButton = wrapper.find(Button);
//     submitButton.simulate('click');
//
//     expect(submitButton.prop('disabled')).toBeTruthy();
//   });
