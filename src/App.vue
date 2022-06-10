<template>
<div class=" relative z-10">
  <Nav />
</div>
  <router-view/>
</template>
<script>
import Nav from '@/components/Nav.vue'
export default {
  name:'App',
  components:{
    Nav
  }

}

</script>
<style>
 #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} 
</style> 
