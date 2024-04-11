<template>
  <transition name="fade">
    <nav v-show="isMenu">
      <ul id="links" class="inter">
        <div @click="scrollTo(options[0].name)" class="linkWrapper">
          <li :class="{ chosen: currentSection == 0 }"><a>Home</a></li>
          <div class="line"></div>
        </div>
        <div @click="scrollTo(options[1].name)" class="linkWrapper">
          <li :class="{ chosen: currentSection == 1 }"><a>Cases</a></li>
          <div class="line"></div>
        </div>
        <div @click="scrollTo(options[2].name)" class="linkWrapper">
          <li :class="{ chosen: currentSection == 2 }">
            <a>Services</a>
          </li>
          <div class="line"></div>
        </div>
        <div @click="scrollTo(options[3].name)" class="linkWrapper">
          <li :class="{ chosen: currentSection == 3 }"><a>About</a></li>
          <div class="line"></div>
        </div>

        <my-button @click="scrollTo(options[4].name)" id="hire">Hire us</my-button>
      </ul>
    </nav>
  </transition>
</template>

<script>
export default {
  name: 'my-nav',
  props: {
    isMenu: false,
    currentSection: { type: Number }
  },
  data() {
    return {
      options: [
        { id: 1, name: 'main' },
        { id: 2, name: 'cases' },
        { id: 3, name: 'services' },
        { id: 4, name: 'about' },
        { id: 5, name: 'contact' }
      ]
    }
  },
  methods: {
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
#hire {
  @apply hidden;
}
@media (min-width: 722px) {
  ul,
  a {
    @apply font-bold;
  }
  #hire {
    @apply block;
  }
}
.chosen {
  @apply font-black;
}
.line {
  @apply absolute w-[100vw] h-[0.1rem] bg-white right-0 mt-1 bg-opacity-20;
}

@media (min-width: 500px) {
  nav {
    @apply backdrop-blur-md bg-opacity-[21%]  h-[4.5rem] mt-0 !important;
  }
  #links {
    @apply flex-row justify-end items-center gap-5;
  }
  .linkWrapper {
    @apply mb-0;
  }
  .line {
    @apply hidden;
  }
  .chosen {
    @apply font-normal;
  }
  .chosen:after {
    margin-left: 40%;
    background: none repeat scroll 0 0 white;
    content: '';
    display: block;
    height: 0.1rem;
    position: relative;
    width: 1rem;
    bottom: -0.1rem;
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
  animation: fadeIn 0.2s ease;
}
.fade-leave-active {
  animation: fadeOut 0s ease forwards;
}
</style>
