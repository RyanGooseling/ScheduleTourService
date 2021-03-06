/**
 * @jest-environment jsdom
 */
import React from 'react';
import sinon from 'sinon';
import {shallow, render} from 'enzyme';
import Scheduler from '../src/Scheduler';
import TourType from '../src/components/TourType';
import DateCarousel from '../src/components/DateCarousel';
import Schedule from '../src/components/Schedule';
import StartAnOffer from '../src/components/StartAnOffer';
import Booker from '../src/components/modal/Booker';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe('testing React components', () => {
  test('check components that do not have props passed', () => {
    const wrapper = shallow(<Scheduler />);
    expect(wrapper.contains(<TourType />)).toBe(true);
    expect(wrapper.contains(<StartAnOffer />)).toBe(true);
    // expect(wrapper.contains(<Schedule />)).toBe(true);
    expect(wrapper.contains(<DateCarousel />)).toBe(true);
    // expect(wrapper.contains(<Booker />)).toBe(true);
  });

  test('check TourType for two buttons', () => {
    // Change tour type in state with click of the document
    const wrapper = shallow(<TourType />);
    expect(wrapper.find('button').length).toBe(2);
  });
});