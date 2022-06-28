<template>
<div  class="absolute inset-0  flex items-center justify-center mb-0 container mx-auto w-full md:max-w-5xl h-auto md:h-auto">
 <div class="relative z-20 md:bottom-9 md:top-0 top-3 w-full  h-auto bg-transparent dark:bg-slate-800" v-if="showing">
   <div  class="transition-all duration-500 transform hover:opacity-100 hover:shadow-md hover:scale-90 ">
         <login />
       </div>
      <div class="">
        <button
        aria-label="close"
        class="absolute top-0 right-0 text-xl  text-black w-auto bg-bookmark-white p-2 rounded-full"
        @click="showing=!showing"
      >
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      class=" animate-ping"
        width="48" height="48"
        viewBox="0 0 48 48"
        style=" fill:#undefined;"><path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"></path><path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"></path></svg>
      </button>
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
import Login from '@/views/Login.vue'
export default {
  name:'PopupRegister',
   components:{
        Register,
        Login
    },
  data(){
    return{
      showing:false,
    }
  }

}
</script>