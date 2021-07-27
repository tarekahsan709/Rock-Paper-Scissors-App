<template>
  <div class="container mt-4 p-4">
    <app-game-type @onSelectedGameType="setGameType"></app-game-type>
    <app-elements :game-type="gameType"></app-elements>
  </div>
</template>

<script>
import GameType from './components/GameType.vue';
import Elements from './components/Elements.vue';

export default {
  name: 'App',
  components: {
    'app-game-type': GameType,
    'app-elements': Elements,
  },
  data() {
    return {
      gameType: '',
    };
  },
  methods: {
    setGameType(gameType) {
      this.gameType = gameType;
    },
  },
};
</script>
<style>
body {
  color: #343a40;
}
</style>
