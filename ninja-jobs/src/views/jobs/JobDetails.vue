<template>
  <h1>Job Details Page</h1>
  <p>The job id is {{ $route.params.id }}</p>
</template>

<script>
export default {
    props: ['id'], // this id is availabls as props becasue we set props to true at router file
    data() {
        id: this.$route.params.id
    }
}
</script>

<style>

</style>