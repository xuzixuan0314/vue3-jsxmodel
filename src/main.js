import { createApp } from 'vue';
import App from './App.jsx';
import './index.css';
import router from './router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import store from './store';
import IotSelect from '~/components/iotSelect.jsx'
const app = createApp(App)
app.component('IotSelect',IotSelect)
app
    .use(router)
    // .use(store)
    .use(ElementPlus, { size: 'default', zIndex: 3000 })
    .mount('#app');
