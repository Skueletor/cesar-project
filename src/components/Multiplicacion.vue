<!-- src/components/Multiplicacion.vue -->
<template>
  <div class="multiplicacion-container">
    <h2>Multiplicación de Matrices</h2>
    <!-- Editor para Matriz A -->
    <MatrixEditor v-model:modelValue="matrixA" label="Matriz A" />
    <!-- Editor para Matriz B -->
    <MatrixEditor v-model:modelValue="matrixB" label="Matriz B" />
    <button @click="multiplicarMatrices">Multiplicar</button>
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
import { multiply } from 'mathjs'

export default {
  name: 'Multiplicacion',
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
    multiplicarMatrices() {
      try {
        if (this.matrixA && this.matrixB) {
          this.resultado = multiply(this.matrixA, this.matrixB);
        } else {
          alert("Por favor, genera ambas matrices primero.");
        }
      } catch (error) {
        alert("Error al multiplicar matrices: " + error.message);
      }
    }
  }
}
</script>

<style scoped>
.multiplicacion-container h2 {
  margin-bottom: 1rem;
}
.resultado {
  margin-top: 1rem;
}
</style>
