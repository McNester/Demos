<template>
  <div class="headingFont" id="articleWrapper">
    <side-bar @changeArticle="rerender"></side-bar>
    <article>

      <div v-html="markdownToHtml"></div>
    </article>
  </div>
</template>

<script setup>
import { marked } from 'marked';
</script>

<script>
export default {
  name: 'my-article',
  data() {
    return {
      msg: this.$store.getters['docs/getCurrentArticle']
    }
  },
  methods: {
    rerender() {
      window.location.reload();
    }
  },
  computed: {
    markdownToHtml() {
      // let msg = this.$store.getters['docs/getCurrentArticle']
      let g = this.$store.getters['docs/getCurrentSectionParts']
      this.$store.getters['docs/getCurrentPartId']
      return marked(this.msg);
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  }
}

</script>
<style scoped>
#articleWrapper {
  @apply text-white flex flex-row justify-start items-start w-[100vw] h-fit;
  overflow-y: auto;
  scrollbar-color: yellow;
}

:deep(article) {
  @apply mt-10 p-2 flex flex-col justify-center w-[50%] h-fit;
}

:deep(h1) {
  @apply mb-10 font-medium text-6xl;
}

:deep(h2) {
  @apply mb-10 font-normal text-4xl;

}

:deep(h3) {
  @apply mb-10 font-light text-xl;
}

:deep(strong) {
  @apply font-bold text-purple-500;
  display: inline-block;
}

:deep(ul) {
  @apply ml-10 mb-10;
  list-style-type: disc;
}

:deep(ul > li) {
  @applytext-lg mb-2;

}
</style>
