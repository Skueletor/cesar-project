<template>
    <transition name="menu" mode="out-in">
      <div class="menu-container">
        <h2>Elige una Operación</h2>
        <div class="menu-buttons">
          <button class="menu-button" @click="selectOperation('suma')">+</button>
          <button class="menu-button" @click="selectOperation('resta')">-</button>
          <button class="menu-button" @click="selectOperation('multiplicacion')">×</button>
        </div>
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    name: 'OperationMenu',
    methods: {
      selectOperation(op) {
        // Anima y luego navega a la operación seleccionada
        setTimeout(() => {
          this.$router.push(`/${op}`);
        }, 400);
      }
    }
  }
  </script>
  
  <style scoped>
  .menu-container {
    text-align: center;
    padding: 2rem;
  }
  .menu-container h2 {
    color: #fff;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  .menu-buttons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }
  .menu-button {
    width: 80px;
    height: 80px;
    font-size: 2rem;
    border: none;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    cursor: pointer;
    transition: transform 0.3s ease, background 0.3s ease;
  }
  .menu-button:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.4);
  }
  .menu-enter-active {
    animation: menuEnter 0.5s ease-out;
  }
  .menu-leave-active {
    animation: menuLeave 0.5s ease-out;
  }
  @keyframes menuEnter {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes menuLeave {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-50px);
      opacity: 0;
    }
  }
  </style>