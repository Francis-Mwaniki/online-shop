<template>
<div class=" dark:bg-black">
  <div class=" relative z-10">
  <Nav />
</div>
  <router-view/>
</div>
</template>
<script>
import Nav from '@/components/Nav.vue'
export default {
  name:'App',
  components:{
    Nav,
     
  }

}

</script>
<style>
 #app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} 
</style> 
