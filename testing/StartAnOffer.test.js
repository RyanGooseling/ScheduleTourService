/**
 * @jest-environment jsdom
 */
import React from 'react';
import sinon from 'sinon';
import {shallow, render} from 'enzyme';
import StartAnOffer from '../src/components/StartAnOffer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('testing StartAnOffer button', () => {

  it('check StartAnOffer for a button', () => {
    const wrapper = shallow(<StartAnOffer />);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('simulates StartAnOffer click events', () => {
    const mockButtonClick = jest.fn();
    const button = shallow((<button onClick={mockButtonClick} ></button>));
    button.find('button').simulate('click');
    expect(mockButtonClick).toHaveBeenCalled();
  });
});