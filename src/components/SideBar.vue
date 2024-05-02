<template>
  <div id="sideBarWrapper">
    <h1 id="sideTitle" class="headingFont">Asphera docs</h1>

    <div id="sideLinksWrapper">
      <my-dropdown v-for="i in [1, 2, 3, 4, 5]">
        <inner-link v-for="j in [1, 2, 3, 4, 5]">Take a look at me!!</inner-link>
      </my-dropdown>
    </div>

  </div>


</template>

<script>
export default {
  name: 'side-bar',
}

</script>


<style scoped>
#sideBarWrapper {
  /* @apply fixed left-0 top-0 mb-20 flex flex-col justify-start items-start gap-10 font-light h-fit w-[20%] p-5 ml-10; */
  @apply mb-20 flex flex-col justify-start items-start gap-10 font-light h-fit w-[20%] p-5 ml-10;
}

#sideTitle {
  @apply font-bold text-xl text-white;
}

#sideLinksWrapper {
  @apply mt-2 flex flex-col justify-between items-start gap-10 h-fit w-full;
}
</style>
