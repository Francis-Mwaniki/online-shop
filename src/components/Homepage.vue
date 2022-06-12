<template>
<div class="mx-auto">
    <!--   <img src="@/assets/three-sale-cp.png" class=" w-96 h-96" width="100%" alt="Ecommerce pic"> -->
 <video src="@/assets/newEarth.mp4" loop="loop" autoplay="autoplay" playsinline muted="muted"
        class=" w-full absolute object-cover " style="top: -10px; height: 780px;"></video>
</div>
<div class="sm:pl-3 md:pl-9  pl-6 pr-28 md:pt-28 pt-2 max-w-7xl mx-auto">
    <div class=" relative z-10  max-w-5xl  opacity-80">
       <div class=" flex justify-between md:flex-row flex-col md:pr-12 gap-y-4">
             <div class=" flex justify-end md:mx-auto" >
               <img class=" md:h-96 h-80 w-auto rounded-lg" src="@/assets/suit3.jpg" alt="Workflow" />
           </div>
           <div class=" hover:bg-slate-900 bg-slate-900 p-2 opacity-80 rounded-2xl max-w-2xl ">
                <h2 class=" text-bookmark-white font-serif  text-3xl hover:underline opacity-100 font-extrabold">DIGITAL PRO STORES</h2>
        <p class="text-bookmark-white font-serif font-normal max-w-md mt-6 text-2xl hover:underline opacity-100">
            Easily Get Started,buying anything globally has now become possible.
        </p>
        <button class="">
            <PopupRegister />
        </button>
           </div>
       </div>
        
    </div>
</div>
<div class=" md:mt-32 mt-14 m-3 p-1 mx-auto mb-3">
    <h2 class=" text-center text-black font-serif leading-5 mb-3 border-b-2 border-orange-600 mx-auto pb-2">RECOMMENDED PRODUCTS</h2>
    <div class=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 grid-rows-6 md:grid-rows-3 lg:grid-rows-2 gap-2 text-bookmark-white text-center">
        <div class="p-3 bg-slate-200 flex justify-center  rounded-md hover:bg-gradient-to-b from-slate-900 via-bookmark-blue to-orange-500 text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-75">
         <div class="">
                <img src="@/assets/shoe4.jpg" alt="shoe4" class=" h-36 w-auto rounded-sm">
           <div class=" flex justify-between">
                <p class=" text-black p-1 pt-3">Shoe</p>
                <h3 class="p-1 pt-3 text-black">Ksh 500.00</h3>
           </div>
         </div>
        </div>
        <div class="p-3  bg-slate-200 flex justify-center  rounded-md hover:bg-gradient-to-b from-slate-900 via-bookmark-blue to-orange-500 text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-75">
          <div class="">
                <img src="@/assets/shoe2.jpg" alt="shoe2" class=" h-36 w-auto rounded-sm">
                 <div class=" flex justify-between">
                <p class=" text-black p-1 pt-3">Shoe 2</p>
                <h3 class="p-1 pt-3 text-black">Ksh 500.00</h3>
           </div>
          </div>
        </div>
        <div class="p-3  bg-slate-200 flex justify-center  rounded-md  hover:bg-gradient-to-b from-slate-900 via-bookmark-blue to-orange-500 text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-75">
            <div class="">
                <img src="@/assets/shoe-sale.jpg" alt="shoe3" class=" h-36 w-auto rounded-sm">
                 <div class=" flex justify-between">
                <p class=" text-black p-1 pt-3">Shoe 3</p>
                <h3 class="p-1 pt-3 text-black">Ksh 500.00</h3>
           </div>
            </div>
        </div>
        <div class="p-3 bg-slate-200 flex justify-center  rounded-md hover: hover:bg-gradient-to-b from-slate-900 via-bookmark-blue  to-orange-500 text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-75">
           <div class="">
                <img src="@/assets/suit1.jpg" alt="suit1" class=" h-36 w-auto rounded-sm">
                 <div class=" flex justify-between">
                <p class=" text-black p-1 pt-3">Suit</p>
                <h3 class="p-1 pt-3 text-black">Ksh 500.00</h3>
           </div>
           </div>
        </div>
        <div class="p-3  bg-slate-200 flex justify-center  rounded-md hover:bg-gradient-to-b from-slate-900 via-bookmark-blue to-orange-500 text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-75">
          <div class="">
                <img src="@/assets/suit2.jpg" alt="suit2" class=" h-36 w-auto rounded-sm">
                 <div class=" flex justify-between">
                <p class=" text-black p-1 pt-3">Suit 2</p>
                <h3 class="p-1 pt-3 text-black">Ksh 500.00</h3>
           </div>
          </div>
        </div>
        <div class="p-3 bg-slate-200 flex justify-center  rounded-md hover:bg-gradient-to-b  from-slate-900 via-bookmark-blue to-orange-500 text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-75">
         <div class="">
                <img src="@/assets/suit4.jpg" alt="suit4" class=" h-36 w-auto rounded-sm">
                 <div class=" flex justify-between">
                <p class=" text-black p-1 pt-3">Suit 3</p>
                <h3 class="p-1 pt-3 text-black">Ksh 500.00</h3>
           </div>
         </div>

        </div>
    </div>
</div>
<div class="p-1 bg-cyan-900 mx-auto">
    <h2>
        <router-link :to="{name:'services'}" class="flex  hover:underline font-extrabold hover:border-b-black uppercase text-white pb-2 justify-center mt-4 ">services</router-link>
    </h2>
</div>
<div class="flex border-red-900 border-l-2 bg-gradient-to-r from-slate-900 via-bookmark-blue to-orange-500 mt-3 p-3 bg-slate-900 text-black justify-center text-center  flex-col-reverse md:flex-row md:justify-start">
    <div class=" p-2 m-2 max-w-2xl md:mt-36 mt-9 text-white">
        <h2 class=" m-3 p-2 md:leading-4 md:tracking-wide uppercase font-bold font-serif">Find the way forward for your business</h2>
        <p class=" p-2 mt-1 tracking-normal font-light text-gray-300 ">From shoe stores to snack shops, browse digital marketing store examples and get inspired to get online.</p>
        <button class=" ease-in duration-300 btn  bg-red-900 mt-6 hover:bg-bookmark-white hover:text-black">More info</button>
    </div>
    <div class=" md:ml-6 mx-auto"> <img src="@/assets/three-sale.png" class=" w-full md:w-auto lg:w-auto h-80 mx-auto rounded-sm mt-4" width="100%" alt="Ecommerce pic"></div>
</div>
<div class="flex border-red-900 border-x-2 mt-0 p-3 bg-gradient-to-b from-slate-900 via-bookmark-blue to-orange-500  md:text-black  justify-center text-center  flex-col-reverse md:flex-row-reverse md:justify-start">
    <div class=" p-2 m-2 max-w-2xl md:mt-36 mt-9 text-white">
        <h2 class=" m-3 p-2 md:leading-4 md:tracking-wide uppercase font-serif font-bold md:text-white text-black">Explore more nice products</h2>
        <p class=" p-2 mt-1 tracking-normal font-light  md:text-gray-400 text-black">Get the look and feel you want for your store with other nice products. Find the right expression of your brand's unique style.</p>
        <button class=" ease-in-out duration-300 btn  bg-slate-900 mt-6 hover:bg-bookmark-white hover:text-black">More info</button>
    </div>
    <div class=" md:ml-6 mx-auto"> <img src="@/assets/one-sale.jpg" class=" w-full md:w-auto lg:w-auto h-80 mx-auto rounded-sm mt-4" width="100%" alt="Ecommerce pic"></div>
</div>
<!-- BUSINESS BRIEFS AND ANALYTICS -->
<div class=" lg:bg-blue-900 p-12 gap-4 bg-bookmark-blue md:bg-bookmark-blue">
    <h1 class=" flex justify-center mt-1 mb-7 uppercase font-serif font-bold text-white">Business Analytics</h1>
    <div class=" lg:bg-slate-900 sm:bg-bookmark-blue md:mx-72 py-36 rounded-md flex-col md:flex-row">
        <div class="flex justify-center items-center align-middle gap-20 text-bookmark-white p-2 lg:border-b  lg:border-x-2 lg:border-orange-900">
            <div class="p-1 font-serif font-bold tracking-wide leading-5">
                <h1>Customer 3M+</h1>
            </div>
            <div class="p-1 font-serif font-bold tracking-wide leading-5 md:py-14 py-7">
                <h1>Partners 4k+</h1>
            </div>
        </div>
        <div class="flex justify-center items-center align-middle gap-20 text-bookmark-white p-2 lg:border-t  lg:border-x-2 lg:border-orange-900 ">
            <div class="p-1 font-serif font-bold tracking-wide leading-5">
                <h1>Products 500k+</h1>
            </div>
            <div class="p-1 font-serif font-bold tracking-wide leading-5 md:gap-20 md:py-14 py-7">
                <h1>Followers 5k+</h1>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import PopupRegister from '@/components/PopupRegister.vue'
export default {
    name: 'Homepage',
    components:{
        PopupRegister
    }

}
</script>
