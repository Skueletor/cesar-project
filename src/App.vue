<!-- src/App.vue -->
<template>
  <div class="container">
    <!-- Solo se muestra el header (navegación) cuando la ruta no es "/" -->
    <header v-if="$route.path !== '/'">
      <nav>
        <router-link to="/suma" class="nav-button">Suma</router-link>
        <router-link to="/resta" class="nav-button">Resta</router-link>
        <router-link to="/multiplicacion" class="nav-button">Multiplicación</router-link>
      </nav>
    </header>
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
