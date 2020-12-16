<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <!--Going to router by using it's name which we define in router file-->
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </div>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>

  <!-- 
    <router-view/> is the special tag for using route when 
    we go to another route then it will dynamically helps 
    to inject that route component 
  -->
  <router-view/>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: 'Home' }) // so here we pushing the home route so we going to the home route
    },
    back() {
      this.$router.go(-1) // -1 means go back to the history
    },
    forward() {
      this.$router.go(1) // so here we go forward
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: white;
  background: crimson;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
