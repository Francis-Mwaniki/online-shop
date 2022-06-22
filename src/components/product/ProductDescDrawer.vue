<template>
  <div class=" shadow shadow-black flex justify-center items-center " >
  <div class=" fixed z-50 top-0 right-0 left-0 bottom-0 opacity-100 p-4 flex flex-col border-2 border-orange-500 shadow-lg bg-blue-300 dark:bg-slate-700 text-black dark:text-white max-w-3xl" v-show="product_drawer">
<button class=" flex gap-x-60" @click=" product_drawer=false"><span class=" justify-start md:pr-64 pl-5 font-serif font-semibold italic">Close</span><button class= " h-8 w-8  p-1 rounded-full border border-white text-white bg-black justify-end">X</button></button>
    <div class=" p-5" v-show="product">
         <router-link :to="{name:'cart'}"> 
      <button class="cursor-move p-2 m-1 justify-center flex gap-2 dark:bg-yellow-50 bg-slate-700 text-white rounded-md dark:text-black"><strong class=" p-1">Go My Cart</strong> <img class=" h-10 w-10" src="@/assets/shoppingcart.svg" alt="Workflow" /></button> 
        </router-link>
        <h3 class=" font-serif font-bold text-2xl uppercase p-2 ">{{product.name}}</h3>
        <p class="font-serif font-semibold italic p-1 tracking-wider">{{product.desc}}</p>
        <h4 class=" p-2 ">Ksh: {{product.price}}</h4>
        <div class=" " v-show="productTotal">
            <h3 class="font-serif font-semibold italic text-2xl p-1">In Cart</h3>
            <span class=" font-serif font-semibold italic text-xl p-1">Quantity:{{productTotal}}</span>
        </div>
        <div class=" flex justify-center items-center gap-x-2 border-b-2 border-cyan-800 pb-3">
            <button class="  transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-125 bg-red-700  btn m-2 outline-none focus:ring-4 rounded-lg text-white" @click="removeFromCart">Remove</button>
             <button class=" transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-125 bg-blue-700 btn m-2  outline-none focus:ring-4 rounded-lg text-white" @click="addToCart">Add</button>
        </div>

    </div>

  </div>
  </div>
</template>

<script>
export default {
    name:"ProductDescDrawer",
    props:['product','active','product_drawer'],
    data(){
        return{
           
        }
    },
    methods:{
       addToCart(){
        this.$store.commit('addToCart',this.product)
       },
       removeFromCart(){
        this.$store.commit('removeFromCart',this.product)
       }
    },
    computed:{
        productTotal(){
            return  this.$store.getters.productQuantity(this.product);
        }
    }

}
</script>

<style>
.show{
    display: block;
}
</style>








