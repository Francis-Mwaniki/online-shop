<template>
 <div class="">
  <h1 class=" uppercase text-center text-black dark:text-white text-2xl font-serif mt-2 mb-2 ">your cart</h1>
 <div class="w-auto flex md:flex-row flex-wrap flex-col h-auto  bg-bookmark-white dark:bg-slate-900 dark:text-bookmark-white  rounded-md   text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-100 hover:scale-90 justify-center mx-auto container ">
  <cartItemCard 
  v-for="product in products"
  :key="product.id"
  :product="product"/>
 </div>
    <div class=" h-full bg-slate-200 dark:bg-slate-700 pb-80 rounded-sm ">
 <div class="  mt-7 flex max-w-sm mx-auto flex-row justify-center bg-orange-500 dark:bg-slate-800 p-1 rounded-md items-center">

       <cartPaymentSummary />
   </div>
   </div>
 </div>
</template>
<script>

import cartItemCard from '@/components/cart/cartItemCard.vue'
import cartPaymentSummary from '@/components/cart/cartPaymentSummary.vue'

export default {
  name: 'HomeView',
   mounted(){
    
  },
  components: {
    cartItemCard,cartPaymentSummary
  },
  computed:{
    products(){
      return this.$store.getters.cartItem;
    }
  }
}
</script>