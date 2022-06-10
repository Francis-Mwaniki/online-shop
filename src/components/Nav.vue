<template>
  <div class="min-h-full">
    <div class="bg-gradient-to-r from-orange-900 via-slate-900 to-slate-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center mt-1">
            <div class="flex-shrink-0">
              <img class="h-8 w-8" src="@/assets/shoppingcart.svg" alt="Workflow" />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-12">
                <div class="bg-gray-900  text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm flex justify-start md:gap-11 ">
                    <button class=" flex justify-center gap-1"> <img class="h-8 w-8" src="@/assets/home-1.svg" alt="Workflow" /><router-link  to="/" class=" pt-2 hover:underline hover:border-b-black uppercase">home</router-link></button>
                      <button class=" flex justify-center gap-1"> <img class="h-8 w-8" src="@/assets/products.svg" alt="Workflow" /> <router-link :to="{name:'products'}" class="pt-2 hover:underline hover:border-b-black uppercase">products</router-link></button>
                        <button class=" flex justify-center gap-1"> <img class="h-8 w-8" src="@/assets/pricing.svg" alt="Workflow" /><router-link :to="{name:'pricing'}" class="pt-2 hover:underline hover:border-b-black uppercase">pricing</router-link></button>
                          <button class=" flex justify-center gap-1"> <img class="h-8 w-8" src="@/assets/services.svg" alt="Workflow" /> <router-link :to="{name:'services'}" class="pt-2 hover:underline hover:border-b-black uppercase">services</router-link></button>
                           <button class=" flex justify-center gap-1"> <img class="h-8 w-8" src="@/assets/about.svg" alt="Workflow" /><router-link  :to="{name:'about'}" class="pt-2 hover:underline hover:border-b-black uppercase">about</router-link></button>
                    <button class=" flex justify-center gap-1"> <img class="h-8 w-8" src="@/assets/orders.svg" alt="Workflow" />   <router-link :to="{name:'ShoppingCart'}" class="pt-2 hover:underline hover:border-b-black uppercase">orders</router-link></button>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <button type="button" class= " bg-orange-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>

              <!-- Profile dropdown -->
              <Menu as="div" class="ml-3 relative">
                <div>
                  <MenuButton class=" md:my-4 max-w-xs p-1 bg-orange-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span class="sr-only">Open user menu</span>
                    <router-link  :to="{name:'signup'}" class=" uppercase items-baseline hover:underline hover:border-b-black m-1 text-bookmark-white">signup</router-link>
                     <button class="items-baseline h-8 w-20 rounded-md p-1  uppercase hover:bg-blue-800 m-1 md:hover:rounded-md md:hover:ring-2 md:hover:border-orange-400 md:hover:border  bg-slate-800"> <router-link  class="text-bookmark-white" :to="{name:'login'}">login</router-link></button>
                    <img class="h-14 w-14 rounded-full" src="@/assets/avatar.jpeg" alt="" />
                  </MenuButton>
                </div>
              </Menu>
            </div>
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
            <button type="button" class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
 
</template>

<script>
export default {
  name:'Nav',
}
</script>