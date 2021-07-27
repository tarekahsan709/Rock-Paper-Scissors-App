<template>
  <div>
    <b-modal ref="resultModal" ok-only title="Result">
      <div class="d-block text-center">
        <div class="row justify-content-md-center">
          <div class="col col-lg-5">
            <p>Player One picked<br><b>{{playerOne.name}}</b></p>
          </div>
          <div class="col col-lg-5">
            <p>Player Two picked<br><b>{{playerTwo.name}}</b></p>
          </div>
        </div>
        <div class="winner mt-2">
          <h1 v-if="winner !== 'draw'">Winner is <br>{{ winner.toUpperCase() }}</h1>
          <h1 v-if="winner === 'draw'">It's a<br>{{ winner.toUpperCase() }}</h1>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Result',
  props: {
    playerOne: Object,
    playerTwo: Object,
    winner: String,
  },
  data() {
    return {
    };
  },
  methods: {
    open() {
      this.$refs.resultModal.show();
    },
    hide() {
      this.$refs.resultModal.hide();
    },
  },
};
</script>
