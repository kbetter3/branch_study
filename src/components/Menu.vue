<template lang="html">
  <div id="mySidenav" :class="'sidenav ' + (state ? 'sidenav-open' : 'sidenav-close')" ref="sidenav">
    <a href="javascript:void(0)" class="closeBtn" @click="closeNav">&times;</a>
    <a href="#">Menu 1</a>
    <a href="#">Menu 2</a>
    <a href="#">Menu 3</a>
    <a href="#">Menu 4</a>
  </div>
</template>

<script>
export default {
  props: [
    'state'
  ],
  methods: {
    closeNav() {
      this.$emit('closenav')
    }
  }
}
</script>

<style lang="css">
  .sidenav-open {
    width: 250px;
  }
  .sidenav-close {
    width: 0;
  }
  .sidenav {
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.5s;
  }

  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    white-space: nowrap;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.5s;
  }

  .sidenav .closeBtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
</style>
