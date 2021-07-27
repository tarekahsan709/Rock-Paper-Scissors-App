import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import Result from '@/components/Result.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});

describe('Result.vue', () => {
  it('renders props.winner when passed', () => {
    const winner = 'ROCK';
    const playerOne = {};
    const playerTwo = {};

    const wrapper = shallowMount(Result, {
      propsData: { playerOne, playerTwo, winner },
    });
    expect(wrapper.find('.winner').text()).to.include(winner);
  });
});
