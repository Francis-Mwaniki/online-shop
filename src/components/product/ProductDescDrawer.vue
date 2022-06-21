<template>
  <div class=" absolute flex justify-center items-center z-20" :class="{show:active}" @click="$emit('closeProductDrawer') " v-show="open=!open"/>
  <div class=" flex flex-col max-w-5xl  rounded-lg shadow-lg bg-white" :show="{show:active}">
    <div class=" flex justify-end mr-3" @click="$emit('closeProductDrawer')"><span>X</span></div>
    <div class=" p-5">
    <div class=" p-5" v-show="product">
        <h3 class=" ">{{product.name}}</h3>
        <p class=" ">{{product.desc}}</p>
        <h4 class=" ">${{product.price}}</h4>
        <div class=" " v-show="productTotal">
            <h3 class=" ">In Cart</h3>
            <span class="  ">Quantity:{{productTotal}}</span>
        </div>
        <div class=" flex justify-between items-center gap-x-2">
            <button class=" bg-red-700 py-1 px-2 outline-none focus:ring-4 rounded-lg text-white" @click="removeFromCart">remove</button>
             <button class=" bg-blue-700 py-1 px-3 outline-none focus:ring-4 rounded-lg text-white" @click="addToCart">add</button>
        </div>
    </div>
    </div>

  </div>
</template>

<script>
export default {
    name:"ProductDescDrawer",
    props:['product','active'],
    data(){
        return{
            open:false
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