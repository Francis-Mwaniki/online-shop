<template>
    <div class=" mt-1 p-1 mb-3">
        <div class=" bg-slate-900 p-1 h-auto w-full pb-6 container mx-auto">
            <div class=" ">
                <div class="w-64 h-auto  bg-bookmark-white dark:bg-slate-700 dark:text-bookmark-white  rounded-md   text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform  hover:scale-90 justify-center mx-auto container">
                    <h1 class=" m-2 uppercase justify-center flex text-lg font-semibold text-black dark:text-white">{{product.name}}</h1>
                    <!-- <img :src="product.img" alt="product.name" class=" rounded-lg h-32 w-auto p-1 mx-auto transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-125">   -->
                    <div class=" flex justify-center gap-4 p-1  bg-blue-300 dark:bg-slate-700">
                        <h3 class="dark:text-white text-black p-1 pt-3 bg-blue-600 rounded-full items-center max-h-20 justify-center border-amber-600 border min-w-fit"><span class=" p-1 text-center flex justify-center items-center">Ksh {{items_cost!=null?items_cost.toFixed(2):''}}</span></h3>
                        <p class="dark:text-white text-black p-1 pt-3 italic text-center">{{description}}</p>
                    </div>
                     <button @click="deleteFromCart" class=" ease-in-out duration-300 btn  bg-red-900 hover:bg-blue-600 flex justify-center gap-x-3  mx-auto text-white dark:text-gray-100 hover:text-white p-4">Delete<img class=" h-6 w-6" src="@/assets/shoppingcart.svg" alt="Workflow" /></button>
                </div>
            </div>
        </div>
        </div>
</template>

<script>
export default {
name:'cartItemCard',
props:['product'],
methods:{
deleteFromCart(){
        this.$store.commit('deleteFromCart',this.product)
       }
},
computed:{
    items_cost(){
        return this.product.price*this.product.quantity
    },
     description(){
        return this.product.desc.substring(0,120);
    }
}
}
</script>

<style>

</style>