<template>
 <!-- PRODUCTS STARTS HERE -->
<div class="">
        <div class=" p-1 h-auto w-full pb-6 container mx-auto">
                <div class="w-64 h-auto  min-h-max gap-1 bg-bookmark-white dark:bg-slate-700 dark:text-bookmark-white  rounded-md   text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-100 hover:scale-90 justify-center mx-auto container">
                   <img v-bind:src="require('@/assets/'+ product.img)" :alt="product.name" class=" rounded-lg h-32 w-auto p-1 mx-auto transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-125"> 
                    <div class=" flex justify-center gap-4 p-1 ">
                        <h3 class="dark:text-white text-black p-1 pt-3">Ksh {{product.price.toFixed(2)}}</h3>
                        <p class="dark:text-white text-black p-1 pt-3 uppercase font-medium">{{product.name}}</p>
                    </div>
                    <button @click="product_drawer=true">
                    <button @click="$emit('view-product',product)"  class=" btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black flex justify-center gap-x-3  mx-auto my-2  transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-105">View product<img class=" h-6 w-6" src="@/assets/shoppingcart.svg" alt="Workflow" /></button>
                    </button>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'ProductSummary',
  props:['product','product_drawer'],
  data(){
        return{
          
        }
    },
  computed:{
    desc(){
      return this.product.desc.substring(0,150)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
