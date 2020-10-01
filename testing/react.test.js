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
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe('testing React components', () => {
  test('four main components', () => {
    // Change tour type in state with click of the document
    const wrapper = shallow(<Scheduler />);
    expect(wrapper.contains(<TourType />)).toBe(true);
    expect(wrapper.contains(<StartAnOffer />)).toBe(true);
    expect(wrapper.contains(<Schedule />)).toBe(true);
    expect(wrapper.contains(<DateCarousel />)).toBe(true);
  });

  test('check TourType for two buttons', () => {
    // Change tour type in state with click of the document
    const wrapper = shallow(<TourType />);
    expect(wrapper.find('button').length).toBe(2);
  });
});

describe('testing React button', () => {
  test('check StartAnOffer for a button', () => {
    const wrapper = shallow(<StartAnOffer />);
    expect(wrapper.find('button').length).toBe(1);
  });

  test('can we click a button on StartAnOffer?', () => {
    const mockButtonClick = jest.fn();
    const button = shallow((<StartAnOffer onClick={mockButtonClick} />));
    console.log(button);

    button.find('button').simulate('click');

    console.log(button.find('button').simulate('click'));
    console.log(mockButtonClick.mock);

    expect(mockButtonClick).toHaveBeenCalled();
  });
});