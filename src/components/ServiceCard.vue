<template>
  <div id="wrapper">
    <h3 id="title" class="serviceHeadingFont">
      {{ title }}
    </h3>
    <h4 id="description" class="inter">
      {{ description }}
    </h4>
    <h3 id="price" class="fira">
      {{ '$' + price }}
    </h3>
    <transparent-button>Contact us</transparent-button>
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
#wrapper {
  @apply w-[90vw] h-fit py-[5vh] flex flex-col justify-center items-center bg-[#131313] rounded-3xl text-center gap-10;
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
</style>
