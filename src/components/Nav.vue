<template>
<div class="min-h-full">
    <div class="bg-gradient-to-r from-orange-900 via-slate-900 to-slate-900 dark:bg-slate-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-14">
                <div class="flex items-center mt-1">
                    <div class="flex-shrink-0">
                        <img class=" h-10 w-10" src="@/assets/shoppingcart.svg" alt="Workflow" />
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-12">
                            <div class="bg-gray-900  text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm flex justify-start md:gap-11 ">
                                <button class=" flex justify-center gap-1"> <img class="h-8 w-8" src="@/assets/home-1.svg" alt="Workflow" />
                                    <router-link to="/" class=" pt-2 hover:underline hover:border-b-black uppercase">home</router-link>
                                </button>
                                <button class=" flex justify-center gap-1"> <img class="h-8 w-8" src="@/assets/products.svg" alt="Workflow" />
                                    <router-link :to="{name:'products'}" class="pt-2 hover:underline hover:border-b-black uppercase">products</router-link>
                                </button>
                                <button class=" flex justify-center gap-1"> <img class="h-8 w-8" src="@/assets/pricing.svg" alt="Workflow" />
                                    <router-link :to="{name:'pricing'}" class="pt-2 hover:underline hover:border-b-black uppercase">pricing</router-link>
                                </button>
                                <button class=" flex justify-center gap-1"> <img class="h-8 w-8" src="@/assets/services.svg" alt="Workflow" />
                                    <router-link :to="{name:'services'}" class="pt-2 hover:underline hover:border-b-black uppercase">services</router-link>
                                </button>
                                <button class=" flex justify-center gap-1"> <img class="h-8 w-8" src="@/assets/about.svg" alt="Workflow" />
                                    <router-link :to="{name:'about'}" class="pt-2 hover:underline hover:border-b-black uppercase">about</router-link>
                                </button>
                                 <button class=" flex justify-center gap-1"> <img class="h-8 w-8" src="@/assets/orders.svg" alt="Workflow" />
                                    <router-link :to="{name:'cart'}" class="pt-2 hover:underline hover:border-b-black uppercase">Cart</router-link>
                                </button>
                                <button class=" flex justify-center gap-1"> <img class="h-8 w-8" src="@/assets/orders.svg" alt="Workflow" />
                                    <router-link :to="{name:'clientDashboard'}" class="pt-2 hover:underline hover:border-b-black uppercase">Admin</router-link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block">

                    <div class="ml-4 flex items-center md:ml-6">
                        <button id="theme-toggle" type="button" class="text-gray-500 mr-5 dark:text-gray-400 h outline-none rounded-lg text-sm p-2.5">
                            <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                            </svg>
                            <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <button type="button" class="m-1  p-2 bg-gray-200 rounded-lg text-gray-900 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-slate-900">
                            <span class="sr-only">Users</span>
                            <select class=" p-1 outline-none border-0 gap-5 ">
                                <option value="Admin" class="p-2 ">Admin</option>
                                <option value="Client" class=" p-2">Client</option>
                            </select>
                        </button>

                        <!-- Profile dropdown -->
                        <Menu as="div" class="ml-3 relative">
                            <div>
                                <MenuButton class=" md:my-4 max-w-xs  bg-slate-700 rounded-lg flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                    <span class="sr-only">Open user menu</span>
                                    <router-link :to="{name:'signup'}" class=" uppercase items-baseline hover:underline hover:border-b-black m-1 text-bookmark-white">signup</router-link>
                                    <button class="transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-125 items-baseline h-8 w-20 rounded-md p-1  uppercase hover:bg-blue-800 m-1 md:hover:rounded-md md:hover:ring-2 md:hover:border-orange-400 md:hover:border  bg-slate-800">
                                        <router-link class="text-bookmark-white" :to="{name:'login'}">login</router-link>
                                    </button>
                                    <img class="h-14 w-14 rounded-full" src="@/assets/avatar.jpeg" alt="" />
                                </MenuButton>
                            </div>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex sm:hidden flex-1 justify-end mt-12 mr-5 relative" @click="toggleMenu = !toggleMenu">
            <div class="" v-if="!toggleMenu">
                <svg class=" h-11 w-11 dark:bg-white bg-red-200 rounded-sm p-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50" style=" fill:#undefined;">
                    <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
                </svg>
            </div>
            <div class="" v-else>
                <svg class=" h-7 w-7 text-red-700 dark:bg-white bg-red-200 rounded-full p-1 m-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50" style=" fill:#undefined;">
                    <path d="M25,2C12.319,2,2,12.319,2,25s10.319,23,23,23s23-10.319,23-23S37.681,2,25,2z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42	C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29	c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29	c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z"></path>
                </svg>
            </div>
            <div class="
          flex-col
          relative
          justify-center
          inline-flex
          items-center
          h-auto
          text-slate-900
          w-full
         cursor-pointer
          px-4
          py-6
          rounded-md
          top-0
          gap-7
          z-20
        bg-orange-300
       dark:bg-slate-600
        " v-if="toggleMenu">
                <!-- routes -->
                <div class="ml-10 inline-block  space-x-12 relative z-20">
                    <div class="bg-gray-900  text-gray-300 hover:bg-gray-600 hover:text-white rounded-md text-sm  inline-block md:gap-11 p-4  w-full">
                        <button class=" flex justify-center gap-1 p-2"> <img class="h-8 w-8" src="@/assets/home-1.svg" alt="Workflow" />
                            <router-link to="/" class=" pt-2 hover:underline hover:border-b-black uppercase">home</router-link>
                        </button>
                        <button class=" flex justify-center gap-1 p-2"> <img class="h-8 w-8" src="@/assets/products.svg" alt="Workflow" />
                            <router-link :to="{name:'products'}" class="pt-2 hover:underline hover:border-b-black uppercase">products</router-link>
                        </button>
                        <button class=" flex justify-center gap-1 p-2"> <img class="h-8 w-8" src="@/assets/pricing.svg" alt="Workflow" />
                            <router-link :to="{name:'pricing'}" class="pt-2 hover:underline hover:border-b-black uppercase">pricing</router-link>
                        </button>
                        <button class=" flex justify-center gap-1 p-2"> <img class="h-8 w-8" src="@/assets/services.svg" alt="Workflow" />
                            <router-link :to="{name:'services'}" class="pt-2 hover:underline hover:border-b-black uppercase">services</router-link>
                        </button>
                        <button class=" flex justify-center gap-1 p-2"> <img class="h-8 w-8" src="@/assets/about.svg" alt="Workflow" />
                            <router-link :to="{name:'about'}" class="pt-2 hover:underline hover:border-b-black uppercase">about</router-link>
                        </button>
                        <button class=" flex justify-center gap-1 p-2"> <img class="h-8 w-8" src="@/assets/orders.svg" alt="Workflow" />
                            <router-link :to="{name:'clientDashboard'}" class="pt-2 hover:underline hover:border-b-black uppercase">orders</router-link>
                        </button>
                    </div>
                </div>
                <div class=" flex items-center bg-white gap-5">
                    <button id="theme-toggle" type="button" class="text-gray-900 mr-5 dark:text-red-700 h outline-none rounded-lg text-sm p-2.5">
                        <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                        </svg>
                        <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <button type="button" class="m-1  p-2 bg-gray-200 rounded-lg text-gray-900 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-slate-900" @click="users">
                             Users
                        <select class=" p-1 outline-none border-0 gap-5 " v-show="userPersonel">
                            <option value="Admin" class="p-2 ">Admin</option>
                            <option value="Client" class=" p-2">Client</option>
                        </select>
                    </button>

                    <!-- Profile dropdown -->
                    <Menu as="div" class="m-1 relative">
                        <div>
                            <MenuButton class=" max-w-xs p-1 bg-orange-800 rounded-lg flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span class="sr-only">Open user menu</span>
                                <router-link :to="{name:'signup'}" class=" uppercase items-baseline hover:underline hover:border-b-black m-1 text-bookmark-white">signup</router-link>
                                <button class="transition-all duration-500 transform hover:opacity-90 hover:shadow-md hover:scale-125 items-baseline h-8 w-20 rounded-md p-1  uppercase hover:bg-blue-800 m-1 md:hover:rounded-md md:hover:ring-2 md:hover:border-orange-400 md:hover:border  bg-slate-800">
                                    <router-link class="text-bookmark-white" :to="{name:'login'}">login</router-link>
                                </button>
                                <img class="h-14 w-14 rounded-full" src="@/assets/avatar.jpeg" alt="" />
                            </MenuButton>
                        </div>
                    </Menu>
                </div>
            </div>

        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
            <div class="flex items-center px-5">
                <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="@/assets/avatar.jpeg" alt="" />
                </div>
                <div class="ml-3 p-3">
                    <div class="text-base font-medium leading-none text-white p-1">DigitalPro&trade;</div>
                    <div class="text-sm font-medium leading-none text-gray-400 p-1"> digitalProStores@gmail.com</div>

                </div>

            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'Nav',
    data() {
        return {
            toggleMenu: false,
            userPersonel:false,
        };
    },
    methods: {
        toggle() {
            console.log("clicked");
        },
        users(){
            this.userPersonel=!this.userPersonel;
        }
    },
    mounted() {
        var themeToggleDarkIcon = document.getElementById(
            "theme-toggle-dark-icon"
        );
        var themeToggleLightIcon = document.getElementById(
            "theme-toggle-light-icon"
        );

        // Change the icons inside the button based on previous settings
        if (
            localStorage.getItem("color-theme") === "dark" ||
            !("color-theme" in localStorage)
        ) {
            document.documentElement.classList.add("dark");
            themeToggleLightIcon.classList.remove("hidden");
        } else {
            document.documentElement.classList.remove("dark");
            themeToggleDarkIcon.classList.remove("hidden");
        }

        // // if set via local storage previously
        // if (!localStorage.getItem("color-theme")) {
        //   if (localStorage.getItem("color-theme") === "light") {
        //     document.documentElement.classList.add("dark");
        //     localStorage.setItem("color-theme", "dark");
        //   } else {
        //     document.documentElement.classList.remove("dark");
        //     localStorage.setItem("color-theme", "light");
        //   }

        // if NOT set via local storage previously
        // } else {
        //   if (document.documentElement.classList.contains("dark")) {
        //     document.documentElement.classList.remove("dark");
        //     localStorage.setItem("color-theme", "light");
        //   } else {
        //     document.documentElement.classList.add("dark");
        //     localStorage.setItem("color-theme", "dark");
        //   }
        // }

        var themeToggleBtn = document.getElementById("theme-toggle");

        themeToggleBtn.addEventListener("click", function () {
            // toggle icons inside button
            themeToggleDarkIcon.classList.toggle("hidden");
            themeToggleLightIcon.classList.toggle("hidden");

            // if set via local storage previously
            if (localStorage.getItem("color-theme")) {
                if (localStorage.getItem("color-theme") === "light") {
                    document.documentElement.classList.add("dark");
                    localStorage.setItem("color-theme", "dark");
                } else {
                    document.documentElement.classList.remove("dark");
                    localStorage.setItem("color-theme", "light");
                }

                // if NOT set via local storage previously
            } else {
                if (document.documentElement.classList.contains("dark")) {
                    document.documentElement.classList.remove("dark");
                    localStorage.setItem("color-theme", "light");
                } else {
                    document.documentElement.classList.add("dark");
                    localStorage.setItem("color-theme", "dark");
                }
            }
        });
    },
    
}
</script>
