import { createApp } from "vue";
import Button from './components/Button.vue';
import makeStore from './store';

createApp(Button).use(makeStore()).mount('#common');