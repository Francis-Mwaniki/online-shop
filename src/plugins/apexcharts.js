import { createApp } from 'vue'
import VueApexCharts from 'vue-apexcharts'
const app = createApp();
app.component('apexchart', VueApexCharts)
app.use(VueApexCharts);