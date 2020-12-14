<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
      click me
  </div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0
        }
    },
    mounted() { // when the component is mounted this hook will fired
        setTimeout(() => {
            this.showBlock = true;
            this.startTimer();
        }, this.delay);
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime += 10;
            }, 10);
        },
        stopTimer() {
            // here we clear the interval
            clearInterval(this.timer); 
            // emitting our custom event and also passing data to it
            this.$emit('end', this.reactionTime);
        }
    },
    updated() { // when any data updated then this hook is fired
        console.log('component updated');
    },
    unmounted() { // when component is unmounted when is not used by other component
        console.log('Unmounted');
    }
}
</script>

<style>
    .block {
        width: 400px;
        border-radius: 20px;
        background: #0fa787;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>