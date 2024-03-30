<template>
  <button @touchstart="toggleActive" @touchend="toggleActive()" :class="{ active: isActive }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped>
button {
  @apply w-[10rem] h-9 bg-violet-800 rounded-3xl;
}

@media (hover: hover) {
  button {
    transition: all 0.3s ease;
  }
  button:hover {
    @apply scale-105 bg-violet-900;
  }
  button:active {
    @apply scale-100;
  }
}
@media (hover: none) {
  .active {
    @apply scale-95 bg-violet-900;
  }
}
</style>
