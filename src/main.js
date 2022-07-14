import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/tailwind.css'
import store from './store'
import Highcharts from "highcharts";
import Maps from "highcharts/modules/map";
import HighchartsVue from "highcharts-vue";
Maps(Highcharts);
createApp(App).use(store).use(router).use(HighchartsVue).mount('#app')