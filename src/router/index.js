// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Suma from '../components/Suma.vue'
import Resta from '../components/Resta.vue'
import Multiplicacion from '../components/Multiplicacion.vue'

const Empty = {
  template: `<div></div>`
}

const routes = [
  { path: '/', component: Empty },
  { path: '/suma', component: Suma },
  { path: '/resta', component: Resta },
  { path: '/multiplicacion', component: Multiplicacion }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
