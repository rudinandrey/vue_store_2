import { createApp } from "vue";
import Main from './components/Main.vue';
import makeStore from './store';


createApp(Main).use(makeStore()).mount('#app');