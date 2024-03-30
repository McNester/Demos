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
  @apply scale-[32%];
  mask: url('../assets/icons/partialCaseMask.svg') no-repeat center;
  -webkit-mask: url('../assets/icons/partialCaseMask.svg') no-repeat center;
  mask-size: 11rem;
  -webkit-mask-size: 11rem;
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
@media (min-width: 500px) {
  #maskBorder {
    @apply scale-[135%];
  }
}
@media (min-width: 546px) {
  #maskBorder {
    @apply scale-[155%] ml-3;
  }
}
@media (min-width: 722px) {
  #maskBorder {
    @apply scale-[110%] ml-[15.8vw];
  }
}
@media (min-width: 760px) {
  #maskBorder {
    @apply scale-[120%] ml-[16.4vw];
  }
}
@media (min-width: 822px) {
  #maskBorder {
    @apply scale-[135%] ml-[17.4vw];
  }
}
@media (min-width: 900px) {
  #maskBorder {
    @apply ml-[18vw];
  }
}
@media (min-width: 930px) {
  #maskBorder {
    @apply mb-[5vh] scale-[150%];
  }
}
@media (min-width: 1000px) {
  #maskBorder {
    @apply scale-[165%] ml-[19vw];
  }
}
@media (min-width: 1150px) {
  #maskBorder {
    @apply scale-[185%] ml-[19.8vw];
  }
}
@media (min-width: 1288px) {
  #maskBorder {
    @apply scale-[198%];
    @apply ml-[21vw];
  }
}
@media (min-width: 1328px) {
  #maskBorder {
    @apply scale-[180%] ml-[24vw];
  }
}
@media (min-width: 1377px) {
  #maskBorder {
    @apply scale-[220%] ml-[23vw];
  }
}
@media (min-width: 1440px) {
  #maskBorder {
    @apply scale-[230%];
  }
}
</style>
