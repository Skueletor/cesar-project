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

    <!-- Fase 2: Mostrar cuadrícula con inputs y corchetes dinámicos -->
    <transition name="fade">
      <div v-if="matrixGenerated" class="matrix-grid">
        <div class="matrix-wrapper">
          <!-- Corchete izquierdo -->
          <span class="bracket left" :style="bracketStyle">[</span>
          <table ref="matrixTable">
            <tbody>
              <tr v-for="(row, rowIndex) in matrix" :key="rowIndex">
                <td v-for="(cell, colIndex) in row" :key="colIndex">
                  <input type="number" v-model.number="matrix[rowIndex][colIndex]" />
                </td>
              </tr>
            </tbody>
          </table>
          <!-- Corchete derecho -->
          <span class="bracket right" :style="bracketStyle">]</span>
        </div>
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
      matrixGenerated: false,
      tableHeight: 0
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
        // Luego de renderizar, mide la altura de la tabla para ajustar el tamaño de los corchetes
        this.$nextTick(() => {
          if (this.$refs.matrixTable) {
            this.tableHeight = this.$refs.matrixTable.offsetHeight;
          }
        });
      } else {
        alert("Por favor, ingrese dimensiones válidas.");
      }
    }
  },
  computed: {
    // Calcula un estilo en línea para los corchetes basado en la altura de la tabla.
    // Se usa el 90% de la altura como font-size para dar un poco de margen.
    bracketStyle() {
      return {
        fontSize: this.tableHeight ? (this.tableHeight * 0.9) + 'px' : '2rem',
        lineHeight: this.tableHeight ? this.tableHeight + 'px' : '2rem'
      };
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
  text-align: center;
}

.matrix-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
}

/* Estilos para la tabla */
.matrix-wrapper table {
  border-collapse: collapse;
  margin: 0 7px; /* Espacio entre la tabla y los corchetes */
}

.matrix-wrapper td {
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 0.5rem;
}

/* Estilos para los corchetes (ahora elementos reales) */
.bracket {
  display: inline-block;
  font-family: monospace;
  color: #fff; /* Ajusta este color según tu paleta */
  user-select: none;
}
</style>
