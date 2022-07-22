<template>
<button type="button" class="m-1 p-10 bg-slate-700 rounded-lg  text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-slate-900">
    <button class=""  @click="clickedUser">
        <button class=" p-1 outline-none border-0 gap-5 ">
            <button value="Admin" class="p-5    md:border-rose-500 md:border-b md:border-r "  @click="redirectAdmin">Go Main Admin</button>
            <button value="Client" class=" p-5  md:border-rose-500 md:border-b md:border-l"  @click="redirectClient">Go to Signup</button>
        </button>
    </button>
</button>
</template>

<script>
export default {
    name: 'Users',
    data() {
        return {
            clicked: false,
        }
    },
    methods: {
        clickedUser() {
            this.clicked = true;
        },
        redirectClient(){
            this.$router.push({path:'/signup'})
        },
        redirectAdmin(){
            this.$router.push({path:'/AdminDashboard'})
        }
    }
}
</script>

<style>

</style>
