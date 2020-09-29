/**
 * @jest-environment node
 */

import React from 'axios';
import {shallow} from 'enzyme';
import TourTypes from './components/TourTypes';



describe('testing React components', () => {
  test('app changes tourType state after click', () => {
    // Change tour type in state with click of the document
    const clickbox = shallow(<TourTypes />);

    expect(clickbox.state().tourType).toEqual('In-person');

    clickbox.find('div.tour-video').simulate('change');

    expect(clickbox.state().tourType).toEqual('Video');
  });
});