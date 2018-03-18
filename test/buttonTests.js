import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Button from '../src/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Button component', () => {
  it('should call handleClick() when clicked', () => {
    const spy = sinon.spy(Button.prototype, 'handleClick')
    const wrapper = shallow(<Button />)
    wrapper.find('div').simulate('click')
    expect(spy.calledOnce).to.equal(true)
  })
})