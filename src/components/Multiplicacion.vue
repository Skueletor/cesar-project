<template>
  <div class="multiplicacion-container">
    <h2>Multiplicación de Matrices</h2>
    <MatrixInput v-model:modelValue="matrixA" label="Matriz A" />
    <MatrixInput v-model:modelValue="matrixB" label="Matriz B" />
    <button @click="multiplicarMatrices">Multiplicar</button>
    <transition name="fade">
      <MatrixResult v-if="resultado !== null" :result="resultado" label="Resultado" />
    </transition>
  </div>
</template>

<script>
import MatrixInput from './MatrixInput.vue'
import MatrixResult from './MatrixResult.vue'
import { multiply } from 'mathjs'

export default {
  name: 'Multiplicacion',
  components: { MatrixInput, MatrixResult },
  data() {
    return {
      matrixA: [],
      matrixB: [],
      resultado: null
    }
  },
  methods: {
    multiplicarMatrices() {
      try {
        this.resultado = multiply(this.matrixA, this.matrixB)
      } catch (error) {
        alert("Error al multiplicar matrices: " + error.message)
      }
    }
  }
}
</script>

<style scoped>
.multiplicacion-container h2 {
  margin-bottom: 1rem;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>