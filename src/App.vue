<template>
  <div class="container">
    <!-- Header animado solo en rutas distintas de "/" -->
    <transition name="slide-down">
      <header v-if="$route.path !== '/'" class="header">
        <nav>
          <router-link to="/suma" class="nav-button">Suma</router-link>
          <router-link to="/resta" class="nav-button">Resta</router-link>
          <router-link to="/multiplicacion" class="nav-button">Multiplicación</router-link>
        </nav>
      </header>
    </transition>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>