<template>
  <p class="headingFont innerLink">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'inner-link'

}

</script>


<style scoped>
.innerLink {
  @apply text-[#373737] px-2 py-1;
  transition: all 0.3s ease;
}


@media (hover:hover) {
  .innerLink:hover {
    @apply font-black;

  }

  .innerLink:active {
    @apply font-bold;

  }

}
</style>
