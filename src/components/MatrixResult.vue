<template>
  <div class="matrix-result">
    <label>{{ label }}</label>
    <div class="matrix-notation">
      <span class="bracket">[</span>
      <div v-for="(row, i) in result" :key="i" class="row">
        <span class="bracket">[</span>
        <span class="values">
          <span v-for="(col, j) in row" :key="j" class="col">
            {{ col }}<span v-if="j < row.length - 1">,</span>
          </span>
        </span>
        <span class="bracket">]</span>
      </div>
      <span class="bracket">]</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatrixResult',
  props: {
    result: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: "Resultado"
    }
  }
}
</script>

<style scoped>
.matrix-result {
  margin: 1rem 0;
}

/* Bracket notation styling */
.matrix-notation {
  display: inline-block;
  font-family: 'Courier New', monospace;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
}

.bracket {
  font-weight: bold;
  color: #FF77AA;
  margin: 0 0.25rem;
}

.row {
  margin-left: 1rem;
}

.values {
  margin: 0 0.25rem;
}

.col {
  margin-right: 0.25rem;
}
</style>
