<!-- src/components/MatrixEditor.vue -->
<template>
    <div class="matrix-editor">
      <!-- Fase 1: Ingresar dimensiones -->
      <div v-if="!matrixGenerated" class="dimension-input">
        <label>{{ label }} - Dimensiones:</label>
        <input type="number" v-model.number="rows" placeholder="Filas" min="1" />
        <span>x</span>
        <input type="number" v-model.number="cols" placeholder="Columnas" min="1" />
        <button @click="generateMatrix">Generar Matriz</button>
      </div>
  
      <!-- Fase 2: Mostrar cuadrícula con inputs -->
      <transition name="fade">
        <div v-if="matrixGenerated" class="matrix-grid">
          <table>
            <tbody>
              <tr v-for="(row, rowIndex) in matrix" :key="rowIndex">
                <td v-for="(cell, colIndex) in row" :key="colIndex">
                  <input type="number" v-model.number="matrix[rowIndex][colIndex]" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MatrixEditor',
    props: {
      modelValue: {
        type: Array,
        default: () => []
      },
      label: {
        type: String,
        default: "Matriz"
      }
    },
    data() {
      return {
        rows: 0,
        cols: 0,
        matrix: [],
        matrixGenerated: false
      }
    },
    methods: {
      generateMatrix() {
        if (this.rows > 0 && this.cols > 0) {
          // Inicializa la matriz con ceros
          this.matrix = Array.from({ length: this.rows }, () =>
            Array.from({ length: this.cols }, () => 0)
          );
          this.matrixGenerated = true;
          // Emite el valor inicial
          this.$emit('update:modelValue', this.matrix);
        } else {
          alert("Por favor, ingrese dimensiones válidas.");
        }
      }
    },
    watch: {
      matrix: {
        handler(newVal) {
          this.$emit('update:modelValue', newVal);
        },
        deep: true
      }
    }
  }
  </script>
  
  <style scoped>
  .dimension-input {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  .matrix-grid {
    margin-top: 1rem;
  }
  .matrix-grid table {
    border-collapse: collapse;
  }
  .matrix-grid td {
    border: 1px solid #ccc;
    padding: 0.5rem;
  }
  </style>
  