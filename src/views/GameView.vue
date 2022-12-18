<template>
    <base-layout>
        <GameBoard :board_size="getNumber(this.$route.params.board_size)" />
    </base-layout>
</template>

<script>
import BaseLayout from "../components/BaseLayout.vue"
import GameBoard from "../components/GameBoard.vue"

const DEFAULT_VALUE = 10

export default {
    name: "GameView",
    components: {
        BaseLayout,
        GameBoard
    },
    methods: {
        getNumber(num) {
            if (isNaN(Number(num)) || num < 2) {
                return DEFAULT_VALUE
            }
            return Number(num)
        }
    }
}
</script>
