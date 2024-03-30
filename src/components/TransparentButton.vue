<template>
  <button
    @touchstart="toggleActive"
    @touchend="toggleActive"
    @click="scrollTo"
    :class="{ active: isActive }"
    class="inter"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'transparent-button',
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive
    },
    scrollTo() {
      console.log('whyyy')
      const element = document.getElementById('contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>
<style scoped>
button {
  @apply font-normal text-center rounded-3xl border border-violet-800 w-[70%] h-fit py-[1vh];
  transition: all 0.1s ease;
}

@media (hover: hover) {
  button {
    transition: all 0.3s ease;
  }
  button:hover {
    @apply scale-105 bg-violet-800;
  }
  button:active {
    @apply scale-100;
  }
}
@media (hover: none) {
  .active {
    @apply scale-95 bg-violet-800;
  }
}

@media (min-width: 1200px) {
  button {
    @apply w-[81%] text-[2rem] relative;
    border-radius: 4rem;
  }
}
</style>
