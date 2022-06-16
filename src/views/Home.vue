<template>
<Homepage />
<ImageSlider />
<Partners />
<div class="animate-bounce w-6 h-6 mt-3 mb-2 rounded-full flex justify-center border-2 border-slate-900 dark:border-red-600 dark:bg-white mx-auto">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
    </svg>
</div>
<Footer />
</template>

<script>
import Homepage from '@/components/Homepage.vue'
import ImageSlider from '@/components/ImageSlider.vue'
import Partners from '@/components/Partners.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'Home',
    components: {
        Homepage,
        ImageSlider,
        Partners,
        Footer

    }

}
</script>

<style>

</style>
