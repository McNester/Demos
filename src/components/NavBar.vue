<template>
  <transition name="fade">
    <nav v-show="isMenu">
      <ul id="links" class="inter">
        <div @click="toggleChoice(0), scrollTo(options[0].name)" class="linkWrapper">
          <li :class="{ chosen: chosenId == 0 }"><a>Home</a></li>
          <div class="line"></div>
        </div>
        <div @click="toggleChoice(1), scrollTo(options[1].name)" class="linkWrapper">
          <li :class="{ chosen: chosenId == 1 }"><a>About</a></li>
          <div class="line"></div>
        </div>
        <div @click="toggleChoice(2), scrollTo(options[2].name)" class="linkWrapper">
          <li :class="{ chosen: chosenId == 2 }">
            <a>Portfolio</a>
          </li>
          <div class="line"></div>
        </div>
        <div @click="toggleChoice(3), scrollTo(options[3].name)" class="linkWrapper">
          <li :class="{ chosen: chosenId == 3 }"><a>Services</a></li>
          <div class="line"></div>
        </div>
      </ul>
    </nav>
  </transition>
</template>

<script>
export default {
  name: 'my-nav',
  props: {
    isMenu: false
  },
  data() {
    return {
      chosenId: -1,
      options: [
        { id: 1, name: 'main' },
        { id: 2, name: 'about' },
        { id: 3, name: 'portfolio' },
        { id: 4, name: 'services' }
      ]
    }
  },
  methods: {
    toggleChoice(id) {
      this.chosenId = id
    },
    scrollTo(sectionId) {
      this.$emit('closeSideBar')
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
nav {
  @apply text-xl bg-black bg-opacity-[0.75] w-[100vw] h-[100vh] fixed mt-[10vh];
  z-index: 1000;
}
#links {
  @apply flex flex-col justify-center items-end p-5;
}
.linkWrapper {
  @apply mb-8;
}
a {
  cursor: pointer;
}
.chosen {
  @apply font-black;
}
.line {
  @apply absolute w-[100vw] h-[0.1rem] bg-white right-0 mt-1 bg-opacity-20;
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
  animation: fadeIn 0.2s ease;
}
.fade-leave-active {
  animation: fadeOut 0s ease forwards;
}
</style>
