<template>
<div v-if="showing" class="absolute inset-0  flex items-center justify-center mb-0 container mx-auto w-11/12 md:max-w-5xl h-auto md:h-auto">
 <div class="relative z-20 w-full  h-auto">
      <div class="">
        <button
        aria-label="close"
        class="absolute top-0 right-0 text-xl  text-black h-10 w-auto bg-bookmark-white rounded-3xl p-2 animate-ping"
        @click="showing=!showing"
      >
        X
      </button>
       <div class="transition-all duration-500 transform hover:opacity-100 hover:shadow-md hover:scale-90">
         <Register />
       </div>
      </div>
 </div>
</div>
 <button
        aria-label="close"
        class="right-0 text-xl  hover:ease-in btn btn-purple mt-6 hover:bg-orange-400 hover:text-black text-black my-2 mx-4 rounded-md p-2 transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-125"
        @click="showing=!showing"
      >
        Get Started
      </button>
</template>

<script>
import Register from '@/components/Register.vue'
export default {
  name:'PopupRegister',
   components:{
        Register
    },
  data(){
    return{
      showing:false,
    }
  }

}
</script>