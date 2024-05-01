<template>
  <transition name="fade">
    <div v-show="isVisible" id="previewWrapper">
      <p class="headingFont" id="prev">Preview</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'nav-preview',
  props: {
    isVisible: { type: Boolean },
  }
}
</script>

<style scoped>
#previewWrapper {
  @apply opacity-0 flex justify-end items-start p-2 opacity-0 fixed top-0 mt-[4.5rem] h-40 w-full bg-black backdrop-blur-md bg-opacity-[20%] border-y-gray-500 border-y-2;
  z-index: 1000;
}

#prev {
  @apply font-light text-2xl;
}

@media (min-width: 722px) {
  #previewWrapper {
    @apply opacity-100;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.fade-enter-active {
  animation: fadeIn 0.3s ease;
}

.fade-leave-active {
  animation: fadeOut 0.3s ease forwards;
}
</style>
