<template>
  <div id="sideBarWrapper">
    <h1 id="sideTitle" class="headingFont">Asphera docs</h1>

    <div id="sideLinksWrapper">
      <my-dropdown :id="section.id" :name="section.name" v-for="section in sectionNames">
        <inner-link @click="changeArticle" :parentSectionId="section.id" :id="part.id"
          v-for="part in getCurrentParts()">{{ part.name
          }}</inner-link>
      </my-dropdown>
    </div>

  </div>


</template>

<script>
export default {
  name: 'side-bar',
  data() {
    return {
      sectionNames: [
        { 'id': 0, 'name': 'Cases' },
        { 'id': 1, 'name': 'Services' },
        { 'id': 2, 'name': 'About' }
      ]
    }
  },
  methods: {
    changeArticle() {
      this.$emit('changeArticle')
    },
    getCurrentParts() {
      let section = this.$store.getters['docs/getCurrentSectionParts']
      console.log(section.parts)
      return section.parts;
    }

  }
}

</script>


<style scoped>
#sideBarWrapper {
  /* @apply fixed left-0 top-0 mb-20 flex flex-col justify-start items-start gap-10 font-light h-fit w-[20%] p-5 ml-10; */
  @apply mb-20 flex flex-col justify-start items-start gap-10 font-light h-fit w-[25%] p-5 ml-10;
}

#sideTitle {
  @apply font-bold text-xl text-white;
}

#sideLinksWrapper {
  @apply mt-2 flex flex-col justify-between items-start gap-3 h-fit w-full;
}
</style>
