<template>
  <div class="container mt-4 p-4">
    <game-type @onSelectedGameType="setGameType"></game-type>
    <game :game-type="gameType"></game>
  </div>
</template>

<script>
import GameType from './components/GameType.vue';
import Game from './components/Game.vue';

export default {
  name: 'App',
  components: {
    GameType,
    Game,
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
