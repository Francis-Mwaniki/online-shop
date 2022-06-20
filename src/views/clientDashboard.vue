<template>
<div>
    <TransitionRoot as="template">
        <dialog as="div" class="relative z-40 md:hidden">
            <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </TransitionChild>

            <div class="fixed inset-0 z-40 flex">
                <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
                    <DialogPanel class="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4">
                        <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                            <div class="absolute top-0 right-0 -mr-12 pt-2">
                                <button type="button" class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span class="sr-only">Close sidebar</span>
                                    <XIcon class="h-6 w-6 dark:text-orange-800 text-black" aria-hidden="true" />
                                </button>
                            </div>
                        </TransitionChild>
                        <div class="flex flex-shrink-0 items-center px-4">
                            <img class="h-8 w-auto" src="@/assets/avatar.jpeg" alt="Workflow" />
                        </div>
                        <div class="mt-5 h-0 flex-1 overflow-y-auto">
                            <nav class="space-y-1 px-2">
                                <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'group flex items-center px-2 py-2 text-base font-medium rounded-md']">
                                    <component :is="item.icon" :class="[item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300', 'mr-4 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
                                    {{ item.name }}
                                </a>
                            </nav>
                        </div>
                    </DialogPanel>
                </TransitionChild>
                <div class="w-14 flex-shrink-0" aria-hidden="true">

                </div>
            </div>
        </dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex min-h-0 flex-1 flex-col bg-gray-800">
            <div class="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4">
                <img class="h-10 w-auto rounded-lg p-1 transition-all duration-500 transform hover:scale-150" src="@/assets/avatar.jpeg" alt="Workflow" />
            </div>
            <div class="flex flex-1 flex-col overflow-y-auto">
                <nav class="flex-1 space-y-1 px-2 py-4">
                    <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
                        <component :is="item.icon" :class="[item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300', 'mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
                        {{ item.name }}
                    </a>
                </nav>
            </div>
        </div>
    </div>
    <div class="flex flex-col md:pl-64">
        <div class="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white dark:bg-slate-700 shadow">
            <button type="button" class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden" @click="sidebarOpen = true">
                <!--  <span class="sr-only">Open sidebar</span> -->
                <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
            </button>
            <div class="flex flex-1 justify-between px-4">
                <div class="flex flex-1">
                    <form class="flex w-full md:ml-0" action="#" method="GET">
                        <label for="search-field" class="sr-only ">Search</label>
                        <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                <SearchIcon class="h-5 w-5" aria-hidden="true" />
                            </div>
                            <input id="search-field" class=" dark:bg-blue-300 focus:border focus:border-gray-300 focus:rounded-lg  block h-full w-full border-transparent py-1 pl-8 pr-3 text-gray-900 dark:text-orange-800 placeholder-gray-500  focus:placeholder-gray-400 focus:outline-none focus:ring-3 sm:text-sm" placeholder="Search" type="search" name="search" />
                        </div>
                    </form>
                </div>
                <div class="ml-4 flex items-center md:ml-6">

                    <!-- Profile dropdown -->
                    <menu as="div" class="relative ml-3">
                        <div>
                            <MenuButton class="flex max-w-xs items-center rounded-full bg-white dark:bg-slate-800   text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                <!--  <span class="sr-only">Open user menu</span> -->
                                <img class="h-8 w-8 rounded-full" src="@/assets/mwaniki1.jpeg" alt="" @click="showMenuBtn" />
                            </MenuButton>
                        </div>
                        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                            <div class="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-slate-800   py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" v-show="showMenu">
                                <div v-for="item in userNavigation" :key="item.name">
                                    <a :href="item.href" class=" bg-gray-100 dark:bg-slate-800 dark:text-white block px-4 py-2 text-sm text-gray-700">{{ item.name }}</a>
                                </div>
                            </div>
                        </transition>
                    </menu>
                </div>
            </div>
        </div>

        <main class="flex-1">
            <div class="py-6">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                    <h1 class="text-2xl font-semibold text-gray-900 dark:text-bookmark-white">Dashboard</h1>
                </div>
                <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                    <div class=" grid md:grid-rows-1 grid-rows-2 grid-cols-2 md:grid-cols-4   bg-blue-400 dark:bg-slate-900 rounded-md justify-center">
                        <div class=" m-1 rounded-md bg-bookmark-white dark:bg-slate-600 text-black dark:text-gray-200 mx-auto h-40 w-40 justify-center items-center flex container md:hover:translate-x-10 hover:transform hover:opacity-70"><strong>Products <span><svg class=" p-2  h-11 w-11 bg-blue-300 dark:bg-cyan-600 dark:border  dark:border-red-400 rounded-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="30px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M10 16V8a2 2 0 0 1 2-2h9V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-1h-9a2 2 0 0 1-2-2zm3-8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h9V8h-9zm3 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" />
                                    </svg></span></strong> </div>
                        <div class=" m-1 rounded-md bg-bookmark-white dark:bg-slate-600 text-black dark:text-gray-200 mx-auto h-40 w-40 justify-center items-center flex container md:hover:translate-x-10 hover:transform hover:opacity-70"><strong>Price <span> <svg class=" p-2  h-11 w-11 bg-blue-300 dark:bg-cyan-600 dark:border  dark:border-red-400 rounded-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="30px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M5 22h14a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1h-3v-.777c0-2.609-1.903-4.945-4.5-5.198A5.005 5.005 0 0 0 7 7v1H4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2zm12-12v2h-2v-2h2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-2 3h2v2H7v-2z" />
                                    </svg></span> </strong> </div>
                        <div class=" m-1 rounded-md bg-bookmark-white dark:bg-slate-600 text-black dark:text-gray-200 mx-auto h-40 w-40 justify-center items-center flex container md:hover:translate-x-10 hover:transform hover:opacity-70"><strong>Service <span>
                                    <svg class=" p-2 h-11 w-11 bg-blue-300 dark:bg-cyan-600 dark:border  dark:border-red-400 rounded-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="30px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                                        <path fill="none" d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z" />
                                        <path fill="currentColor" d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z" />
                                    </svg></span> </strong> </div>
                        <div class=" m-1 rounded-md bg-bookmark-white dark:bg-slate-600 text-black dark:text-gray-200 mx-auto h-40 w-40 justify-center items-center flex container md:hover:translate-x-10 hover:transform hover:opacity-70"><strong>Profits <span> <svg class=" p-2  h-11 w-11 bg-blue-300 dark:bg-cyan-600 dark:border  dark:border-red-400  rounded-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="30px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
                                        <g fill="currentColor">
                                            <path d="M15 13v1H1.5l-.5-.5V0h1v13h13Z" />
                                            <path d="M13 3.207L7.854 8.354h-.708L5.5 6.707l-3.646 3.647l-.708-.708l4-4h.708L7.5 7.293l5.146-5.147h.707l2 2l-.707.708L13 3.207Z" />
                                        </g>
                                    </svg></span></strong> </div>

                    </div>
                    <div class="py-4 bg-slate-300 dark:bg-slate-800 m-1">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

                                <tr>
                                    <th scope="col" class="uppercase px-6 py-3">Transaction</th>
                                    <th scope="col" class="uppercase px-6 py-3">Date & Time</th>
                                    <th scope="col" class="uppercase px-6 py-3">Amount</th>
                                    <th scope="col" class="uppercase px-6 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for=" item in items" :key="item">
                                    <td class="px-6 py-4">
                                        {{ item.transaction }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ item.datetime }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ item.amount }}
                                    </td>
                                    <td class="px-6 py-4">
                                        <span class="text-green-800 bg-green-300 px-3 py-1 rounded-md" v-if="item.statusTransaction == 'completed'">
                                            {{ item.statusTransaction }}
                                        </span>
                                        <span class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md" v-else-if="item.statusTransaction == 'progress'">
                                            {{ item.statusTransaction }}
                                        </span>
                                        <span class="text-red-800 bg-red-300 px-3 py-1 rounded-md" v-else>
                                            {{ item.statusTransaction }}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </main>
    </div>
</div>
</template>

<script>
import {
    Dialog,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import {
    BellIcon,
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    MenuAlt2Icon,
    UsersIcon,
    XIcon,
} from '@heroicons/vue/outline'
import {
    SearchIcon
} from '@heroicons/vue/solid'
export default {
    name: 'clientDashboard',
    data() {
        return {
            showMenu: false,
            sidebarOpen: false,
            navigation: [{
                    name: 'Dashboard',
                    href: '#',
                    icon: HomeIcon,
                    current: true
                },
                {
                    name: 'Team',
                    href: '#',
                    icon: UsersIcon,
                    current: true
                },
                {
                    name: 'Projects',
                    href: '#',
                    icon: FolderIcon,
                    current: false
                },
                {
                    name: 'Calendar',
                    href: '#',
                    icon: CalendarIcon,
                    current: false
                },
                {
                    name: 'Documents',
                    href: '#',
                    icon: InboxIcon,
                    current: false
                },
                {
                    name: 'Reports',
                    href: '#',
                    icon: ChartBarIcon,
                    current: false
                },
            ],
            userNavigation: [{
                    name: 'Your Profile',
                    href: '#'
                },
                {
                    name: 'Settings',
                    href: '#'
                },
                {
                    name: 'Sign out',
                    href: '#'
                },
            ],
            items: [{
                    transaction: "Payment from Francis",
                    datetime: "Apr 22, 2022",
                    amount: "Ksh.450.000",
                    statusTransaction: "completed",
                },
                {
                    transaction: "Payment from Ice blues",
                    datetime: "May 2, 2022",
                    amount: "Ksh.250.000",
                    statusTransaction: "completed",
                },
                {
                    transaction: "Payment from Afla jumia",
                    datetime: "May 5, 2022",
                    amount: "Ksh.150.000",
                    statusTransaction: "progress",
                },
                {
                    transaction: "Payment failed from Kinuthia",
                    datetime: "May 5, 2022",
                    amount: "Ksh.180.000",
                    statusTransaction: "cancelled",
                },
            ],
        }
    },
    components: {

    },
    methods: {
        showMenuBtn() {
            this.showMenu = !this.showMenu;
        }
    }
}
</script>
