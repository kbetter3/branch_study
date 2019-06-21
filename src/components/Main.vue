<template lang="html">
  <div :class="'main ' + (navState ? 'nav-open' : 'nav-close')">
    <Menu :state="navState" @closenav="closenav"/>
    <p>Main</p>
    <button @click="opennav()">open</button>
    <button @click="move(1)">page 1</button>
    <button @click="move(2)">page 2</button>
    <router-view/>
  </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  components: {
    'Menu': Menu
  },
  data() {
    return {
      navState: false
    }
  },

  methods: {
    move(pg) {
      this.$router.push({path: 'page' + pg})
    },
    closenav() {
      this.navState = false
    },
    opennav() {
      this.navState = true
    }
  }
}
</script>

<style lang="css">
.main {
  transition: margin-left .5s;
  padding: 20px;
}

.nav-open {
  margin-left: 250px;
}

.nav-close {
  margin-left: 0;
}
</style>
