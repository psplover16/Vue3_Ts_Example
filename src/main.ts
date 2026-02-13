import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { pinia } from './stores';
import './assets/css/tailwind.css';

// 入口: 建立 Vue 應用並掛載
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');
