<template>
  <Navbar />
  <router-view/>
</template>

<script>
import Navbar from './components/layout/Navbar.vue'
// import { messaging } from './firebase/init'

export default {
  components: { Navbar },
  created() {
    // messaging.onMessage((payload) => {
    //   //TODO :: Notification Alert---
    //   console.log('Message received By UBXTY', payload);
    //   this.$store.dispatch("globalState/snackBarState", {
    //       show: true,
    //       color: "primary",
    //       message: payload.data.body
    //     });
    // });
    
  }
}
</script>

<style>

</style>
