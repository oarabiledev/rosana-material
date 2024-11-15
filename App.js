import { $createApp, $router } from 'rosana';

import mainPage from './pages/+homePage.js';

window.app = $createApp(mainPage).mount('#app');