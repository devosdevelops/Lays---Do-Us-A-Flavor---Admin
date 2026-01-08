import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import DashboardView from '../views/DashboardView.vue';
import SubmissionsView from '../views/SubmissionsView.vue';
import UsersView from '../views/UsersView.vue';
import VotesView from '../views/VotesView.vue';
import { useAuth } from '../composables/useAuth.js';

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/login', component: LoginView, name: 'Login' },
  { 
    path: '/dashboard', 
    component: DashboardView,
    name: 'Dashboard',
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard/submissions',
    component: SubmissionsView,
    name: 'Submissions',
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard/users',
    component: UsersView,
    name: 'Users',
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard/votes',
    component: VotesView,
    name: 'Votes',
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Route guard: check authentication before allowing access to protected routes
router.beforeEach((to, from, next) => {
  const { isAuthenticated } = useAuth();
  const isAuth = isAuthenticated.value;

  // If route requires authentication and user is not authenticated
  if (to.meta.requiresAuth && !isAuth) {
    // Redirect to login
    next('/login');
  } 
  // If trying to access login page but already authenticated
  else if (to.path === '/login' && isAuth) {
    // Redirect to dashboard
    next('/dashboard');
  } 
  // Otherwise allow navigation
  else {
    next();
  }
});

export default router;
