<template>
  <div class="headingFont" id="articleWrapper">
    <side-bar></side-bar>
    <article>

      <h1>Introduction</h1>
      <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum quod molestiae itaque cupiditate
        deleniti vitae inventore impedit numquam qui illo autem, minima quia quidem nostrum
        <p class="link">veritatis quibusdam officiis ex?</p>
      </h3>

      <h2>What is this?</h2>

      <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, fuga ab? Labore quod sequi, obcaecati unde
        eaque consectetur sunt? Nam facilis nostrum praesentium, velit accusamus consectetur minima repellat ut
        eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi ut velit suscipit. Ratione illum
        dolore exercitationem, possimus optio cupiditate modi sunt reprehenderit rem eius provident? Excepturi
        voluptates esse odio.</h3>


      <h2>And talking about this.</h2>

      <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dicta quisquam exercitationem molestiae, fugit
        impedit corrupti temporibus facere culpa dolorum officiis quas, dolores ea neque ducimus.</h3>


      <h2>But we also can't omit this: </h2>

      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatibus ipsa magni eum laborum nobis,
        nulla ab reprehenderit animi possimus laboriosam quaerat ullam inventore excepturi temporibus praesentium
        doloribus in. Ulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet magnam natus, veritatis
        unde voluptatibus nostrum perferendis? Harum, voluptates temporibus, consectetur aliquid maiores debitis nam
        distinctio impedit assumenda fuga deserunt!</h3>

      <ul>
        <li>The first case</li>
        <li>The first case</li>
        <li>The first case</li>
        <li>The first case</li>
      </ul>

      <h2>And finishing This part.</h2>

      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse, quis voluptatem blanditiis quidem
        accusamus modi odio consequatur laborum voluptas in non cum fugit rerum quasi qui, repellat ipsam iure! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Et autem harum earum sit sunt iusto blanditiis id, odit minus
        voluptatum provident? Laborum consectetur sint eius illo assumenda. Ea, odit autem. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quas atque ab explicabo iusto tempore, quos reiciendis suscipit similique iure
        excepturi ratione, qui eius eligendi repellat magnam minus aliquid eos quia?</h3>

    </article>
  </div>
</template>

<script>
export default {
  name: 'my-article',
  data() {
    return {
    }
  }
}

</script>
<style scoped>
#articleWrapper {
  @apply text-white flex flex-row justify-start items-start w-[100vw] h-fit;
  overflow-y: auto;
  scrollbar-color: yellow;
}

article {
  @apply mt-10 p-2 flex flex-col justify-center w-[50%] h-fit;
}

h1 {
  @apply mb-10 font-medium text-6xl;
}

h2 {
  @apply mb-10 font-normal text-4xl;

}

h3 {
  @apply mb-10 font-light text-xl;
}

.link {
  @apply font-bold text-purple-500;
  display: inline-block;
}

ul {
  @apply ml-10 mb-10;
  list-style-type: disc;
}

ul>li {
  @apply text-lg mb-2;

}
</style>
