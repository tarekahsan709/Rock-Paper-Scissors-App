import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import {
  BCard, BButton, BCardText, BModal,
} from 'bootstrap-vue';

import GameType from '@/components/GameType.vue';

const factoryGameType = (values = {}) => shallowMount(GameType, {
  stubs: {
    // used to register custom components
    'b-card': BCard,
    'b-card-text': BCardText,
    'b-button': BButton,
    'b-modal': BModal,
  },
  data() {
    return {
      ...values,
    };
  },
});

describe('GameType.vue', () => {
  it('renders a selected game type with uppercase', () => {
    const wrapper = factoryGameType({ selectedGameType: 'player vs computer' });

    expect(wrapper.find('.gameType').text()).to.equal('PLAYER VS COMPUTER');
  });
});
