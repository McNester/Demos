<template>
  <div class="wrapper">
    <h3 id="title" class="serviceHeadingFont">
      {{ title }}
    </h3>
    <h4 id="description" class="inter">
      {{ description }}
    </h4>
    <h3 id="price" class="fira">
      {{ '$' + price }}
    </h3>
    <transparent-button id="contactBtn">Contact us</transparent-button>
  </div>
</template>

<script>
export default {
  name: 'service-card',
  props: {
    title: { type: String },
    description: { type: String },
    price: { type: Number }
  }
}
</script>

<style scoped>
.wrapper {
  @apply w-[90vw] h-fit py-[5rem] flex flex-col justify-center items-center bg-[#131313] rounded-3xl text-center gap-10;
}
#title {
  @apply text-5xl;
}
#description {
  @apply w-[90%] font-medium;
}
#price {
  @apply text-5xl;
}
@media (min-width: 1200px) {
  .wrapper {
    @apply mr-[2vw] grid px-[3rem] h-[41rem];
    grid-template-columns: auto auto auto;
    grid-template-rows: 4rem 19rem;
  }
  #title {
    @apply text-[8rem] text-left w-[53vw];
    grid-row: 1;
    grid-column: 1;
  }
  #description {
    @apply w-[116%] relative pl-[1vh] text-left text-[1.6rem];
    grid-row: 2;
    grid-column: 1;
    white-space: normal;
  }
  #contactBtn {
    grid-row: 3;
    grid-column: 1;
  }
  #price {
    @apply text-[4rem] relative pl-[5vw];
    grid-row: 3;
    grid-column: 2;
  }
}
</style>
