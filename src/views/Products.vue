<template>

    <div class=" flex justify-center gap-x-2 mt-2  md:flex-row flex-col">
      <button class=" flex justify-center" @click="navigateToCart('cart')"><button class="cursor-move p-2 m-1 justify-center flex gap-x-2 dark:bg-yellow-50 bg-blue-300 rounded-md"><strong class=" p-1">{{cart.length}} Items in Cart</strong> <img class=" h-10 w-10" src="@/assets/shoppingcart.svg" alt="Workflow" /></button>  </button>
<div class=" flex md:justify-end justify-center m-1 ">
    <button class=" cursor-move flex justify-center border dark:bg-orange-700 border-orange-900 rounded-lg dark:border-slate-600">
        <svg class=" dark:text-white md:h-12 h-12  transition-all duration-500 transform hover:opacity-90 pt-1 hover:pb-1 hover:scale-125" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" style=" fill:#undefined;">
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
        </svg>
        <input type="text" placeholder="Search Product.." v-model="search" class=" md:h-14 h-12 w-auto md:w-auto rounded-lg pl-1 bg-orange-300 dark:bg-slate-800 outline-none  text-black dark:text-white  border border-orange-900">
    
    </button>
</div> 
     <button @click="navigateToCart('products')" class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black flex justify-center gap-x-3  mx-auto">View products</button>

</div>

<div class="bg-red-500 " v-show="page==='cart'">
<div class=" mt-1 p-1 mb-3">
    <h2 class=" text-center text-black dark:text-bookmark-white font-serif leading-5 mb-3 border-b-2 border-orange-600 mx-auto pb-2 uppercase font-extrabold text-xl">your cart</h2>
     <div class=" flex justify-center items-center mx-auto md:flex-row flex-col flex-wrap md:flex-wrap text-center gap-4 m-2">
            <div v-for="( product,index) in filteredProducts" :key="product.id" class="w-64 h-auto  bg-bookmark-white dark:bg-slate-700 dark:text-bookmark-white  rounded-md   text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-100 hover:scale-90 justify-center mx-auto container">
                <img v-bind:src="require('@/assets/'+ product.img)" :alt="product.name" class=" rounded-lg h-32 w-auto p-1 mx-auto transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-125">
                <div class=" flex justify-center gap-4 p-1 ">
                    <h3 class="dark:text-white text-black p-1 pt-3">Ksh {{product.price}}</h3>
                    <p class="dark:text-white text-black p-1 pt-3 uppercase font-medium">{{product.name}}</p>
                </div>
                <h2 class=" flex md:justify-center  justify-center items-center gap-2 m-1 text-black dark:text-white"><strong>Quantity:</strong><input type="number" v-model.number="product.quantity" class=" w-16 h-9 p-1 outline-none dark:bg-orange-300 focus:border-emerald-800 border rounded-md dark:text-black"> </h2>
                <button @click="removeFromCartBtn(products,index)" class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black flex justify-center gap-x-3  mx-auto">Remove <img class=" h-6 w-6" src="@/assets/shoppingcart.svg" alt="Workflow" /></button>
            </div>
        </div>
</div>
</div>

<div class="" v-show="page==='products'">
<div class=" mt-1 p-1 mb-3">
    <h2 class=" text-center text-black dark:text-bookmark-white font-serif leading-5 mb-3 border-b-2 border-orange-600 mx-auto pb-2">CATEGORIES</h2>
    <div class=" bg-slate-900 p-1 h-auto w-full pb-6 container mx-auto">
        <h2 class="container mx-auto text-center text-white dark:text-bookmark-white font-serif leading-5 mb-3 pb-4 uppercase pt-4 bg-orange-700 dark:bg-slate-700">MEN'S WEAR</h2>
        <div class=" flex justify-center items-center mx-auto md:flex-row flex-col flex-wrap md:flex-wrap text-center gap-4 m-2">
            <div v-for=" product in filteredProducts" :key="product.id" class="w-64 h-auto  bg-bookmark-white dark:bg-slate-700 dark:text-bookmark-white  rounded-md   text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-100 hover:scale-90 justify-center mx-auto container">
                <img v-bind:src="require('@/assets/'+ product.img)" :alt="product.name" class=" rounded-lg h-32 w-auto p-1 mx-auto transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-125">
                <div class=" flex justify-center gap-4 p-1 ">
                    <h3 class="dark:text-white text-black p-1 pt-3">Ksh {{product.price}}</h3>
                    <p class="dark:text-white text-black p-1 pt-3 uppercase font-medium">{{product.name}}</p>
                </div>
                <h2 class=" flex md:justify-center  justify-center items-center gap-2 m-1 text-black dark:text-white"><strong>Quantity:</strong><input type="number" v-model.number="product.quantity" class=" w-16 h-9 p-1 outline-none dark:bg-orange-300 focus:border-emerald-800 border rounded-md dark:text-black"> </h2>
                <button @click="addToCartBtn(products)" class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black flex justify-center gap-x-3  mx-auto">Add <img class=" h-6 w-6" src="@/assets/shoppingcart.svg" alt="Workflow" /></button>
            </div>
        </div>
    </div>
    <div class=" bg-blue-900 dark:bg-slate-800 p-1 h-auto w-full pb-6 container mx-auto">
        <h2 class=" text-center text-white font-serif leading-5 mb-3 mx-auto pb-4 uppercase pt-4 bg-orange-700 dark:bg-slate-700">WOMEN'S WEAR</h2>
        <div class=" flex justify-center items-center mx-auto md:flex-row flex-col flex-wrap md:flex-wrap text-center gap-4 m-2">
            <div v-for=" product in filteredProducts" :key="product.id" class="w-64 h-auto  bg-bookmark-white dark:bg-slate-700 dark:text-bookmark-white  rounded-md   text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-100 hover:scale-90 justify-center mx-auto container">
                <img v-bind:src="require('@/assets/'+ product.img)" :alt="product.name" class=" rounded-lg h-32 w-auto p-1 mx-auto transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-125">
                <div class=" flex justify-center gap-4 p-1 ">
                    <h3 class="dark:text-white text-black p-1 pt-3">Ksh {{product.price}}</h3>
                    <p class="dark:text-white text-black p-1 pt-3 uppercase font-medium">{{product.name}}</p>
                </div>
                <h2 class=" flex md:justify-center  justify-center items-center gap-2 m-1 text-black dark:text-white"><strong>Quantity:</strong><input type="number" v-model.number="product.quantity" class=" w-16 h-9 p-1 outline-none dark:bg-orange-300 focus:border-emerald-800 border rounded-md dark:text-black"> </h2>
                <button @click="addToCartBtn(element)" class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black flex justify-center gap-x-3  mx-auto">Add <img class=" h-6 w-6" src="@/assets/shoppingcart.svg" alt="Workflow" /></button>
            </div>
        </div>
    </div> 
    <div class=" bg-pink-900 dark:bg-slate-800 p-1 h-auto w-full pb-6 container mx-auto">
        <h2 class=" text-center text-white  font-serif leading-5 mb-3 mx-auto pb-4 uppercase pt-4 bg-orange-700 dark:bg-slate-700">ELECTRONICS AND DEVICES</h2>
        <div class=" flex justify-center items-center mx-auto md:flex-row flex-col flex-wrap md:flex-wrap text-center gap-4 m-2">
            <div v-for=" product in filteredProducts" :key="product.id" class="w-64 h-auto  bg-bookmark-white dark:bg-slate-700 dark:text-bookmark-white  rounded-md   text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-100 hover:scale-90 justify-center mx-auto container">
                <img v-bind:src="require('@/assets/'+ product.img)" :alt="product.name" class=" rounded-lg h-32 w-auto p-1 mx-auto transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-125">
                <div class=" flex justify-center gap-4 p-1 ">
                    <h3 class="dark:text-white text-black p-1 pt-3">Ksh {{product.price}}</h3>
                    <p class="dark:text-white text-black p-1 pt-3 uppercase font-medium">{{product.name}}</p>
                </div>
                <h2 class=" flex md:justify-center  justify-center items-center gap-2 m-1 text-black dark:text-white"><strong>Quantity:</strong><input type="number" v-model.number="product.quantity" class=" w-16 h-9 p-1 outline-none dark:bg-orange-300 focus:border-emerald-800 border rounded-md dark:text-black"> </h2>
                <button v-on:click="addToCartBtn(element)" class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black flex justify-center gap-x-3  mx-auto">Add <img class=" h-6 w-6" src="@/assets/shoppingcart.svg" alt="Workflow" /></button>
            </div>
        </div>
    </div> 
</div>
</div>
<Footer />
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
    name: 'Products',
    components:{
     Footer
    },
    data() {
        return {
            search: '',
            page:'products',
            products: [{
                    name: "shoe1",
                    id: 1,
                    img: "shoe4.jpg",
                    price: 500,
                    quantity: 0
                },
                {
                    name: "shoe2",
                    id: 2,
                    img: "shoe4.jpg",
                    price: 900,
                    quantity: 0
                },
                {
                    name: "shoe4",
                    id: 3,
                    img: "suit4.jpg",
                    price: 590,
                    quantity: 0
                },
                {
                    name: "suit1",
                    id: 4,
                    img: "suit1.jpg",
                    price: 750,
                    quantity: 0
                },
                {
                    name: "shoe4",
                    id: 5,
                    img: "shoe4.jpg",
                    price: 900,
                    quantity: 0
                },
                {
                    name: "shoe4",
                    id: 6,
                    img: "suit4.jpg",
                    price: 590,
                    quantity: 0
                },
                {
                    name: "suit1",
                    id: 7,
                    img: "suit1.jpg",
                    price: 750,
                    quantity: 0
                },
                {
                    name: "suit1",
                    id: 8,
                    img: "suit1.jpg",
                    price: 750,
                    quantity: 0
                },
                {
                    name: "suit1",
                    id: 9,
                    img: "suit1.jpg",
                    price: 750,
                    quantity: 0
                },
                {
                    name: "suit1",
                    id: 10,
                    img: "shoe4.jpg",
                    price: 500,
                    quantity: 0
                },
                {
                    name: "suit4",
                    id: 11,
                    img: "shoe4.jpg",
                    price: 900,
                    quantity: 0
                },
                {
                    name: "suit4",
                    id: 12,
                    img: "suit4.jpg",
                    price: 590,
                    quantity: 0
                },
                {
                    name: "suit1",
                    id: 13,
                    img: "suit1.jpg",
                    price: 750,
                    quantity: 0
                },
                {
                    name: "shoe4",
                    id: 14,
                    img: "shoe4.jpg",
                    price: 900,
                    quantity: 0
                },
                {
                    name: "suit4",
                    id: 15,
                    img: "suit4.jpg",
                    price: 590,
                    quantity: 0
                },
                {
                    name: "suit1",
                    id: 16,
                    img: "suit1.jpg",
                    price: 750,
                    quantity: 0
                },
            ],
            cart: [

            ]
        }
    },
    methods: {
        addToCartBtn(products) {
           /*  alert(`will be added soon`) */
           this.cart.push(products)
           console.log(this.cart);
        },
       removeFromCartBtn: function(products,index) {
             this.cart.splice(this.cart.indexOf(products))
             /*  console.log(this.cart.splice(index));  */
           /* const filteredList=this.cart.filter(element=>element!==index);
           this.cart=filteredList;
           console.log(filteredList); */
         
        },
        navigateToCart(page){
            this.page=page;
        }
    },
    computed: {
        filteredProducts() {
            return this.products.filter((product) => product.name.toLowerCase().includes(this.search.toLowerCase().trim()))
        }
    },
   

}
</script>

<style>

</style>
