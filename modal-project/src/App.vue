<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  
  <div v-if="showModal">
    <!-- @close this is the custom event which will emit from the Modal.vue file -->
    <Modal 
      :header=header 
      :text=text
      theme="sale"
      @close="toggleModal" 
    >
      <!-- passing the name slot of name links-->
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more infor</a>
      </template>
    
      <h1>Ninja Giveway</h1>
      <p>Grap your ninja swag for half price</p>
    </Modal>
  </div>

  <!--In teleport we place this teleport div inside modals div which is inside public/index.html file-->
  <teleport to="#modals"  v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h1>Sign up to the newsletter</h1>
      <p>For updates and promo codes!</p>
    </Modal>
  </teleport>
  
  <!--click.right means only when right click click.shift means when shift key is down-->
  <button @click.shift="toggleModal">Open modal (shift)</button>
  <button @click="toggleModalTwo">Open modal</button>
</template>

<script>
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: { // here we register components which we want to use
    Modal
  },
  data() {
    return {
      title: 'My First Vue App :)',
      header: 'Sign up for the Giveway!',
      text: 'Grap your ninja swag for half price!',
      showModal: false,
      showModalTwo: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    },
  }
}
</script>

<style>
#app, #modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
