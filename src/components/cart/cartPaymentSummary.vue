<template>
  <div class=" m-1">
    <h1 class=" m-1 uppercase justify-center flex text-lg font-semibold text-black dark:text-white">total Amount</h1>
     <h3 class="m-1 uppercase justify-center flex text-lg text-black dark:text-white">{{cart_total.toFixed(2)}}</h3>
     <button class=" ease-in-out duration-300 btn  bg-red-900  mt-2 mb-2 hover:bg-bookmark-white flex justify-center gap-x-3  mx-auto dark:hover:text-black hover:text-black text-white dark:text-white">CheckOut<img class=" h-6 w-6" src="@/assets/shoppingcart.svg" alt="Workflow" /></button>
  </div>
</template>

<script>
export default {
name:'cartPaymentSummary',
computed:{
    cart_total(){
        return this.$store.getters.cartTotal
    }
}
}
</script>

<style>

</style>