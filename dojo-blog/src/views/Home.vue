<template>
  <div class="home">
    home
    <!-- <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">Inc age</button>
    <input type="text" v-model="name"> -->
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update</button>
  </div>

  <h2>Computed</h2>
  <input type="text" v-model="search">
  <p>search term - {{ search }}</p>
  <div v-for="name in matchingNames" :key="name">
    {{ name }}
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'

export default {
  name: 'Home',
  setup() {
    //const p = ref(null) // In this way we creat ref inside composition api

    // const name = ref('mario')
    // const age = ref(30)

    // const handleClick = () => {
    //   //p.value.textContent = 'Hello, ninjas'
    //   // name.value = 'luigi'
    //   // age.value = '35'
    // }

    const ninjaOne = ref({name: 'mario', age: 30})
    const ninjaTwo = reactive({ name: 'luigi', age: 35 })

    const nameTwo = reactive('mario') // this is permitive 

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
    }

    const updateNinjaTwo = () => {
      ninjaTwo.age = 40
      //nameTwo = 'New' // this cannot work in reactive becasue of permitive type so use ref is better
    }

    // => Computed in composition api
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser'])

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    return {
      // name: name
      // name, age, handleClick
      ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo, names, search, matchingNames
    }
  },
  data(){
    // the value return data is reactive means when it changes then changes on template
    // but the value return from template is not reactive
    return {}
  }
}
</script>
