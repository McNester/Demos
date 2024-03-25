<template>
  <nav v-if="isMenu">
    <ul id="links" class="inter">
      <div @click="toggleChoice(0)" class="linkWrapper">
        <li :class="{ chosen: chosenId == 0 }"><a>Home</a></li>
        <div class="line"></div>
      </div>
      <div @click="toggleChoice(1)" class="linkWrapper">
        <li :class="{ chosen: chosenId == 1 }"><a>About</a></li>
        <div class="line"></div>
      </div>
      <div @click="toggleChoice(2)" class="linkWrapper">
        <li :class="{ chosen: chosenId == 2 }">
          <a>Services</a>
        </li>
        <div class="line"></div>
      </div>
      <div @click="toggleChoice(3)" class="linkWrapper">
        <li :class="{ chosen: chosenId == 3 }"><a>Contact</a></li>
        <div class="line"></div>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'my-nav',
  props: {
    isMenu: false
  },
  data() {
    return {
      chosenId: 0
    }
  },
  methods: {
    toggleChoice(id) {
      this.chosenId = id
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
  @apply absolute w-[100vw] h-[0.01rem] bg-white right-0 mt-1;
}
</style>
