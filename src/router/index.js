import { createRouter, createWebHashHistory } from 'vue-router'
import ListaEventos from '../views/ListaEventos.vue'
import DetalleEvento from '../views/DetalleEvento.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'ListaEventos',
    component: ListaEventos
  },
  {
    path: '/event/:id',
    name: 'DetalleEvento',
    props: true,
    component: DetalleEvento
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
