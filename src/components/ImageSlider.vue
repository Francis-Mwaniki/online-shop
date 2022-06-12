<template>
<h2 class=" flex justify-center items-center p-1 pt-2 underline text-black">FOUNDERS AND MANAGERS:)</h2>
<div class=" flex justify-center items-center gap-5">
    <swiper class="p-1 mx-auto container bg-gray-300 pl-10 py-10 mt-2" :modules="modules" :slides-per-view="3" :space-between="10" navigation :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide class=" mr-10">
            <div class="bg-orange-900 rounded-md p-5 inline-block md:h-auto h-80"><img src="@/assets/Testimonies/user1.png" class="h-14 rounded-full border border-slate-900">
                <p class=" p-1 text-center text-white leading-4">&#9889;An innovative end to end solution that provide products traceabality&#128640;❤️</p>
           <p class=" flex justify-end overflow-hidden"><blockquote class="border-b font-medium italic border-orange-700 mx-auto">Co-Founder:digitalStore</blockquote></p>
            </div>
        </swiper-slide>
        <swiper-slide class="">
            <div class="bg-slate-900 rounded-md p-5 inline-block md:h-auto h-80"><img src="@/assets/Testimonies/user2.png" class="h-14 rounded-full border border-slate-900">
                <p class="p-1 pt-2 text-center text-white leading-4">&#9889;An innovative end to end solution that provide products traceabality&#128640;❤️</p>
          <p class=" flex justify-end overflow-hidden"><blockquote class=" text-white border-b font-medium italic border-orange-700 mx-auto">Co-Founder:digitalPro&trade;</blockquote></p>
            </div>
        </swiper-slide>
        <swiper-slide class=" ">
            <div class="bg-slate-700 rounded-md p-5 inline-block md:h-auto h-80"><img src="@/assets/Testimonies/user3.png"  class="h-14 rounded-full border border-slate-900">
                <p class="p-1 pt-2 text-center text-black leading-4">&#9889;An innovative end to end solution that provide products traceabality&#128640;❤️</p>
            <p class=" flex justify-end overflow-hidden"><blockquote class=" text-white border-b font-medium italic border-orange-700 mx-auto">Co-Founder:Cosmas cheruiyot</blockquote></p>
            </div>
        </swiper-slide>
        <swiper-slide class="">
            <div class="bg-slate-600 rounded-md p-5 inline-block md:h-auto h-80"><img src="@/assets/Testimonies/user4.png"  class="h-14 rounded-full border border-slate-900">
                <p class="p-1 pt-2 text-center text-black leading-4">&#9889;An innovative end to end solution that provide products traceabality&#128640;❤️</p>
           <p class=" flex justify-end overflow-hidden"><blockquote class=" text-white border-b font-medium italic border-orange-700 mx-auto">Co-Founder:Francis mwaniki</blockquote></p>
            </div>
        </swiper-slide>
        <swiper-slide class="mx-auto">
            <div class=" rounded-md bg-blue-900 p-5 inline-block md:h-auto h-80"><img src="@/assets/Testimonies/user5.png"  class="h-14 rounded-full border border-slate-900">
                <p class="p-1 text-center pt-2 text-white leading-4">&#9889;An innovative end to end solution that provide products traceabality&#128640;❤️</p>
                <p class=" flex justify-end overflow-hidden"><blockquote class=" text-white border-b font-medium italic border-orange-700 mx-auto">Co-Founder:Francis mwaniki</blockquote></p>
            </div>
        </swiper-slide>
        <swiper-slide class=" mx-auto">
            <div class=" rounded-md bg-cyan-700 p-5 inline-block md:h-auto h-80">
                <img src="@/assets/Testimonies/user1.png"  class="h-14 rounded-full border border-slate-900">
                <p class="p-1  pt-2 text-center text-black leading-4">&#9889;An innovative end to end solution that provide products traceabality&#128640;❤️</p>
           <p class=" flex justify-end overflow-hidden"><blockquote class="border-b font-medium italic border-orange-700 mx-auto">Co-Founder:E_TECH</blockquote></p>
            </div>
        </swiper-slide>
        ...
    </swiper>
</div>
</template>

<script>
// import Swiper core and required modules
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y
} from 'swiper';

// Import Swiper Vue.js components
import {
    Swiper,
    SwiperSlide
} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
export default {
    name: 'services',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y],
            images: [
               {
                   img1:`<img src="@/assets/Testimonies/user1.png"  class=" h-14" alt="">`,
                   img2:`<img src="@/assets/Testimonies/user2.png"  class=" h-14" alt="">`,
                   img3:`<img src="@/assets/Testimonies/user3.png"  class=" h-14" alt="">`,
                   img4:`<img src="@/assets/Testimonies/user4.png"  class=" h-14" alt="">`,
                   img5:`<img src="@/assets/Testimonies/user5.png"  class=" h-14" alt="">`
               }
            ],
        };
    },
};
</script>
