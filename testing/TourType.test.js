/**
 * @jest-environment jsdom
 */
import React from 'react';
import sinon from 'sinon';
import {shallow, render} from 'enzyme';
import TourType from '../src/components/TourType';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


// describe('testing React components', () => {
//   test('app TourType component', () => {
//     // Change tour type in state with click of the document
//     const wrapper = shallow(<Scheduler />);
//     expect(wrapper.find(TourType)).to.have.length(1);
//   });
// });

describe('<TourType />', () => {
  test('renders two buttons', () => {
    // Change tour type in state with click of the document
    const wrapper = shallow(<TourType />);
    expect(wrapper.find('button').length).toBe(2);
  });
});