<template>
  <div class="container">
    <transition name="slide-down">
      <header v-if="$route.path !== '/'" class="header">
        <nav>
          <router-link to="/suma" class="nav-button">+</router-link>
          <router-link to="/resta" class="nav-button">−</router-link>
          <router-link to="/multiplicacion" class="nav-button">×</router-link>
        </nav>
      </header>
    </transition>
    <main>
      <router-view />
    </main>
    <!-- New footer -->
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: { Footer }
}
</script>