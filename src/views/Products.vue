<template>
<div class=" mt-1 p-1 mb-3 relative">
    <div class=" flex justify-center gap-x-2 mt-2  md:flex-row flex-col">
      <router-link :to="{name:'cart'}"> 
      <button class="cursor-move p-2 m-1 justify-center flex gap-2 dark:bg-yellow-50 bg-blue-300 rounded-md"><strong class=" p-1">Go My Cart</strong> <img class=" h-10 w-10" src="@/assets/shoppingcart.svg" alt="Workflow" /></button> 
        </router-link>
<div class=" flex md:justify-end justify-center m-1 ">
    <button class=" cursor-move flex justify-center border dark:bg-orange-700 border-orange-900 rounded-lg dark:border-slate-600">
        <svg class=" dark:text-white md:h-12 h-12  transition-all duration-500 transform hover:opacity-90 pt-1 hover:pb-1 hover:scale-125" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" style=" fill:#undefined;">
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
        </svg>
        <input type="text" placeholder="Search Product.." v-model="search" class=" md:h-14 h-12 w-auto md:w-auto rounded-lg pl-1 bg-orange-300 dark:bg-slate-800 outline-none  text-black dark:text-white  border border-orange-900">
    
    </button>
</div> 
</div>

<!-- products goes here -->
<div class=" mt-1 p-1 mb-3">
<h2 class=" text-center text-black dark:text-bookmark-white font-serif leading-5 mb-3 border-b-2 border-orange-600 mx-auto pb-2">CATEGORIES</h2>
 <div class=" flex justify-center items-center mx-auto md:flex-row flex-col flex-wrap md:flex-wrap text-center gap-4 m-2">
    <h2 class="container mx-auto text-center text-white dark:text-bookmark-white font-serif leading-5 mb-3 pb-4 uppercase pt-4 bg-orange-700 dark:bg-slate-700">MEN'S WEAR</h2>
  <ProductSummary 
   v-for="product in items" :key="product.id"
   :product="product"
   v-on:view-product="viewProduct($event)"
   :product_drawer="product_drawer"
  />
 </div>
</div>
    <ProductDescDrawer 
     :product="product"
     :product_drawer="product_drawer"
       v-on:closeProductDrawer="closeDrawer()
       "
  />
</div>
<Footer />
</template>

<script>

import Footer from '@/components/Footer.vue'
import items from '../components/data/items'
import ProductSummary from '../components/product/ProductSummary.vue'
import ProductDescDrawer from '../components/product/ProductDescDrawer.vue'
export default {
    name: 'Products',
    components:{
     Footer
    },
   data(){
    return{
      items:items,
      product:'',
        product_drawer:false
    }
  },
  components: {
   ProductSummary,
   ProductDescDrawer
  },
  methods:{
    viewProduct(product){
      this.product=product
      this.product_drawer=true
      console.log(this.product);
    },
    closeDrawer(){
      this.product_drawer=false;
    }
  }
   

}
</script>

<style>

</style>
