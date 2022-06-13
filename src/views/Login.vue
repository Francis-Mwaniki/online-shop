<template>
 <!-- REGISTERING USER -->
 <div class=" container mx-auto w-11/12 md:max-w-3xl h-auto md:h-auto bg-gray-100 dark:bg-slate-700 shadow-black shadow-lg rounded-md border-x-2 border-orange-900 mb-2">
     <form class=" p-2 mt-5 pt-12">
       <h2 class=" flex justify-center pb-4"><img class="h-8 w-8 dark:bg-slate-400 dark:p-2 dark:rounded-full" src="@/assets/user-register.svg" alt="Workflow" /></h2>
        <div class=" flex justify-start md:justify-center gap-3 m-2 items-baseline flex-wrap md:flex-nowrap">
          <label for="email" class="justify-start md:justify-center dark:text-white">Email</label>
       <input type="email" placeholder="Email.." class="justify-start md:justify-center p-2 rounded-lg focus:ring-4 ring-blue-900 border border-bookmark-blue">
       </div>
        <div class=" flex justify-start md:justify-center gap-3 m-2 items-baseline flex-wrap md:flex-nowrap">
           <label for="password" class="justify-start md:justify-center dark:text-white">Password</label>
       <input type="password" name="password" placeholder="Password" class="justify-start md:justify-center p-2 rounded-lg focus:ring-4 ring-blue-900 border border-bookmark-blue">
       <label for="confirmPassword" class="justify-start md:justify-center dark:text-white">ConfirmPass</label>
       <input type="password" placeholder="confirmPassword" class="justify-start md:justify-center p-2 rounded-lg focus:ring-4 ring-blue-900 border border-bookmark-blue">
       </div>
       <div class=" flex justify-self-center md:justify-center bg-bookmark-blue btn text-white items-center focus:ring-4 ring-blue-900 md:pt-4 mb-5">
         <input type="submit" value="Login" class=" mx-auto ">
       </div>
       <div class=" flex md:flex-row flex-col justify-self-center md:justify-center mx-auto md:gap-y-1 gap-y-4 md:gap-x-3 flex-wrap md:flex-nowrap">
       <button class="flex justify-center gap-x-2 btn bg-bookmark-blue md:w-1/2 w-full text-bookmark-white hover:bg-gradient-to-br from-pink-600 via-cyan-700 to-orange-500 hover:text-black">
          <svg
              class=" w-6 h-10 text-center "
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
           <span class=" pt-3"> Google</span>
        </button>
<button class=" flex justify-center gap-x-2 btn bg-bookmark-blue md:w-1/2 w-full text-bookmark-white hover:bg-gradient-to-br from-pink-600 via-cyan-700 to-orange-500 hover:text-black">
          <svg
              class=" w-6 h-10 text-center"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-f"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
              ></path>
            </svg>
            <span class=" pt-3"> Facebook</span>
        </button>
        
       </div>
       <div class="flex justify-self-center md:justify-center pt-5">
         <h3 class=" dark: text-white">Don't have an account?</h3>
         <router-link  :to="{name:'signup'}" class=" text-bookmark-blue dark:text-bookmark-white underline">Signup</router-link>
       </div>
     </form>
   </div>
</template>

<script>
export default {
  name:'Login'

}
</script>

<style>

</style>