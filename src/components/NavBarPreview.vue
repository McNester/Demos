<template>
  <transition name="fade">
    <div v-show="isVisible" id="previewWrapper">
      <prev-big @click="goToAbout" id="prevFirst" :teaser="getFirstTeaser" :title="getFirstTitle"></prev-big>
      <prev-big @click="goToAbout" id="prevSecond" class="big" :teaser="getSecondTeaser"
        :title="getSecondTitle"></prev-big>

      <prev-small @click="goToAbout" :title="getFirstCase" id="prevCaseFirst"></prev-small>
      <prev-small @click="goToAbout" :title="getSecondCase" id="prevCaseSecond"></prev-small>
      <prev-small @click="goToAbout" :title="getThirdCase" id="prevCaseThird"></prev-small>

    </div>
  </transition>
</template>

<script>
export default {
  name: 'nav-preview',
  data() {
    return {
      isOnHover: false,
      previews: [
        {
          firstTitle: 'Cases first case title',
          firstTeaser: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac sodales est.',
          secondTitle: 'Cases second case title',
          secondTeaser: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac sodales est.',
          thirdCase: 'Cases third case title',
          fourthCase: 'Cases fourth case title',
          fifthCase: 'Cases fifth case title'
        },
        {
          firstTitle: 'Services first case title',
          firstTeaser: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac sodales est.',
          secondTitle: 'Services second case title',
          secondTeaser: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac sodales est.',
          thirdCase: 'Services third case title',
          fourthCase: 'Services fourth case title',
          fifthCase: 'Services fifth case title'
        },
        {
          firstTitle: 'About first case title',
          firstTeaser: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac sodales est.',
          secondTitle: 'About second case title',
          secondTeaser: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac sodales est.',
          thirdCase: 'About third case title',
          fourthCase: 'About fourth case title',
          fifthCase: 'About fifth case title'
        },
      ],
    }
  },
  props: {
    isVisible: { type: Boolean },
    prevId: { type: Number },
  },
  methods: {
    goToAbout() {
      this.$router.push('/about')
    }
  }, computed: {
    getFirstTitle() {
      if (this.prevId > -1) {
        return this.previews[this.prevId].firstTitle;
      }
      return this.previews[0].firstTitle;
    },
    getFirstTeaser() {
      if (this.prevId > -1) {
        return this.previews[this.prevId].firstTeaser;
      }
      return this.previews[0].firstTeaser;
    },
    getSecondTitle() {
      if (this.prevId > -1) {
        return this.previews[this.prevId].secondTitle;
      }
      return this.previews[0].secondTitle;
    },
    getSecondTeaser() {
      if (this.prevId > -1) {
        return this.previews[this.prevId].secondTeaser;
      }
      return this.previews[0].secondTeaser;
    },
    getFirstCase() {
      if (this.prevId > -1) {
        return this.previews[this.prevId].thirdCase;
      }
      return this.previews[0].thirdCase;
    },
    getSecondCase() {
      if (this.prevId > -1) {
        return this.previews[this.prevId].fourthCase;
      }
      return this.previews[0].fourthCase;
    },
    getThirdCase() {
      if (this.prevId > -1) {
        return this.previews[this.prevId].fourthCase;
      }
      return this.previews[0].fourthCase;
    }
  }
}
</script>

<style scoped>
#previewWrapper {
  @apply opacity-0 fixed top-0 mt-[4.5rem] h-56 w-full bg-black backdrop-blur-md bg-opacity-[20%] border-y-[#373737] border-y-2;
  z-index: 1000;
  @apply grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
}

#prevFirst {
  grid-column: 1;
  grid-row: 1 / span 3;
}

#prevSecond {
  grid-column: 2;
  grid-row: 1 / span 3;
  @apply border-x-[#373737] border-x-2;
}

#prevCaseFirst {
  grid-column: 3;
  grid-row: 1;
}

#prevCaseSecond {
  grid-column: 3;
  grid-row: 2;
  @apply border-y-[#373737] border-y-2;
}

#prevCaseThird {
  grid-column: 3;
  grid-row: 3;
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
