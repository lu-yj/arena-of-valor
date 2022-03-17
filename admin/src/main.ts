import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-plus/dist/index.css'; // 否则消息提升的样式会发生错误

createApp(App).use(store).use(router).mount('#app');
