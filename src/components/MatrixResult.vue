<template>
    <div class="matrix-result">
      <label>{{ label }}</label>
      <pre>{{ formattedResult }}</pre>
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
    },
    computed: {
      formattedResult() {
        try {
          return JSON.stringify(this.result, null, 2)
        } catch (error) {
          return "Error al formatear el resultado"
        }
      }
    }
  }
  </script>
  