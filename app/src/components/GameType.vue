<template>
    <div class="row justify-content-center mt-2 mb-2">
      <div class="col col-lg-2">
        <b-button @click="openGameTypeModal()">Game Type</b-button>
      </div>

      <div class="col col-lg-4">
        <b-card no-body bg-variant="Default" class="text-center p-1 gameType">
          <b-card-text>{{selectedGameType.toUpperCase()}}</b-card-text>
        </b-card>
      </div>

      <div>
        <b-modal ref="gameTypeModal" ok-only title="Select Game Type" size="sm">
          <div class="text-center">
            <b-button
              variant="outline-secondary"
              @click="selectGameType(gameType.PLAYER_VS_COMPUTER)">
              {{gameType.PLAYER_VS_COMPUTER.toUpperCase() }}
            </b-button>
            <b-button
              variant="outline-secondary"
              @click="selectGameType(gameType.COMPUTER_VS_COMPUTER)"
              class="mt-2">
              {{gameType.COMPUTER_VS_COMPUTER.toUpperCase() }}
            </b-button>
          </div>
        </b-modal>
      </div>
    </div>
</template>

<script>
import { GAME_TYPE } from '../../../util/constant';

export default {
  name: 'GameType',
  data() {
    return {
      gameType: '',
      selectedGameType: '',
    };
  },
  created() {
    this.gameType = JSON.parse(JSON.stringify(GAME_TYPE));
    this.selectedGameType = this.gameType.PLAYER_VS_COMPUTER;
    this.$emit('onSelectedGameType', this.selectedGameType);
  },
  methods: {
    selectGameType(selectedGameType) {
      this.selectedGameType = selectedGameType;
      this.$emit('onSelectedGameType', this.selectedGameType);
      this.$refs.gameTypeModal.hide();
    },
    openGameTypeModal() {
      this.$refs.gameTypeModal.show();
    },
  },
};
</script>
