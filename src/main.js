import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import CompositionComponent from './components/CompositionComponent.vue';
import MainButton from './components/MainButton.vue';

// register component secara Global -> yang sering muncull diberbagai halaman
const app = createApp(App);
app.component("CompositionComponent", CompositionComponent);
app.component('MainButton', MainButton);
app.mount('#app')

// register component secara Local
// createApp(App).mount('#app')
