<template>
  <a target="_blank" href="https://www.youtube.com" id="maskBorder">
    <img :src="getImage()" class="mask" />
  </a>
</template>

<script>
export default {
  name: 'portfolio-card',
  props: {
    imageNumber: { type: Number }
  },
  methods: {
    getImage() {
      switch (this.imageNumber) {
        case 1:
          return case1
        case 2:
          return case2
        case 3:
          return case3
        case 4:
          return case4
        case 5:
          return case5
      }
    }
  }
}
</script>

<script setup>
import case1 from '../assets/icons/case1.png'
import case2 from '../assets/icons/case2.png'
import case3 from '../assets/icons/case3.png'
import case4 from '../assets/icons/case4.png'
import case5 from '../assets/icons/case5.png'
</script>

<style scoped>
.mask {
  @apply scale-50;
  mask: url('../assets/icons/portfolioMask.svg') no-repeat center;
  -webkit-mask: url('../assets/icons/portfolioMask.svg') no-repeat center;
  mask-size: 16.7rem;
  -webkit-mask-size: 16.7rem;
  max-width: fit-content;
}
#maskBorder {
  @apply scale-[110%];
  @apply flex justify-center items-center rounded-lg bg-white w-[8.5rem] h-[11.8rem];
}
@media (min-width: 500px) {
  #maskBorder {
    @apply scale-[130%];
  }
}
@media (min-width: 546px) {
  #maskBorder {
    @apply scale-[145%] !important;
  }
}
</style>
