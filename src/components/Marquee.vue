<template>
  <div class="marquee-container headingFont">
    <div
      class="marquee"
      :class="{
        toLeft: getDirection['toLeft'],
        toRight: getDirection['toRight'],
        big: getSize['big'],
        small: getSize['small'],
        medium: getSize['medium']
      }"
    >
      <span v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" class="justify-self-center self-center"
        >Web3 | Web2 | Telegram | Softs
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'marquee',
  props: {
    direction: { type: String },
    size: { type: String }
  },
  computed: {
    getDirection() {
      let direction = {
        toLeft: true,
        toRight: true
      }
      if (this.direction === 'toLeft') {
        direction['toLeft'] = true
        direction['toRight'] = false
      } else {
        direction['toLeft'] = false
        direction['toRight'] = true
      }
      return direction
    },
    getSize() {
      let size = {
        big: true,
        medium: true,
        small: true
      }
      console.log(this.size === 'big')
      if (this.size === 'big') {
        size['big'] = true
        size['medium'] = false
        size['small'] = false
      } else if (this.size === 'medium') {
        size['big'] = false
        size['medium'] = true
        size['small'] = false
      } else if (this.size === 'small') {
        size['big'] = false
        size['medium'] = false
        size['small'] = true
      }
      return size
    }
  }
}
</script>

<style scoped>
.marquee-container {
  pointer-events: none;
  overflow-x: hidden;
  position: relative;
  @apply text-2xl;
  @apply flex h-fit py-2 -mb-[7rem] mt-[6rem] font-bold lg:text-8xl;
}
.big {
  @apply text-2xl !important;
  @apply lg:text-8xl !important;
}
.medium {
  @apply text-xl !important;
  @apply lg:text-7xl !important;
}
.small {
  @apply text-lg !important;
  @apply lg:text-6xl !important;
}

.marquee {
  display: inline-block;
  white-space: nowrap;
  padding: 2rem 0;
}
.toLeft {
  animation: toLeft 80s linear infinite;
}
.toRight {
  animation: toRight 80s linear infinite;
}
.marquee:after {
  content: ' | Web3 | Web2 | Telegram | Softs';
}

@keyframes toRight {
  from {
    transform: translateX(-50.999%);
  }
  to {
    transform: translateX(0%);
  }
}

@keyframes toLeft {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50.999%);
  }
}
</style>
