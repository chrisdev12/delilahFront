<template>
  <div>
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome Chris'
    }
  },
  components:{
    Navbar
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-family: 'IBM Plex Mono', monospace;
}

body{
  height: 100%;
}
</style>
