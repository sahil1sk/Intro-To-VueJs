<template>
  <div class="home">
    home
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">Inc age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'Home',
  setup() {
    //const p = ref(null) // In this way we creat ref inside composition api

    const name = ref('mario')
    const age = ref(30)

    const handleClick = () => {
      //p.value.textContent = 'Hello, ninjas'
      name.value = 'luigi'
      age.value = '35'
    }

    return {
      // name: name
      name, age, handleClick
    }
  },
  data(){
    // the value return data is reactive means when it changes then changes on template
    // but the value return from template is not reactive
    return {}
  }
}
</script>
