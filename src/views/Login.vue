<template>
<!-- REGISTERING USER -->
<div class="
    flex
      p-2
      m-1
      mx-14
      md:mr-96
      md:ml-96
      rounded-lg
      text-center
      justify-center
       align-center
       border-b
       border-orange-600 
    " v-show="userLogged" @mouseover="dismiss">
    <p class=" pr-6">{{text}}</p>

    <svg @click="deleteMe" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-grow " viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>
    <p v-show="dismiss">Dismiss</p>
</div>

<section class="flex py-4 px-3 mt-3">
    <div class=" w-96
        md:w-2/3
        mx-auto
        md:rounded-lg
        sm:max-w-screen-sm
        p-3
        m-4
        border-2
        shadow-lg
        h-min
        flex-col
        md:flex-row
        align-center
        justify-center" >
    <form @submit.prevent="handleSubmit" class="
       bg-yellow-50
       dark:bg-slate-900
        dark:text-white
      ">
        <span class="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </span>
        <span class="flex items-center justify-center mt-2">
            <h2>Login</h2>
        </span>

        <div class="m-5 flex-col md:flex-row md:mx-9">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-6 inline-block p-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <label for="email" class="md:mr-5 mb-7">Email address</label>
            <input type="text" name="email" required placeholder="Email" class="
            mt-3
            py-4
            pr-5
            pl-3
            md:ml-9 md:mr-0
            border-b-2
              dark:bg-slate-500
            dark:text-black
            outline-none
            focus:border-black
            md:pr-2 md:border-green-200
            rounded-lg
          " v-model="email" />
        </div>
        <div class="m-5 flex-col md:flex-row md:mx-9">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-6 inline-block p-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd" />
            </svg>
            <label for="password" class="md:mr-14 mb-7">Password</label>
            <input type="password" name="password" required placeholder="Password" class="
            mt-3
            py-4
            pr-5
            pl-3
              dark:bg-slate-500
            md:mx-8
            border-b-2
            dark:text-black
            outline-none
            focus:border-black
            md:pr-2 md:border-green-200
            rounded-lg
          " v-model="password" />
        </div>

        <span class="flex items-center justify-center mt-2">
            <button type="submit" :class="[
                log_in_submission ? 'bg-gray-400 hover:bg-slate-400' : '',
              ]" :disabled="log_in_submission" class="
            hover:bg-blue-900 hover:text-zinc-100 hover:shadow-lg
            bg-bookmark-blue
            text-bookmark-white
            items-center
            justify-center
            flex
            p-4
            rounded-md
            self-center
            sm:flex-row
            w-full
            md:w-32
            
          ">
                <svg v-if="log_show_alert" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ log_show_alert ? "Processing..." : "Login" }}
            </button>
        </span>
        </form>
        <div class=" flex mt-3 md:flex-row flex-col justify-self-center md:justify-center mx-auto md:gap-y-1 gap-y-4 md:gap-x-3 flex-wrap md:flex-nowrap">
            <button class="flex justify-center gap-x-2 btn hover:bg-blue-900 dark:bg-bookmark-blue md:w-1/2 w-full text-bookmark-white bg-gradient-to-br from-pink-600 via-cyan-700 to-orange-500 hover:text-black">
                <svg class=" w-6 h-10 text-center " aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                    <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                </svg>
                <span class=" pt-3"> Google</span>
            </button>
            <button class=" flex justify-center gap-x-2 btn hover:bg-blue-900 dark:bg-bookmark-blue md:w-1/2 w-full text-bookmark-white bg-gradient-to-br from-pink-600 via-cyan-700 to-orange-500 hover:text-black">
                <svg class=" w-6 h-10 text-center" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path>
                </svg>
                <span class=" pt-3"> Facebook</span>
            </button>

        </div>
        <div class="flex justify-self-center justify-center pt-5">
            <h3 class=" text-gray-400 overflow-hidden dark:text-white">Don't have an account?</h3>
            <router-link :to="{name:'signup'}" class=" dark:text-bookmark-white text-bookmark-red underline px-1 ">Signup</router-link>
        </div>
        </div>
</section>
<div class=" flex flex-1 mt-3 justify-center align-baseline gap-5" v-show="redirect">
    <router-link :to="{ name: 'home' }" class=" p-3 mx-2 hover:border-b-2 rounded-lg hover:border-orange-500 hover:bg-gradient-to-r
        from-slate-400
        via-bookmark-blue
        to-purple-900 hover:text-bookmark-white">(---Go home</router-link>
    <router-link :to="{ name: 'welcome' }" class=" p-3 mx-2 hover:border-b-2 rounded-md hover:border-orange-500 hover:bg-gradient-to-r
        from-slate-400
        via-bookmark-blue
        to-purple-900 hover:text-bookmark-white">See a blog--)</router-link>
</div>
</template>

<script>
export default {
    name: 'Login',
  data() {
    return {
      email: "",
      password: "",
      userLogged: false,
      users:[],
      text:'',
      error:"",
       redirect:false,
      errorState:false,
      log_show_alert:false,
      log_in_submission:false,
      dismiss:false
    };
  },
  methods: {
  async handleSubmit() {
    this.log_in_submission = true;
      this.log_show_alert = true;
      let userLogin = {
        email: this.email,
        password: this.password,
      };
      let url='api/user/login';
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userLogin),
      });
      if(res.ok){
        const data = await res.json();
        this.users =[...this.users, data];
        this.text=data.message;
        //deleting login success text
        this.dismiss=true
       //if data is true redirect to new page
       this.$router.push({path:'/cart'})
        console.log(data.message)

         this.userLogged = true;
      (this.email = ""), (this.password = "");
      //disable logging
      this.log_in_submission = false;
      this.log_show_alert = false;
      }else{
        const data = await res.json();
           this.error=data;
         alert(data.message)
         this.log_in_submission = false;
          this.log_show_alert = false;
         console.log(data.message);
        return`http error: ${res.status}`
      }
    },
    deleteMe() {
      this.userLogged = false;
    },
  },
};
</script>

<style>

</style>
