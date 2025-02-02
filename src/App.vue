<template>
  <div :class="['container', { dark: darkMode }]">
    <header>
      <h1>Calculadora de Matrices Avanzada</h1>
      <div>
        <button @click="toggleDarkMode">{{ darkMode ? 'Modo Claro' : 'Modo Oscuro' }}</button>
      </div>
      <nav class="operation-nav">
        <button class="op-button" @click="goToSuma">+</button>
        <button class="op-button" @click="goToResta">-</button>
        <button class="op-button" @click="goToMultiplicacion">×</button>
      </nav>
    </header>
    <main>
      <transition name="game" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      darkMode: false
    }
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
    goToSuma() {
      this.$router.push('/suma');
    },
    goToResta() {
      this.$router.push('/resta');
    },
    goToMultiplicacion() {
      this.$router.push('/multiplicacion');
    }
  }
}
</script>

<style scoped>
/* Container & header styles remain unchanged */
.container {
  padding: 1rem;
}

/* Navigation buttons style */
.operation-nav {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.op-button {
  width: 60px;
  height: 60px;
  font-size: 2rem;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  outline: none;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;
}

.op-button:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.4);
}

/* Transition classes for router-view */
.game-enter-active {
  animation: gameEnter 0.6s ease-out;
}
.game-leave-active {
  animation: gameLeave 0.6s ease-out;
}
@keyframes gameEnter {
  0% {
    transform: translateY(40px) scale(0.8);
    opacity: 0;
  }
  60% {
    transform: translateY(-10px) scale(1.05);
    opacity: 1;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}
@keyframes gameLeave {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(40px) scale(0.8);
    opacity: 0;
  }
}
</style>