<template lang="html">
  <div>
    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
    </div>
  </div>
</template>

<script>
export default {

  methods: {
    closeNav() {

    }
  }
}
</script>

<style lang="css">
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {

}

.sidenav .closebtn {

}
</style>
