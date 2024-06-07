
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Services from '../views/Services.vue';
import Apply from '../views/Apply.vue';
import FAQ from '../views/Faq.vue';
import Contact from '../views/Contact.vue';
import Profile from '../views/Profile.vue';
import ApplicationStatus from '../views/ApplicationStatus.vue';
import Notifications from '../views/Notifications.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/apply', component: Apply },
  { path: '/faq', component: FAQ },
  { path: '/contact', component: Contact },
  { path: '/profile', component: Profile },
  { path: '/application-status', component: ApplicationStatus },
  { path: '/notifications', component: Notifications },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/:pathMatch(.*)*', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
