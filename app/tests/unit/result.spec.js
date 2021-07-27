import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';

import Result from '@/components/Result.vue';

const factoryResult = (values = {}) => shallowMount(Result, {
  propsData: {
    ...values,
  },
});
describe('Result.vue', () => {
  it('renders props.winner when passed', () => {
    const winner = 'ROCK';
    const playerOne = {};
    const playerTwo = {};

    const wrapper = factoryResult({ playerOne, playerTwo, winner });
    expect(wrapper.find('.winner').text()).to.include(winner);
  });
});
