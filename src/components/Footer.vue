<template>
<div class=" bg-black p-2 mx-auto h-auto">
    <h1 class="text-center text-bookmark-white font-serif leading-5 mb-3 border-b-2 border-orange-600 mx-auto pb-2">CONTACT US</h1>
    <div class=" flex justify-start">
        <div class=" grid grid-cols-2 md:grid-cols-5 grid-flow-row justify-start gap-x-16 gap-y-11 text-bookmark-grey text-sm pt-8 pb-9 ml-5 font-thin tracking-normal leading-5  border-b-2 border-blue-900">
            <div class=" gap-2">
                <h2>
                    <router-link to="/" class="  hover:border-b-black mb-1 border-b border-gray-400">SERVICES</router-link>
                </h2>
                <h2>
                    <router-link :to="{name:'products'}" class="  hover:border-b-black">Products</router-link>
                </h2>
                <h2>
                    <router-link :to="{name:'pricing'}" class="  hover:border-b-black">Pricing</router-link>
                </h2>
                <h2>
                    <router-link :to="{name:'services'}" class="  hover:border-b-black">Services</router-link>
                </h2>
                <h2>
                    <router-link :to="{name:'about'}" class="  hover:border-b-black">About</router-link>
                </h2>
                <h2>
                    <router-link :to="{name:'AdminDashboard'}" class=" hover:border-b-black">Orders</router-link>
                </h2>
            </div>
            <div class=" gap-2">
                <h2>
                    <router-link to="/" class="  hover:border-b-black mb-1 border-b border-gray-400">POLICY</router-link>
                </h2>
                <h2>
                    <router-link :to="{name:'products'}" class="  hover:border-b-black">Terms And Conditions</router-link>
                </h2>
                <h2>
                    <router-link :to="{name:'pricing'}" class="  hover:border-b-black">Our Policy</router-link>
                </h2>
                <h2>
                    <router-link :to="{name:'services'}" class="  hover:border-b-black">Services</router-link>
                </h2>
                <h2>
                    <router-link :to="{name:'about'}" class="  hover:border-b-black">Learn more about us</router-link>
                </h2>
                <h2>
                    <router-link :to="{name:'AdminDashboard'}" class=" hover:border-b-black">Developers</router-link>
                </h2>
            </div>
            <div class=" gap-2">
                <h2>
                    <router-link to="/" class="  hover:border-b-black mb-1 border-b border-gray-400">ABOUT US</router-link>
                </h2>
                <h2>
                    <router-link :to="{name:'products'}" class="  hover:border-b-black">Other services</router-link>
                </h2>
                <h2>
                    <router-link :to="{name:'pricing'}" class="  hover:border-b-black">Our vision</router-link>
                </h2>
                <h2>
                    <router-link :to="{name:'services'}" class="  hover:border-b-black">Our team</router-link>
                </h2>
                <h2>
                    <router-link :to="{name:'about'}" class="  hover:border-b-black">Our management</router-link>
                </h2>
                <h2>
                    <router-link :to="{name:'AdminDashboard'}" class=" hover:border-b-black">About other tools</router-link>
                </h2>
            </div>
            <div class=" gap-2">
                <h2>
                    <router-link to="/" class="  hover:border-b-black mb-1 border-b border-gray-400">CONTACT US</router-link>
                </h2>
                <h2 class=" text-sm">
                    <router-link :to="{name:'products'}" class="  hover:border-b-black overflow-hidden">Email: digitalProStores@gmail.com</router-link>
                </h2>
                <h2 class=" text-base">
                    <router-link :to="{name:'pricing'}" class="  hover:border-b-black">Phone: +254 (571)635-9586</router-link>
                </h2>
            </div>
            <div class=" flex md:justify-end mx-auto justify-center md:mt-1 mt-4">
                <img class=" rounded-lg md:h-36 h-full" src="@/assets/avatar.jpeg" alt="StaticKit">
            </div>
        </div>
    </div>
    <!-- SUBSCRIBE -->
    <div class=" md:flex-row flex-col justify-center items-center flex md:justify-end md:items-center  mt-3 md:mt-2 mx-auto text-bookmark-white ">
        <h2 class=" p-1">SUBSCRIBE</h2>
        <form class=" gap-7 md:pr-10">
            <input type="text" placeholder="Enter your email.." class=" md:h-12 h-12 w-auto md:w-auto m-2 rounded-sm outline-none p-2 text-black md:mr-1">
            <input type="button" value="submit" class=" ml-2 md:ml-1 h-12 md:h-auto btn bg-blue-900 text-white hover:text-black hover:bg-orange-400 transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-125 hover:m-1">
        </form>
    </div>
</div>
<div class=" dark:bg-slate-700 bg-gradient-to-r from-pink-700 via-bookmark-blue to-orange-500 p-2 h-36 md:32 pb-10">
    <div class=" flex justify-around items-center pt-6 gap-x-8 lg:gap-x-16  md:flex-row flex-col md:items-baseline">
        <h3 class=" leading-5 text-bookmark-white dark:text-gray-300 underline mb-5 text-sm font-cursive">All Rights Reserved &copy;Copyrights 2022 DigitalPro&trade;❤️</h3>
        <div class="  justify-center p-1 mb-9 gap-x-8 items-baseline flex">
            <a href="" target="_blank" rel="noopener noreferrer"><img src="@/assets/SocialMedia/linkedIn.svg" class="h-9" alt=""></a>
            <a href="" target="_blank" rel="noopener noreferrer"><img src="@/assets/SocialMedia/Facebook.svg" class=" h-9" alt=""></a>
            <a href="" target="_blank" rel="noopener noreferrer"><img src="@/assets/SocialMedia/github.svg" class=" h-9" alt=""></a>
            <a href="" target="_blank" rel="noopener noreferrer"><img src="@/assets/SocialMedia/Twitter.svg" class=" h-9" alt=""></a>
            
            <!--  <button class=" p-1"><img src="@/assets/SocialMedia/linkedIn.svg" class="h-9"  alt=""></button>
            <button class=" p-1"><img src="@/assets/SocialMedia/Facebook.svg" class=" h-9" alt=""></button>
            <button class=" p-1"><img src="@/assets/SocialMedia/github.svg"   class=" h-9" alt=""></button>
            <button class=" p-1"><img src="@/assets/SocialMedia/Twitter.svg"  class=" h-9" alt=""></button> -->
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Footer'

}
</script>

<style>

</style>
