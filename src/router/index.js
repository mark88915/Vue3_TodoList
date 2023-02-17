import { createRouter, createWebHistory } from 'vue-router'
import AddTodo from '../views/AddTodo.vue';
import ViewTodo from '../views/ViewTodo.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "viewTodo",
      component: ViewTodo
    },
    {
      path: "/addTodo",
      name: "addTodo",
      component: AddTodo
    },
    
  ]
})

export default router
