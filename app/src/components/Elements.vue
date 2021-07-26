<template>
  <div class="row justify-content-md-center mt-4">
    <div class="col col-lg-2">
      <font-awesome-icon icon="hand-rock" size="8x" />
    </div>
    <div class="col col-lg-2">
      <font-awesome-icon icon="hand-paper" size="8x" />
    </div>
    <div class="col col-lg-2">
      <font-awesome-icon icon="hand-scissors" size="8x" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Elements',
  props: {
  },
  data() {
    return {
      items: ['rock', 'paper', 'scissors'],
    };
  },
  methods: {
    // On SVG Click
    onPick() {

    },
  },
};
</script>
