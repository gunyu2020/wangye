import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router'; // 引入路由配置
import './style.css';          // 引入全局样式

const app = createApp(App);
const pinia = createPinia();

// 使用路由和状态管理
app.use(router);
app.use(pinia);

app.mount('#app');
