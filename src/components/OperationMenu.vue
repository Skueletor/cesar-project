<!-- src/components/OperationMenu.vue -->
<template>
    <div class="operation-menu">
      <h1>Calculadora de Matrices</h1>
      <div class="menu-options">
        <router-link to="/suma" class="menu-button">
          <span class="operator">+</span>
          <span>Suma</span>
        </router-link>
        <router-link to="/resta" class="menu-button">
          <span class="operator">–</span>
          <span>Resta</span>
        </router-link>
        <router-link to="/multiplicacion" class="menu-button">
          <span class="operator">×</span>
          <span>Multiplicación</span>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OperationMenu'
  }
  </script>
  
  <style scoped>
  .operation-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .menu-options {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }
  </style>
  