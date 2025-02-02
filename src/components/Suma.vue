<!-- src/components/Suma.vue -->
<template>
  <div class="suma-container">
    <h2>Suma de Matrices</h2>
    <MatrixEditor v-model:modelValue="matrixA" label="Matriz A" />
    <MatrixEditor v-model:modelValue="matrixB" label="Matriz B" />
    <button @click="sumarMatrices">Sumar</button>
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
import { add } from 'mathjs'

export default {
  name: 'Suma',
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
    sumarMatrices() {
      try {
        if (this.matrixA && this.matrixB) {
          this.resultado = add(this.matrixA, this.matrixB);
        } else {
          alert("Por favor, genera ambas matrices primero.");
        }
      } catch (error) {
        alert("Error al sumar matrices: " + error.message);
      }
    }
  }
}
</script>

<style scoped>
.suma-container h2 {
  margin-bottom: 1rem;
}
.resultado {
  margin-top: 1rem;
}
</style>
