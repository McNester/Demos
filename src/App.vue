<template>
  <!-- <my-main></my-main> -->
  <SpeedInsights />
  <RouterView></RouterView>
</template>


<script>
export default {
  // methods: {
  //
  //   handleScrollBar() {
  //     clearTimeout(this.scrollTimeout);
  //
  //     // Add active class to show scrollbar
  //     document.documentElement.classList.add('active-scrollbar');
  //
  //     // Set a timeout to remove the active class after 1 second of inactivity
  //     this.scrollTimeout = setTimeout(() => {
  //       document.documentElement.classList.remove('active-scrollbar');
  //     }, 1000);
  //   },
  // },
  mounted() {
    window.addEventListener('scroll', this.handleScrollBar)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap');
/* @import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap'); */

/* html::-webkit-scrollbar { */
/*   background-color: black; */
/*   width: 0.6rem; */
/*   opacity: 0; */
/*   transition: all 0.3s ease-in-out; */
/* } */
/**/
/* .active-scrollbar { */
/*   transition: all 0.5s ease; */
/* } */
/**/
/* .active-scrollbar::-webkit-scrollbar { */
/*   opacity: 1; */
/* } */
/**/
/* .active-scrollbar::-webkit-scrollbar-thumb { */
/*   @apply rounded-full bg-[#6242BD]; */
/*   box-shadow: inset 0px 3rem 0px 0px black; */
/* } */

html,
body {
  @apply bg-black text-white;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
  max-width: 100vw;
  overscroll-behavior: none;
}

.headingFont {
  font-family: 'Red Hat Display', sans-serif;
}

.serviceHeadingFont {
  font-family: 'Red Hat Display', sans-serif;
}

.fira {
  font-family: 'IBM Plex Mono', monospace;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}

.inter {
  font-family: 'Public Sans', sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
