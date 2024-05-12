<template>
  <transition name="jump">
    <div v-if="isVisible" id="leftSidebarWrapper">
      <h3 id="leftHeading">On this page:</h3>
      <div ref="list" v-html="markdownToHtml"></div>
      <form @submit.prevent">
        <fieldset>
          <input @input="searchArticle" v-model="searchQuery" type="text" id="name" required aria-required="true"
            placeholder="Search in docs" />
        </fieldset>
      </form>
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
      info: this.$store.getters['docs/getInfoForCurrentPart'],
      articles: this.$store.getters['docs/getArticles'],
      hooks: [],
      currentHookIndex: 0,
      searchQuery: ''
    }
  },
  methods: {
    sanitizeInput(input) {
      // Trim spaces from start and end, and replace multiple spaces with a single space
      return input.replace(/\s+/g, ' ').trim();
    },
    searchArticle() {
      for (const article of this.articles) {
        for (const part of article.parts) {
          if (this.sanitizeInput(this.searchQuery) && part.msg.toLowerCase().includes(this.sanitizeInput(this.searchQuery).toLowerCase())) {
            this.$emit('searchArticle', part.msg)
          }
        }
      }
    },
    createObserver() {
      this.$nextTick(() => {
        const options = {
          root: null,
          rootMargin: '-10% 0px -50% 0px',
          threshold: 0.95
        }
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {

            let current = null

            for (let i = 0; i < this.hooks.length; i++) {
              console.log('HEASIN: ' + JSON.stringify(this.hooks))
              console.log('ENTRY: ' + entry)
              if (this.hooks[i].heading === entry) {
                console.log('Equeaul')
                current = this.hooks[i].hook
              }
            }

            if (entry.isIntersecting) {
              current.classList.add('highlighted')
            } else {
              current.classList.remove('highlighted')
            }
          })
        }, options)



        // Observing the root element of each Vue component instance
        let h2Elements = document.querySelectorAll('h2');
        let headings = Array.from(h2Elements);

        console.log('here is hooks object list:  ' + this.hooks)

        for (let i = 0; i < headings.length; i++) {
          observer.observe(headings[i])
        }
      });

    },
    handleElementClick(index) {
      var navHooks = this.$store.getters['docs/getCurrentNavigationHook']

      let textHook = navHooks[index]

      this.$emit('scrolTo', textHook);
    },
  },
  computed: {
    markdownToHtml() {
      return marked(this.info);
    },

  },
  mounted() {
    this.isVisible = true;
    // First, get the container div using ref
    this.$nextTick(() => {
      const container = document.getElementById('leftSidebarWrapper');
      if (container) {
        const ul = container.querySelector('ul');
        const liElements = ul.querySelectorAll('li');

        // let hooks = Array.from(liElements)

        let h2Elements = document.querySelectorAll('h2');
        // let headings = Array.from(h2Elements);

        // console.log('json hooks: ' + JSON.stringify(hooks))
        // for (let i = 0; i < headings.length; i++) {
        //   let h = hooks[i]
        //   let hed = headings[i]
        //   this.hooks.push({ 'hook': h, 'heading:': hed })
        // }

        for (let i = 0; i < liElements.length; i++) {
          liElements[i].addEventListener('click', (event) => {
            this.handleElementClick(i);
          });

        }
      } else {
        console.log('Element not found');
      }
      // this.createObserver()

    });

  }
}


</script>

<style scoped>
#leftSidebarWrapper {
  @apply border-l-2 border-l-[#373737] border-opacity-20 fixed top-[1%] p-5 right-0 w-[20%] h-[100vh];
}

#leftHeading {
  @apply font-black !important;
}

input {
  @apply w-[80%] h-[2rem] rounded-full border border-white bg-transparent pl-5 !important;
  outline: none;
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

:deep(.highlighted) {
  @apply shadow-red-500 shadow-xl;

}

@media(max-width: 800px) {
  input {
    @apply w-[103%] text-[0.8rem] pl-[1rem] !important;
  }
}


@media(max-width: 500px) {
  #leftSidebarWrapper {
    @apply top-0 w-[27%];
  }

  #leftHeading {
    @apply text-[0.9rem] font-black !important;
  }

  :deep(li) {
    @apply text-sm !important;
  }

  input {
    @apply w-[121%] pl-[0.8rem] -ml-[0.5rem] !important;
  }

}

@media(max-width: 425px) {
  input {
    @apply -ml-[0.9rem] w-[147%] text-[0.65rem] !important;
  }
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
