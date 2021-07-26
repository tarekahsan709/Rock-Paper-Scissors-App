<template>
  <div class="container">
    <app-head title="Rock Paper Scissor"></app-head>

    <div class="row justify-content-center mt-2">
      <div class="col col-lg-3">
        <app-game-type></app-game-type>
      </div>
    </div>

    <app-elements></app-elements>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import GameType from './components/GameType.vue';
import Elements from './components/Elements.vue';

export default {
  name: 'App',
  components: {
    'app-head': Header,
    'app-game-type': GameType,
    'app-elements': Elements,
  },
};
</script>
