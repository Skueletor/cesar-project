// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import OperationMenu from '../components/OperationMenu.vue'
import Suma from '../components/Suma.vue'
import Resta from '../components/Resta.vue'
import Multiplicacion from '../components/Multiplicacion.vue'

const routes = [
  { path: '/', component: OperationMenu },
  { path: '/suma', component: Suma },
  { path: '/resta', component: Resta },
  { path: '/multiplicacion', component: Multiplicacion }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
