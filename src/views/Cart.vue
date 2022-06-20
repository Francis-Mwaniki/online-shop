<template>
   <div class="bg-red-500 ">
<div class=" mt-1 p-1 mb-3">
    <h2 class=" text-center text-black dark:text-bookmark-white font-serif leading-5 mb-3 border-b-2 border-orange-600 mx-auto pb-2 uppercase font-extrabold text-xl">your cart</h2>
     <div class=" flex justify-center items-center mx-auto md:flex-row flex-col flex-wrap md:flex-wrap text-center gap-4 m-2">
            <div v-for="( quantity,prod,key,i,k) in cart" :key="i" class="w-64 h-auto  bg-bookmark-white dark:bg-slate-700 dark:text-bookmark-white  rounded-md   text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-100 hover:scale-90 justify-center mx-auto container">
               <!--  <img v-bind:src="require('@/assets/'+ cart.img)" :alt="cart.name" class=" rounded-lg h-32 w-auto p-1 mx-auto transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-125"> -->
                <div class=" flex justify-center gap-4 p-1 ">
                    <h3 class="dark:text-white text-black p-1 pt-3">Ksh {{quantity.name}}</h3>
                    <p class="dark:text-white text-black p-1 pt-3 uppercase font-medium">{{prod}}</p>
                </div>
                <h2 class=" flex md:justify-center  justify-center items-center gap-2 m-1 text-black dark:text-white"><strong>Quantity:</strong><input type="number" v-model.number="cart.quantity" class=" w-16 h-9 p-1 outline-none dark:bg-orange-300 focus:border-emerald-800 border rounded-md dark:text-black"> </h2>
                <button @click="removeFromCartBtn(cart,i)" class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black flex justify-center gap-x-3  mx-auto">Remove <img class=" h-6 w-6" src="@/assets/shoppingcart.svg" alt="Workflow" /></button>
            </div>
        </div>
</div>
</div>
</template>

<script>
export default {
name:'Cart',
    props:['products','cart'],
    data(){
        return{
            page:"cart"
        }
    },
    methods:{
          removeFromCartBtn: function(products,i) {
          
          this.cart=this.cart.filter((x)=>{
            x===i
          })
           
             /*  */
             /*  console.log(this.cart.splice(index));  */
            const filteredList=this.cart.filter(element=>element!==index);
           this.cart=filteredList;
           console.log(filteredList); 
          
         
        },
    }
}
</script>

<style>

</style>