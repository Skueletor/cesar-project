<template>
  <div class="resta-container">
    <h2>Resta de Matrices</h2>
    <MatrixInput v-model:modelValue="matrixA" label="Matriz A" />
    <MatrixInput v-model:modelValue="matrixB" label="Matriz B" />
    <button @click="restarMatrices">Restar</button>
    <transition name="fade">
      <MatrixResult v-if="resultado !== null" :result="resultado" label="Resultado" />
    </transition>
  </div>
</template>

<script>
import MatrixInput from './MatrixInput.vue'
import MatrixResult from './MatrixResult.vue'
import { subtract } from 'mathjs'

export default {
  name: 'Resta',
  components: { MatrixInput, MatrixResult },
  data() {
    return {
      matrixA: [],
      matrixB: [],
      resultado: null
    }
  },
  methods: {
    restarMatrices() {
      try {
        this.resultado = subtract(this.matrixA, this.matrixB)
      } catch (error) {
        alert("Error al restar matrices: " + error.message)
      }
    }
  }
}
</script>

<style scoped>
.resta-container h2 {
  margin-bottom: 1rem;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>