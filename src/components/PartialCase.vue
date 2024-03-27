<template>
  <div id="maskBorder">
    <img :src="getImage()" class="mask" />
  </div>
</template>

<script>
export default {
  name: 'partial-case',
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
  @apply scale-[50%];
  mask: url('../assets/icons/partialCaseMask.svg') no-repeat center;
  -webkit-mask: url('../assets/icons/partialCaseMask.svg') no-repeat center;
  mask-size: 7rem;
  -webkit-mask-size: 7rem;
  max-width: fit-content;
}
#maskBorder {
  @apply scale-[87%];
  @apply flex justify-center items-center rounded-[3rem] bg-none shadow w-[3.5rem] h-[11.8rem];
}
@media (min-width: 335px) {
  #maskBorder {
    @apply scale-[95%];
  }
}
@media (min-width: 360px) {
  #maskBorder {
    @apply scale-[105%];
  }
}
@media (min-width: 393px) {
  #maskBorder {
    @apply scale-[110%];
  }
}
@media (min-width: 414px) {
  #maskBorder {
    @apply scale-[118%];
  }
}
</style>
