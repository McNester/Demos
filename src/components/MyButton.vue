<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
div {
  @apply w-10 h-10 bg-red-900;
}
</style>
