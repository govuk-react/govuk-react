import React from 'react';
import { mount } from 'enzyme';

import Button, { ButtonStart, ButtonStartIcon, ButtonDisabled, ButtonBlue, ButtonWacky } from './fixtures';

describe('button', () => {
  describe('basics', () => {
    it('should render a button', () => {
      const wrapper = mount(<Button>Example</Button>);

      expect(wrapper.find('button')).toBeTruthy();
    });

    it('matches snapshot', () => {
      const wrapper = mount(<Button>Example</Button>);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('disabled', () => {
    it('should render a button with the disabled attribute', () => {
      const wrapper = mount(<ButtonDisabled />);

      expect(wrapper.find('button').prop('disabled')).toBeTruthy();
    });

    it('matches snapshot', () => {
      const wrapper = mount(<ButtonDisabled />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('start button', () => {
    it('should render a button with the isStart prop', () => {
      const wrapper = mount(<ButtonStart />);

      expect(
        wrapper
          .find('button')
          .parent()
          .prop('isStart')
      ).toBeTruthy();
    });

    it('matches snapshot', () => {
      const wrapper = mount(<ButtonStart />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('button with icon', () => {
    it('should render an SVG icon within the button', () => {
      const wrapper = mount(<ButtonStartIcon />);

      expect(wrapper.find('SVG')).toHaveLength(1);
    });

    it('matches snapshot', () => {
      const wrapper = mount(<ButtonStartIcon />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('blue button, with automatic colours', () => {
    it('matches snapshot', () => {
      const wrapper = mount(<ButtonBlue />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('custom colours', () => {
    it('matches snapshot', () => {
      const wrapper = mount(<ButtonWacky />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
