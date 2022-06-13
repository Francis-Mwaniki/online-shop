<template>
<div class=" flex md:justify-end justify-center m-1">
     <button class=" flex justify-center border border-orange-900 rounded-lg dark:border-slate-600"> 
              <svg
              class=" inset-0 dark:text-white  h-8 pt-2 transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-125"
               xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          width="40" height="40"
          viewBox="0 0 50 50"
          style=" fill:#undefined;"><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path></svg>
        <input type="text" placeholder="Search Product.." class=" md:h-12 h-12 w-auto md:w-auto rounded-lg pl-1 bg-orange-300 dark:bg-slate-800 outline-none  text-black dark:text-white  border border-orange-900">
     </button>
</div>
<div class=" mt-1 p-1 mb-3">
    <h2 class=" text-center text-black dark:text-bookmark-white font-serif leading-5 mb-3 border-b-2 border-orange-600 mx-auto pb-2">CATEGORIES</h2>
   <div class=" bg-slate-900 p-1 h-auto w-full pb-6 container mx-auto">
      <h2 class="container mx-auto text-center text-white dark:text-bookmark-white font-serif leading-5 mb-3 pb-4 uppercase pt-4 bg-orange-700 dark:bg-slate-700">MEN'S WEAR</h2>
      <div class=" text-center items-center  grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 grid-rows-8 md:grid-rows-3  lg:grid-flow-row mx-28 gap-y-7 justify-center">
        <div class=" w-64 h-auto  bg-bookmark-white dark:bg-slate-700 dark:text-bookmark-white   rounded-md  text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-90">
            <img src="@/assets/shoe4.jpg" alt="shoe4" class=" h-32 w-auto p-1 mx-auto">
            <p class=" text-black p-1 pt-3">product one</p>
             <button class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black">Add To Cart</button>
        </div>
        <div class="w-64 h-auto gap-2  bg-bookmark-white dark:bg-slate-700 dark:text-bookmark-white    rounded-md  text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-90">
            <img src="@/assets/shoe2.jpg" alt="shoe2" class=" h-32 w-auto p-1 mx-auto">
            <p class=" text-black p-1 pt-3"> product two</p>
             <button class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black">Add To Cart</button>
        </div>
        <div class=" w-64 h-auto bg-bookmark-white  rounded-md dark:bg-slate-700 dark:text-bookmark-white    text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-90">
            <img src="@/assets/shoe-sale.jpg" alt="shoe3" class=" h-32 w-auto p-1 mx-auto" >
            <p class=" text-black p-1 pt-3"> product three</p>
             <button class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black">Add To Cart</button>
        </div>
        <div class="w-64 h-auto  bg-bookmark-white dark:bg-slate-700 dark:text-bookmark-white    rounded-md text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-90">
            <img src="@/assets/suit1.jpg" alt="suit1" class=" h-32 w-auto p-1 mx-auto">
            <p class=" text-black p-1 pt-3"> product four</p>
             <button class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black">Add To Cart</button>
        </div>
        <div class="w-64 h-auto bg-bookmark-white dark:bg-slate-700 dark:text-bookmark-white   rounded-md text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-90">
            <img src="@/assets/suit2.jpg" alt="suit2" class=" h-32 w-auto p-1 mx-auto">
            <p class=" text-black p-1 pt-3"> product five</p>
             <button class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black">Add To Cart</button>
        </div>
        <div class="w-64 h-auto bg-bookmark-white dark:bg-slate-700 dark:text-bookmark-white   rounded-md   text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-90">
            <img src="@/assets/suit4.jpg" alt="suit4" class=" h-32 w-auto p-1 mx-auto">
            <p class=" text-black p-1 pt-3"> product six</p>
             <button class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black">Add To Cart</button>
        </div>
         <div class="w-64 h-auto bg-bookmark-white dark:bg-slate-700 dark:text-bookmark-white   rounded-md hover:  text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-90">
            <img src="@/assets/suit1.jpg" alt="suit1" class=" h-32 w-auto p-1 mx-auto">
            <p class=" text-black p-1 pt-3"> product four</p>
             <button class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black">Add To Cart</button>
        </div>
        <div class="w-64 h-auto  bg-bookmark-white dark:bg-slate-700 dark:text-bookmark-white  rounded-md   text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-90">
            <img src="@/assets/suit2.jpg" alt="suit2" class=" h-32 w-auto p-1 mx-auto">
            <p class=" text-black p-1 pt-3"> product five</p>
             <button class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black">Add To Cart</button>
        </div>
    </div>
   </div>
    <div class=" bg-blue-900 dark:bg-slate-800 p-1 h-auto w-full pb-6 container mx-auto">
      <h2 class=" text-center text-white font-serif leading-5 mb-3 mx-auto pb-4 uppercase pt-4 bg-orange-700 dark:bg-slate-700">WOMEN'S WEAR</h2>
      <div class=" justify-center items-center md:ml-10 lg:ml-4  ml-6 grid grid-cols-2 md:grid-cols-2  lg:grid-cols-4 grid-rows-4 md:grid-rows-3 lg:grid-rows-2 text-bookmark-white text-center gap-3 container mx-auto">
       <div class=" w-64 h-auto  bg-bookmark-white dark:bg-slate-700 dark:text-bookmark-white   rounded-md  text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-90">
            <img src="@/assets/shoe4.jpg" alt="shoe4" class=" h-32 w-auto p-1 mx-auto">
            <p class=" text-black p-1 pt-3">product one</p>
             <button class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black">Add To Cart</button>
        </div>
        <div class="w-64 h-auto gap-2  bg-bookmark-white  dark:bg-slate-700 dark:text-bookmark-white  rounded-md  text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-90">
            <img src="@/assets/shoe2.jpg" alt="shoe2" class=" h-32 w-auto p-1 mx-auto">
            <p class=" text-black p-1 pt-3"> product two</p>
             <button class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black">Add To Cart</button>
        </div>
        <div class=" w-64 h-auto bg-bookmark-white  rounded-md  dark:bg-slate-700 dark:text-bookmark-white  text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-90">
            <img src="@/assets/shoe-sale.jpg" alt="shoe3" class=" h-32 w-auto p-1 mx-auto" >
            <p class=" text-black p-1 pt-3"> product three</p>
             <button class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black">Add To Cart</button>
        </div>
        <div class="w-64 h-auto  bg-bookmark-white dark:bg-slate-700 dark:text-bookmark-white   rounded-md  text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-90">
            <img src="@/assets/suit1.jpg" alt="suit1" class=" h-32 w-auto p-1 mx-auto">
            <p class=" text-black p-1 pt-3"> product four</p>
             <button class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black">Add To Cart</button>
        </div>
        <div class="w-64 h-auto bg-bookmark-white dark:bg-slate-700 dark:text-bookmark-white  rounded-md  text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-90">
            <img src="@/assets/suit2.jpg" alt="suit2" class=" h-32 w-auto p-1 mx-auto">
            <p class=" text-black p-1 pt-3"> product five</p>
             <button class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black">Add To Cart</button>
        </div>
        <div class="w-64 h-auto bg-bookmark-white dark:bg-slate-700 dark:text-bookmark-white  rounded-md  text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-90">
            <img src="@/assets/suit4.jpg" alt="suit4" class=" h-32 w-auto p-1 mx-auto">
            <p class=" text-black p-1 pt-3"> product six</p>
             <button class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black">Add To Cart</button>
        </div>
         <div class="w-64 h-auto bg-bookmark-white dark:bg-slate-700 dark:text-bookmark-white   rounded-md hover:  text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-90">
            <img src="@/assets/suit1.jpg" alt="suit1" class=" h-32 w-auto p-1 mx-auto">
            <p class=" text-black p-1 pt-3"> product four</p>
             <button class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black">Add To Cart</button>
        </div>
        <div class="w-64 h-auto  bg-bookmark-white dark:bg-slate-700 dark:text-bookmark-white  rounded-md  text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-90">
            <img src="@/assets/suit2.jpg" alt="suit2" class=" h-32 w-auto p-1 mx-auto">
            <p class=" text-black p-1 pt-3"> product five</p>
             <button class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black">Add To Cart</button>
        </div>
    </div>
   </div>
   <div class=" bg-pink-900 dark:bg-slate-800 p-1 h-auto w-full pb-6 container mx-auto">
      <h2 class=" text-center text-white  font-serif leading-5 mb-3 mx-auto pb-4 uppercase pt-4 bg-orange-700 dark:bg-slate-700">ELECTRONICS AND DEVICES</h2>
      <div class=" justify-center items-center md:ml-10 lg:ml-4  ml-6 grid grid-cols-2 md:grid-cols-2  lg:grid-cols-4 grid-rows-4 md:grid-rows-3 lg:grid-rows-2 text-bookmark-white text-center gap-3 container mx-auto">
        <div class=" w-64 h-auto  bg-bookmark-white  dark:bg-slate-700 dark:text-bookmark-white  rounded-md  text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-90">
            <img src="@/assets/shoe4.jpg" alt="shoe4" class=" h-32 w-auto p-1 mx-auto">
            <p class=" text-black p-1 pt-3">product one</p>
             <button class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black">Add To Cart</button>
        </div>
        <div class="w-64 h-auto gap-2  bg-bookmark-white dark:bg-slate-700 dark:text-bookmark-white    rounded-md  text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-90">
            <img src="@/assets/shoe2.jpg" alt="shoe2" class=" h-32 w-auto p-1 mx-auto">
            <p class=" text-black p-1 pt-3"> product two</p>
             <button class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black">Add To Cart</button>
        </div>
        <div class=" w-64 h-auto bg-bookmark-white dark:bg-slate-700 dark:text-bookmark-white   rounded-md   text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-90">
            <img src="@/assets/shoe-sale.jpg" alt="shoe3" class=" h-32 w-auto p-1 mx-auto" >
            <p class=" text-black p-1 pt-3"> product three</p>
             <button class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black">Add To Cart</button>
        </div>
        <div class="w-64 h-auto  bg-bookmark-white  dark:bg-slate-700 dark:text-bookmark-white  rounded-md text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-90">
            <img src="@/assets/suit1.jpg" alt="suit1" class=" h-32 w-auto p-1 mx-auto">
            <p class=" text-black p-1 pt-3"> product four</p>
             <button class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black">Add To Cart</button>
        </div>
        <div class="w-64 h-auto bg-bookmark-white dark:bg-slate-700 dark:text-bookmark-white  rounded-md  text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-90">
            <img src="@/assets/suit2.jpg" alt="suit2" class=" h-32 w-auto p-1 mx-auto">
            <p class=" text-black p-1 pt-3"> product five</p>
             <button class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black">Add To Cart</button>
        </div>
        <div class="w-64 h-auto bg-bookmark-white dark:bg-slate-700 dark:text-bookmark-white  rounded-md  text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-90">
            <img src="@/assets/suit4.jpg" alt="suit4" class=" h-32 w-auto p-1 mx-auto">
            <p class=" text-black p-1 pt-3"> product six</p>
             <button class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black">Add To Cart</button>
        </div>
         <div class="w-64 h-auto bg-bookmark-white  dark:bg-slate-700 dark:text-bookmark-white  rounded-md hover: 0 text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-90">
            <img src="@/assets/suit1.jpg" alt="suit1" class=" h-32 w-auto p-1 mx-auto">
            <p class=" text-black p-1 pt-3"> product four</p>
             <button class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black">Add To Cart</button>
        </div>
        <div class="w-64 h-auto  bg-bookmark-white dark:bg-slate-700 dark:text-bookmark-white  rounded-md   text-white hover:text-black shadow-lg shadow-black transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-90">
            <img src="@/assets/suit2.jpg" alt="suit2" class=" h-32 w-auto p-1 mx-auto">
            <p class=" text-black p-1 pt-3"> product five</p>
             <button class=" ease-in-out duration-300 btn  bg-red-900 mt-2 mb-2 hover:bg-bookmark-white hover:text-black">Add To Cart</button>
        </div>
    </div>
   </div>
</div>
</template>

<script>
export default {
    name: 'Products'

}
</script>

<style>

</style>
