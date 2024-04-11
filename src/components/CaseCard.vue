<template>
  <div id="wrapper">
    <div class="inter" id="companyWrapper">
      <h3 id="title">COMPANY</h3>
      <p id="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac sodales aptent taciti
        sociosq
      </p>
    </div>
    <div class="statWrapper" id="stat1">
      <p class="headingFont statTitle">3X</p>
      <p class="statDesc">
        engagement <br />
        boost
      </p>
    </div>
    <div class="statWrapper" id="stat2">
      <p class="headingFont statTitle">+1K</p>
      <p class="statDesc">
        users in the <br />
        community
      </p>
    </div>
    <div class="statWrapper" id="stat3">
      <p class="headingFont statTitle">TOP 10</p>
      <p class="statDesc">
        blockcahin <br />
        startup
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'case-card'
}
</script>
<style scoped>
#wrapper {
  @apply grid w-[90%] h-[10rem] bg-[#1E1E1E] rounded-2xl p-4 text-left;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
}
#companyWrapper {
  @apply flex flex-col justify-start;
  grid-column: 1;
  grid-row: 1 / span 3;
}

#title {
  @apply font-semibold text-[2rem];
}
#description {
  @apply font-normal text-xs;
}

.statWrapper {
  @apply flex flex-row justify-end items-center gap-[1rem];
}

.statTitle {
  @apply text-[1.4rem] text-right;
}
.statDesc {
  @apply text-xs;
}

#stat1 {
  grid-column: 2;
  grid-row: 1;
}

#stat2 {
  grid-column: 2;
  grid-row: 2;
}

#stat3 {
  grid-column: 2;
  grid-row: 3;
}

@media (max-width: 375px) {
  #title {
    @apply text-[1.5rem];
  }
  #description {
    font-size: 0.65rem;
  }
  .statTitle {
    @apply text-[1.2rem];
  }
  .statDesc {
    font-size: 0.65rem;
  }
}
</style>
