<template>
  <div>
    <div class="row justify-content-md-center mt-4">
      <h3 class="text-center" v-show="!isCvsC">Select the element</h3>

      <div class="col col-lg-2" v-for="(value, key) in elements" :key="key">
        <div class="card element"
             @click="onSelectElement(value, key)"
             :class="{ 'active': activeIndex === key }"
        >
          <div class="card-body text-center">
            <h2>{{value.name.toUpperCase()}}</h2>
          </div>
        </div>
      </div>

      <b-modal ref="my-modal" ok-only title="Result">
        <div class="d-block text-center">
          <div class="row justify-content-md-center">
            <div class="col col-lg-5">
              <p>Player one <br><b>{{playerOne.name}}</b></p>
            </div>
            <div class="col col-lg-5">
              <p>Player Two <br><b>{{playerTwo.name}}</b></p>
            </div>
          </div>
          <h1 class="mt-2"><small>Result</small><br>{{ winner.toUpperCase() }}</h1>
        </div>
      </b-modal>
    </div>

    <div class="text-center mt-2">
      <b-button
        v-if="isReady"
        @click="playHumanVsComputer()"
        squared variant="primary"
      >
        Play</b-button>
      <b-button
        v-if="isCvsC"
        @click="playComputerVsComputer()"
        squared variant="primary"
      >
        Play Again</b-button>
    </div>
  </div>
</template>

<script>
import rps from '../../../rps';
import { GAME_TYPE } from '../../../util/constant';

export default {
  name: 'Elements',
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
      isReady: false,
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
      this.isReady = true;
    },
    playHumanVsComputer() {
      this.winner = rps.getWinner(this.playerOne, this.playerTwo);
      this.showModal();
      this.isReady = false;
      this.activeIndex = undefined;
    },
    playComputerVsComputer() {
      this.playerOne = rps.getComputerChoice();
      this.playerTwo = rps.getComputerChoice();
      this.winner = rps.getWinner(this.playerOne, this.playerTwo);
      this.showModal();
    },
    showModal() {
      this.$refs['my-modal'].show();
    },
    hideModal() {
      this.$refs['my-modal'].hide();
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
