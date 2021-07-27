<template>
  <div>
    <div class="row justify-content-md-center mt-4">
      <h3 class="text-center" v-show="!isCvsC">Select the element</h3>

      <div class="col col-lg-3" v-for="(value, key) in elements" :key="key">
        <div class="card element"
             @click="onSelectElement(value, key)"
             :class="{ 'active': activeIndex === key }"
        >
          <div class="card-body text-center">
            <h2>{{value.name.toUpperCase()}}</h2>
          </div>
        </div>
      </div>

      <result
        :player-one="playerOne"
        :player-two="playerTwo"
        :winner="winner"
        ref="resultModal"
      >
      </result>
    </div>

    <div class="text-center mt-2">
      <b-button
        v-if="isHvsC"
        @click="playHumanVsComputer()"
        squared
        variant="primary"
      >
        Play</b-button>
      <b-button
        v-if="isCvsC"
        @click="playComputerVsComputer()"
        squared
        variant="primary"
      >
        Play Again</b-button>
    </div>
  </div>
</template>

<script>
import { GAME_TYPE } from '../../../util/constant';
import rps from '../../../rps';
import Result from './Result.vue';

export default {
  name: 'Game',
  components: {
    Result,
  },
  props: {
    gameType: String,
  },
  watch: {
    gameType(gameType) {
      if (GAME_TYPE.COMPUTER_VS_COMPUTER === gameType) {
        this.isCvsC = true;
        this.playComputerVsComputer();
      } else {
        this.isCvsC = false;
      }
    },
  },
  data() {
    return {
      winner: '',
      playerOne: { },
      playerTwo: { },
      isHvsC: false,
      isCvsC: false,
      activeIndex: undefined,
    };
  },
  computed: {
    elements() {
      const elements = [];
      const items = rps.getElements();
      items.forEach((value) => {
        elements.push(value);
      });
      return elements;
    },
  },
  methods: {
    onSelectElement(selectedElement, key) {
      const computerElement = rps.getComputerChoice();
      this.playerOne = selectedElement;
      this.playerTwo = computerElement;

      this.activeIndex = key;
      this.isHvsC = true;
    },
    playHumanVsComputer() {
      this.winner = rps.getWinner(this.playerOne, this.playerTwo);
      this.$refs.resultModal.open();

      this.isHvsC = false;
      this.activeIndex = undefined;
    },
    playComputerVsComputer() {
      this.playerOne = rps.getComputerChoice();
      this.playerTwo = rps.getComputerChoice();

      this.winner = rps.getWinner(this.playerOne, this.playerTwo);
      this.$refs.resultModal.open();
    },
  },
};
</script>

<style>
.active {
  background-color: #343a40;
  color: white;
}
.element:hover {
  color: white;
  cursor: pointer;
  background-color: #343a40;
  border-color: white;
}
</style>
