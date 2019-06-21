<template lang="html">
  <div>
    <p>Main</p>
    <button @click="move(1)">page 1</button>
    <button @click="move(2)">page 2</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    move(pg) {
      this.$router.push({path: 'page' + pg})
    }
  }
}
</script>

<style lang="css">
</style>
