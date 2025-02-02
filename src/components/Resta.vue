<template>
  <div class="resta-container">
    <h2><span class="operator">–</span> Resta de Matrices</h2>
    <MatrixEditor v-model:modelValue="matrixA" label="Matriz A" />
    <MatrixEditor v-model:modelValue="matrixB" label="Matriz B" />
    <button @click="restarMatrices">Restar</button>
    <transition name="fade">
      <div v-if="resultado !== null" class="resultado">
        <h3>Resultado</h3>
        <MatrixResult :result="resultado" label="Resultado" />
      </div>
    </transition>
  </div>
</template>

<script>
import MatrixEditor from './MatrixEditor.vue'
import MatrixResult from './MatrixResult.vue'
import { subtract } from 'mathjs'

export default {
  name: 'Resta',
  components: { MatrixEditor, MatrixResult },
  data() {
    return {
      matrixA: null,
      matrixB: null,
      resultado: null
    }
  },
  methods: {
    restarMatrices() {
      try {
        if (this.matrixA && this.matrixB) {
          this.resultado = subtract(this.matrixA, this.matrixB)
        } else {
          alert('Por favor, genera ambas matrices primero.')
        }
      } catch (error) {
        alert('Error al restar matrices: ' + error.message)
      }
    }
  }
}
</script>

<style scoped>
.resta-container {
  margin: 1rem;
}
.operator {
  color: #f77;
  font-weight: bold;
  margin-right: 0.5rem;
  font-size: 1.2em;
}
.resultado {
  margin-top: 1rem;
}
</style>
