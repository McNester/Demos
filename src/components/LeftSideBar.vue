<template>
  <transition name="jump">
    <div v-if="isVisible" id="leftSidebarWrapper">
      <h3 id="leftHeading">On this page:</h3>
      <div ref="list" v-html="markdownToHtml"></div>
    </div>
  </transition>

</template>

<script setup>
import { marked } from 'marked';
</script>

<script>
export default {
  name: 'left-sidebar',
  data() {
    return {
      isVisible: false,
      info: this.$store.getters['docs/getInfoForCurrentPart']
    }
  },
  methods: {
    handleElementClick(index) {
      var navHooks = this.$store.getters['docs/getCurrentNavigationHook']

      let textHook = navHooks[index]

      this.$emit('scrolTo', textHook);
    },
    scroll() {
      alert('hEYYY')
      this.$emit('scrolTo')
    }
  },
  computed: {
    markdownToHtml() {
      return marked(this.info);
    }
  },
  mounted() {
    this.isVisible = true;
    // First, get the container div using ref
    this.$nextTick(() => {
      const container = document.getElementById('leftSidebarWrapper');
      if (container) {
        const ul = container.querySelector('ul');
        const liElements = ul.querySelectorAll('li');
        for (let i = 0; i < liElements.length; i++) {
          liElements[i].addEventListener('click', (event) => {
            this.handleElementClick(i);
          });

        }
        // liElements.forEach(element => {
        //   element.addEventListener('click', (event) => {
        //     this.handleElementClick(event); // `this` refers to the Vue instance
        //   });
        // });
      } else {
        console.log('Element not found');
      }
    });
  }
}


</script>

<style scoped>
#leftSidebarWrapper {
  @apply border-l-2 border-l-[#373737] border-opacity-20 fixed top-0 p-5 right-0 w-[20%] h-[100vh];
}

#leftHeading {
  @apply font-black !important;
}

:deep(ul) {
  @apply ml-0 !important;
  list-style: none !important;
}

:deep(ul > li) {
  @apply font-light mb-5 !important;
  cursor: pointer;
  transition: all 0.3s ease;
}

:deep(li:hover) {
  @apply font-medium !important;
}

@keyframes goIn {
  0% {
    transform: translateX(150%);
  }

  100% {
    transform: translateX(0%);
  }
}

@keyframes goOut {
  0% {
    transform: translateX(150%);
  }

  100% {
    transform: translateX(0%);
  }
}

.jump-enter-active {
  animation: goIn 0.3s ease;
}

.jump-leave-active {
  animation: goOut 0.3s ease forwards;
}
</style>
