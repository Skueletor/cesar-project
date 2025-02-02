<template>
    <div class="matrix-input">
      <label>{{ label }}</label>
      <textarea
        v-model="inputText"
        placeholder='Ingresa la matriz en formato JSON, ej: [[1,2],[3,4]]'
        rows="3">
      </textarea>
      <button @click="parseMatrix">Actualizar</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MatrixInput',
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
        inputText: JSON.stringify(this.modelValue)
      }
    },
    methods: {
      parseMatrix() {
        try {
          const parsed = JSON.parse(this.inputText)
          this.$emit('update:modelValue', parsed)
        } catch (error) {
          alert("Error al parsear la matriz: " + error.message)
        }
      }
    }
  }
  </script>
  