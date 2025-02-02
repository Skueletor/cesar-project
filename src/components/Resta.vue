<!-- src/components/Resta.vue -->
<template>
  <div class="resta-container">
    <h2>Resta de Matrices</h2>
    <MatrixEditor v-model:modelValue="matrixA" label="Matriz A" />
    <MatrixEditor v-model:modelValue="matrixB" label="Matriz B" />
    <button @click="restarMatrices">Restar</button>
    <transition name="fade">
      <div v-if="resultado !== null" class="resultado">
        <h3>Resultado</h3>
        <pre>{{ resultadoFormatted }}</pre>
      </div>
    </transition>
  </div>
</template>

<script>
import MatrixEditor from './MatrixEditor.vue'
import { subtract } from 'mathjs'

export default {
  name: 'Resta',
  components: { MatrixEditor },
  data() {
    return {
      matrixA: null,
      matrixB: null,
      resultado: null
    }
  },
  computed: {
    resultadoFormatted() {
      return JSON.stringify(this.resultado, null, 2);
    }
  },
  methods: {
    restarMatrices() {
      try {
        if (this.matrixA && this.matrixB) {
          this.resultado = subtract(this.matrixA, this.matrixB);
        } else {
          alert("Por favor, genera ambas matrices primero.");
        }
      } catch (error) {
        alert("Error al restar matrices: " + error.message);
      }
    }
  }
}
</script>

<style scoped>
.resta-container h2 {
  margin-bottom: 1rem;
}
.resultado {
  margin-top: 1rem;
}
</style>
