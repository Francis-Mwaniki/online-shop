<template>
<div class=" dark:bg-black">
  <div class=" relative z-10">
  <Nav />
</div>
  <router-view/>
  <Footer />
</div>
</template>
<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
export default {
  name:'App',
  components:{
    Nav,
     Footer
  }

}

</script>
<style>
 #app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} 
</style> 
