<template>
  <div id="pageOverlay">
    <div id="serviceInfoWrapper">
      <button @click="$emit('close')" id="closeBtn" aria-label="Close">
        <img src="/src/assets/icons/closeBtn.svg" alt="close icon" aria-hidden="true" />
      </button>

      <div id="infoWrapper">
        <h2 class="serviceHeadingFont" id="title">{{ title }}</h2>
        <h2 id="fullDesc" class="inter description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac sodales est. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In
            hac habitasse platea dictumst. Maecenas semper tempor nulla, id cursus sem mattis et.
            Suspendisse ut purus sit amet arcu ultricies
          </p>
        </h2>
        <ul id="servicesList" class="inter description">
          <li><p>We offer you this</p></li>
          <li><p>And also you would get that</p></li>
          <li><p>Furthemore you’d got this</p></li>
          <li><p>We help you do this</p></li>
        </ul>
      </div>

      <div id="correspCases">
        <case-card class="case" v-for="i in [1, 2]" :key="i"></case-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'service-info',
  props: {
    title: { type: String }
  }
}
</script>
<style scoped>
#pageOverlay {
  @apply fixed flex justify-center items-center bg-black bg-opacity-40 w-[100vw] h-[100vh] !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}
#serviceInfoWrapper {
  @apply flex flex-col justify-start items-start w-[90vw] h-[80vh] bg-[#191919] rounded-2xl overflow-scroll pb-16;
}
#infoWrapper {
  @apply flex flex-col justify-center items-center w-full h-fit mt-[20%];
}
#closeBtn {
  @apply absolute;
  scale: 170%;
  right: calc(100% - 88%);
  top: calc(100% - 85%);
}
#title {
  @apply text-5xl;
}
.description {
  @apply font-medium text-center !important;
}
#fullDesc {
  @apply mt-[10%] w-[76%];
}
#servicesList {
  @apply text-left mt-[10%] !important;
}

li {
  list-style-type: disc;
}
#correspCases {
  @apply flex flex-col justify-center items-center w-full h-fit mt-10 gap-8;
}
.case {
  @apply w-[100%] shadow-lg shadow-[#6242BD] !important;
  scale: 90%;
}

/*800px*/

@media (min-width: 800px) {
  #title {
    @apply text-[7rem];
  }
  .description {
    @apply text-[1.5rem];
  }
  #servicesList {
    @apply mt-[5%] !important;
  }
  .case {
    @apply w-[66%] !important;
  }
}

/*1200px*/
@media (min-width: 1200px) {
  #serviceInfoWrapper {
    @apply flex-row overflow-hidden !important;
  }
  #infoWrapper {
    @apply mt-0 p-10 items-start;
  }
  #title {
    @apply text-5xl text-left !important;
  }
  .description {
    @apply text-left !important;
  }
  #fullDesc {
    @apply w-[96%] !important;
  }
  #servicesList {
    @apply ml-7;
  }
  .case {
    scale: 140%;
  }
  #correspCases {
    @apply mt-[10.5rem] w-[114%] mr-[2vw] gap-[9rem];
  }
}
</style>
