<template>
<section class=" md:mb-16 mb-6 dark:bg-slate-600 dark:md:opacity-60">
    <div class=" absolute object-cover md:-top-12 h-auto">
        <div class="">
            <img class=" " src="@/assets/pricing.jpg" alt="StaticKit">
        </div>
    </div>
    <div class=" text-center mx-auto container relative z-10 md:pt-32 pt-28 md:top-8 top-3 md:bg-transparent bg-orange-300 md:opacity-100 opacity-80 ">
        <div class=" py-5 md:py-14 md:mx-60 rounded-lg mx-4">
            <h2 class=" uppercase text-5xl py-3 font-extrabold">Pricing</h2>
            <p class=" text-2xl">Affordable prices Just In Time!</p>
        </div>
    </div>
</section>
<div class=" flex justify-center md:mb-40 md:flex-col lg:flex-row flex-col h-auto md:pt-16 container mx-auto">
    <div class=" h-auto p-2 max-w-2xl border-2 border-cyan-800 shadow-lg shadow-black my-2 rounded-lg md:mb-1 mb-4 md:mt-10">
        <h1 class=" uppercase  border-b-2 border-orange-800 mx-auto flex justify-center dark:text-white">Starters page</h1>
        <p class=" p-2 text-center hover:rounded-full hover:border-orange-800 hover:border dark:text-white mx-2 my-2 hover:bg-black hover:p-2 hover:text-white">Goods less than Ksh 1000</p>
        <button class=" flex text-center justify-center min-w-full  bg-bookmark-blue btn text-white items-center focus:ring-4 ring-blue-900 md:pt-4">Free</button>
        <p class=" p-2 mt-1 tracking-normal font-light text-gray-300">
            <ul class=" max-w-lg overflow-hidden p-2 bg-bookmark-white dark:bg-slate-700 hover: border border-orange-800 rounded-lg shadow-lg shadow-black">
                <li class=" text-black dark:text-white p-2 hover:transition-all ease-in text-left">&#10004;We're located @ Rafiki around Kabarak University.</li>
                <li class=" text-black dark:text-white p-2 hover:transition-all ease-in text-left">&#10004;Delivery is done on Tuesday and Thursday.</li>
                <li class=" text-black dark:text-white p-2 hover:transition-all ease-in text-left">&#10060;Payment is done upon delivery.</li>
                <li class=" text-black dark:text-white p-2 hover:transition-all ease-in text-left">&#10060;Reservation is done on 50% deposit.</li>
            </ul>
        </p>
    </div>
    <div class="h-auto p-2 max-w-2xl border-2 border-cyan-800 shadow-lg shadow-black my-2 rounded-lg md:mb-1 mb-4 md:mt-0">
        <h1 class=" uppercase  border-b-2 border-orange-800 mx-auto  flex justify-center dark:text-white">Intermediate page</h1>
        <p class=" p-2 text-center hover:rounded-full hover:border-orange-800 hover:border dark:text-white mx-2 my-2 hover:bg-black hover:p-2  hover:text-white">Goods above Ksh 1000 </p>
        <button class=" flex text-center justify-center min-w-full  bg-bookmark-blue btn text-white items-center focus:ring-4 ring-blue-900 md:pt-4">Premium</button>
        <p class=" p-2 mt-1 tracking-normal font-light text-gray-300 ">
            <ul class=" max-w-lg overflow-hidden p-2 bg-bookmark-white dark:bg-slate-700 hover: border border-orange-800 rounded-lg shadow-lg shadow-black">
                <li class=" text-black dark:text-white p-2 hover:transition-all ease-in text-left">&#10004;We're located @ Rafiki around Kabarak University.</li>
                <li class=" text-black dark:text-white p-2 hover:transition-all ease-in text-left">&#10004;Delivery is done on Tuesday and Thursday.</li>
                <li class=" text-black dark:text-white p-2 hover:transition-all ease-in text-left">&#10004;Payment is done upon delivery.</li>
                <li class=" text-black dark:text-white p-2 hover:transition-all ease-in text-left">&#10060;Reservation is done on 50% deposit.</li>
            </ul>
        </p>
    </div>
    <div class=" h-auto p-2 max-w-2xl border-2 border-cyan-800 shadow-lg shadow-black my-2 rounded-lg md:mb-1 mb-4  md:mt-10">
        <h1 class=" uppercase  border-b-2 border-orange-800 mx-auto  flex justify-center dark:text-white">Premium page</h1>
        <p class=" p-2 text-center hover:rounded-full hover:border-orange-800 hover:border dark:text-white mx-2 my-2 hover:bg-black hover:p-2 hover:text-white">Goods Above Ksh 2500</p>
        <button class=" flex text-center justify-center min-w-full  bg-bookmark-blue btn text-white items-center focus:ring-4 ring-blue-900 md:pt-4">Advanced</button>
        <p class=" p-2 mt-1 tracking-normal font-light text-gray-300 ">
            <ul class=" max-w-lg overflow-hidden p-2 bg-bookmark-white dark:bg-slate-700 hover: border border-orange-800 rounded-lg shadow-lg shadow-black">
                <li class=" text-black dark:text-white p-2 hover:transition-all ease-in text-left">&#10004;We're located @ Rafiki around Kabarak University.</li>
                <li class=" text-black dark:text-white p-2 hover:transition-all ease-in text-left">&#10004;Delivery is done on Tuesday and Thursday.</li>
                <li class=" text-black dark:text-white p-2 hover:transition-all ease-in text-left">&#10004;Payment is done upon delivery.</li>
                <li class=" text-black dark:text-white p-2 hover:transition-all ease-in text-left">&#10004;Reservation is done on 50% deposit.</li>
            </ul>
        </p>
    </div>
</div>
<ImageUploader />
<Footer />
</template>

<script>
import ImageUploader from '@/components/ImageUploader.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'Pricing',
    components: {
        ImageUploader,
        Footer
    },
    data() {
        return {

        }
    }

}
</script>

<style>

</style>
