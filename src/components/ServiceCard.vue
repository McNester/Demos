<template>
  <div @click="expandWrapper" class="shortService">
    <h3 class="serviceHeadingFont" id="wrapperTitle">{{ title }}</h3>
    <img
      class="arrow"
      ref="arrow"
      src="../assets/icons/expandArrow.svg"
      alt="expand service arrow"
      loading="lazy"
    />
  </div>
  <div class="line"></div>
  <div :class="{ expanded: isOpen }" class="wrapper">
    <div class="serviceWrapper">
      <h3 id="title" class="serviceHeadingFont">
        {{ title }}
      </h3>
      <h4 id="description" class="inter">
        {{ description }}
      </h4>
      <h3 id="price" class="fira">
        {{ '$' + price }}
      </h3>
      <transparent-button @click="$emit('toggleServiceInfo'), $emit('infoOpen')" class="contactBtn"
        >More info</transparent-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'service-card',
  emits: ['toggleServiceInfo', 'infoOpen'],
  data() {
    return {
      isOpen: false
    }
  },
  props: {
    title: { type: String },
    description: { type: String },
    price: { type: Number }
  },
  methods: {
    expandWrapper() {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        this.rotateArrowUp()
      } else {
        this.rotateArrowDown()
      }
    },
    rotateArrowUp() {
      let arrow = this.$refs.arrow
      arrow.style.rotate = '-90deg'
    },
    rotateArrowDown() {
      let arrow = this.$refs.arrow
      arrow.style.rotate = '0deg'
    }
  }
}
</script>

<style scoped>
.line {
  @apply -mb-[1rem] bg-[rgb(9,9,9)] w-[100vw] h-1;
}
.wrapper {
  @apply overflow-hidden;
  max-height: 0;
  transition: all 1s ease;
}
.arrow {
  transition: all 0.7s ease;
}
#wrapperTitle {
  @apply text-[2rem];
}
.shortService {
  @apply flex justify-between px-[2rem] items-center w-[100vw] h-[2rem];
  cursor: pointer;
}
.expanded {
  max-height: 90rem;
}
.serviceWrapper {
  @apply w-[100vw] h-fit py-[5rem] flex flex-col justify-center items-center bg-[rgb(9,9,9)] text-center gap-10;
}
#title {
  @apply hidden text-5xl;
}
#description {
  @apply w-[90%] font-medium;
}
#price {
  @apply text-5xl;
}
@media (min-width: 722px) {
  #description {
    @apply w-[83%] text-[1.6rem] !important;
  }
}
@media (min-width: 1200px) {
  .shortService {
    @apply my-[2rem] px-[4rem];
  }
  .line {
    @apply -mb-[2rem];
  }
  #wrapperTitle {
    @apply text-[4rem];
  }
  .arrow {
    scale: 200%;
  }
  .serviceWrapper {
    @apply mr-[2vw] grid px-[3rem] h-[41rem];
    grid-template-columns: auto auto auto;
    grid-template-rows: 4rem 19rem;
  }
  #title {
    @apply block text-[8rem] text-left w-[53vw];
    grid-row: 1;
    grid-column: 1;
  }
  #description {
    @apply relative pl-[1vh] text-left;
    grid-row: 2;
    grid-column: 1;
    white-space: normal;
  }
  .contactBtn {
    width: 30% !important;
    grid-row: 3;
    grid-column: 1;
  }
  #price {
    @apply text-[4rem] relative pl-[5vw];
    grid-row: 3;
    grid-column: 2;
  }
}
</style>
