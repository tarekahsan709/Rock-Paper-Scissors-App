<template>
  <div class="row justify-content-md-center mt-4">
    <div class="col col-lg-2" v-for="(value, key) in elements" :key="key">
      <div class="card" @click="onSelectElement(value)">
        <div class="card-body text-center">
          <h2>{{value.name.toUpperCase()}}</h2>
        </div>
      </div>
    </div>

    <b-modal ref="my-modal" ok-only title="Result">
      <div class="d-block text-center">
        <div class="row justify-content-md-center">
        <div class="col col-lg-5">
          <p>Player one <br><b>{{playerOne.toUpperCase()}}</b></p>
        </div>
          <div class="col col-lg-5">
            <p>Player Two <br><b>{{playerTwo.toUpperCase()}}</b></p>
          </div>
        </div>
        <h1 class="mt-2">{{ winner.toUpperCase() }}</h1>
      </div>
    </b-modal>
  </div>
</template>

<script>
import rps from '../../../rps';

export default {
  name: 'Elements',
  data() {
    return {
      winner: '',
      playerOne: '',
      playerTwo: '',
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
    onSelectElement(selectedElement) {
      const computerElement = rps.getComputerChoice();
      this.playerOne = selectedElement.name;
      this.playerTwo = computerElement.name;

      const winner = rps.getWinner(selectedElement, computerElement);
      this.winner = winner;
      this.showModal(winner);
    },
    // eslint-disable-next-line no-unused-vars
    showModal(winner) {
      this.$refs['my-modal'].show();
    },
    hideModal() {
      this.$refs['my-modal'].hide();
    },
  },
};
</script>

<style>
.card:hover {
  color: white;
  cursor: pointer;
  background-color: black;
  border-color: white;
}
</style>
