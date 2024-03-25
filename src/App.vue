<template>
  <header>
    <button id="menuBtn" aria-label="Menu button" @click="toggleMenu">
      <img id="menuImg" :src="menuBtn" alt="Menu button" />
    </button>
    <my-nav :isMenu="isMenu"></my-nav>
  </header>

  <main>
    <section id="main">
      <img id="mainBack" src="../src/assets/icons/mainBack.svg" />

      <div id="logoWrapper">
        <h1 id="logo" class="logoFont">Demos</h1>
        <h2 id="slogan" class="fira">Making dreams together.|</h2>
      </div>

      <div id="partialCasesWrapper">
        <a target="_blank" href="https://www.youtube.com/" id="case1" class="caseAnim1">
          <img src="../src/assets/icons/case1.svg" />
        </a>
        <a target="_blank" href="https://www.youtube.com/" id="case2" class="caseAnim2">
          <img src="../src/assets/icons/case2.svg" />
        </a>
        <a target="_blank" href="https://www.youtube.com/" id="case3" class="caseAnim3">
          <img src="../src/assets/icons/case3.svg" />
        </a>
        <a target="_blank" href="https://www.youtube.com/" id="case4" class="caseAnim4">
          <img src="../src/assets/icons/case4.svg" />
        </a>
        <a target="_blank" href="https://www.youtube.com/" id="case5" class="caseAnim5">
          <img src="../src/assets/icons/case5.svg" />
        </a>
      </div>
    </section>
  </main>
</template>
<script setup>
import menuBtn from '../src/assets/icons/menuBtn.svg'
import closeBtn from '../src/assets/icons/closeBtn.svg'
</script>

<script>
export default {
  data() {
    return {
      isMenu: true
    }
  },
  methods: {
    toggleMenu() {
      this.isMenu = !this.isMenu
      this.toggleMenuIcon()
    },
    toggleMenuIcon() {
      if (this.isMenu) {
        document.getElementById('menuImg').src = closeBtn
      } else {
        document.getElementById('menuImg').src = menuBtn
      }
    },
    handleResize() {
      if (window.innerWidth < 450) {
        this.isMenu = false
      } else {
        this.isMenu = true
      }
      this.toggleMenuIcon()
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Inter:wght@100..900&display=swap')
@font-face {
  font-family: Kurdis-extrawide-bold;
  src: url('../src/assets/fonts/kurdis-font-family/KurdisVariableFamilyTest-ExtraWideBold-BF64bf41e1032f4.otf');
}
@font-face {
  font-family: Kurdis-extrawide-extrabold;
  src: url('../src/assets/fonts/kurdis-font-family/KurdisVariableFamilyTest-ExtraWideExtraBold-BF64bf41e13a4b4.otf');
}
@font-face {
  font-family: Kurdis-wide-extrabold;
  src: url('../src/assets/fonts/kurdis-font-family/KurdisVariableFamilyTest-WideExtraBold-BF64bf41e172be8.otf');
}

body {
  @apply overflow-x-hidden bg-black text-white;
  margin: 0;
  padding: 0;
}
html {
  @apply overflow-x-hidden;
}
.headingFont {
  font-family: Kurdis-wide-extrabold;
}
.logoFont {
  font-family: Kurdis-extrawide-extrabold;
}
.serviceHeadingFont {
  font-family: Kurdis-extrawide-bold;
}

.fira {
  font-family: 'Fira Code', monospace;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}
.inter {
  font-family: 'Inter', sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
header {
  @apply flex flex-col h-fit w-[100vw] fixed items-end;
  z-index: 10000;
}
#menuBtn {
  @apply scale-[200%] p-8;
  @apply sm:hidden;
}
#main {
  @apply relative w-[100vw] h-[100vh];
}
#mainBack {
  @apply absolute bottom-0 scale-[200%] -ml-[50vw] mb-[19%];
  z-index: 10;
}
#logoWrapper {
  @apply mt-[20vh] absolute flex flex-col justify-center items-start gap-5 ml-6;
}
#logo {
  @apply text-6xl;
}
#slogan {
  @apply text-lg w-[70%] pl-1;
}
#partialCasesWrapper {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto;
  @apply absolute bottom-0 right-0 w-[68.5vw] scale-[111%] -mr-[4.2vw];
  z-index: 11;
}
#partialCasesWrapper > a {
  @apply relative;
}
@media (min-width: 390px) {
  #partialCasesWrapper {
    @apply scale-[110%];
  }
  #partialCasesWrapper > a {
    @apply scale-[119%] !important;
  }
  #case2 {
    right: 1.6vw !important;
  }
  #case3 {
    right: 1.6vw !important;
  }
  #case4 {
    right: 3.5vw !important;
  }
  #case5 {
    right: 5vw !important;
  }
}
@media (min-width: 430px) {
  #partialCasesWrapper > a {
    @apply scale-[122%] !important;
  }
}
#case1 {
  @apply relative;
  top: 12vh;
}
#case2 {
  top: 7vh;
  right: 2.4vw;
}
#case3 {
  bottom: 5.5vh;
  right: 2.4vw;
  grid-column: 2;
  grid-row: 2;
}
#case4 {
  right: 4.9vw;
  top: 12vh;
}
#case5 {
  right: 7.3vw;
}

@keyframes case1 {
  from {
    transform: translateY(60vh);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes case2 {
  from {
    transform: translateY(-60vh);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes case3 {
  from {
    transform: translateY(60vh);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes case4 {
  from {
    transform: translateY(60vh); /* Start from below the view */
  }
  to {
    transform: translateY(0);
  }
}

@keyframes case5 {
  from {
    transform: translateY(60vh); /* Start from below the view */
  }
  to {
    transform: translateY(0);
  }
}

.caseAnim1 {
  animation: case1 0.5s ease forwards;
}

.caseAnim2 {
  animation: case2 0.6s ease forwards;
}

.caseAnim3 {
  animation: case3 0.7s ease forwards;
}

.caseAnim4 {
  animation: case4 0.8s ease forwards;
}

.caseAnim5 {
  animation: case5 0.9s ease forwards;
}
</style>
