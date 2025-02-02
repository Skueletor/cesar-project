<template>
  <div class="suma-container">
    <h2><span class="operator">+</span> Suma de Matrices</h2>
    <MatrixEditor v-model:modelValue="matrixA" label="Matriz A" />
    <MatrixEditor v-model:modelValue="matrixB" label="Matriz B" />
    <button @click="sumarMatrices">Sumar</button>
    <transition name="fade">
      <div v-if="resultado !== null" class="resultado">
        <h3>Resultado</h3>
        <!-- Se invoca el componente MatrixResult pasándole el resultado -->
        <MatrixResult :result="resultado" label="Resultado" />
      </div>
    </transition>
  </div>
</template>

<script>
import MatrixEditor from './MatrixEditor.vue'
import MatrixResult from './MatrixResult.vue'
import { add } from 'mathjs'

export default {
  name: 'Suma',
  components: { MatrixEditor, MatrixResult },
  data() {
    return {
      matrixA: null,
      matrixB: null,
      resultado: null
    }
  },
  methods: {
    sumarMatrices() {
      try {
        if (this.matrixA && this.matrixB) {
          this.resultado = add(this.matrixA, this.matrixB)
        } else {
          alert('Por favor, genera ambas matrices primero.')
        }
      } catch (error) {
        alert('Error al sumar matrices: ' + error.message)
      }
    }
  }
}
</script>

<style scoped>
.suma-container {
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
