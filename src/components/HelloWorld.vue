<script setup>

defineProps({
  msg: {
    type: String,
    default: ''
  }
})

</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

