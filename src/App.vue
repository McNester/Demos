<template>
  <header>
    <button id="menuBtn" aria-label="Menu button" @click="toggleMenu">
      <img id="menuImg" :src="menuBtn" alt="Menu button" />
    </button>
    <my-nav :isMenu="isMenu" @closeSideBar="toggleMenu"></my-nav>
  </header>

  <main>
    <section id="main">
      <img id="mainBack" src="../src/assets/icons/mainBack.svg" />

      <div id="logoWrapper">
        <h1 id="logo" class="logoFont">Demos</h1>
        <h2 id="slogan" class="fira">{{ slogan + '|' }}</h2>
      </div>

      <div id="partialCasesWrapper">
        <a
          target="_blank"
          href="https://www.youtube.com"
          :id="'case' + i"
          class="caseAnim"
          :class="'caseAnim' + i"
          :key="i"
          v-for="i in [1, 2, 3, 4, 5]"
        >
          <partial-case :imageNumber="i"></partial-case>
        </a>
      </div>
    </section>

    <section id="about">
      <img id="aboutBackPhone" src="../src/assets/icons/aboutBackPhone.svg" />
      <div id="textOverlap">
        <h2 class="headingFont" id="aboutTitle">Who we are?</h2>
      </div>
      <h3 id="aboutDesc" class="inter">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac sodales est. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac
        habitasse platea dictumst. Maecenas semper tempor nulla, id cursus sem mattis et.
        Suspendisse ut purus sit amet arcu ultricies scelerisque id in ipsum. Integer interdum ex
        nec ligula fermentum, ac aliquam justo finibus. Morbi a turpis varius, aliquam felis sed,
        dignissim orci. Nam augue orci, pulvinar vehicula nisi eget, venenatis volutpat ex. Aliquam
        erat volutpat. Sed ultrices erat in purus molestie vulputate.
      </h3>
    </section>

    <section id="portfolio">
      <h2 class="headingFont" id="portfolioTitle">Bringing your ideas into the world</h2>

      <div id="portfolioWrapper">
        <div id="leftPortfolio" class="portfolioColumn">
          <portfolio-card :imageNumber="i" :key="i" v-for="i in [1, 3, 4]"></portfolio-card>
        </div>

        <div id="rightPortfolio" class="portfolioColumn">
          <portfolio-card :imageNumber="i" :key="i" v-for="i in [2, 5]"></portfolio-card>
        </div>
      </div>
    </section>

    <section id="services">
      <h2 class="headingFont" id="servicesTitle">What we offer?</h2>

      <div id="servicesWrapper">
        <service-card
          v-for="service in services"
          :key="service.id"
          :title="service.title"
          :description="service.desc"
          :price="service.price"
        ></service-card>
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
      isMenu: true,
      phrases: [
        'Making dreams togehter.',
        'Helping all the way.',
        'Innovate, Create, Elevate.',
        'Making the Web Work for You.',
        'Building Your Digital Future.',
        'Where Ideas Meet Impact.',
        'Beyond the Code.',
        'Innovation at Every Click.'
      ],
      slogan: '',
      currentPhraseIndex: 0,
      typingSpeed: 70,
      deletingSpeed: 80,
      isDeleting: false,
      services: [
        {
          id: 1,
          title: 'Website',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac sodales est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Maecenas semper tempor nulla, id cursus sem mattis et. Suspendisse ut purus sit amet arcu ultricies.',
          price: 499
        },
        {
          id: 2,
          title: 'App',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac sodales est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Maecenas semper tempor nulla, id cursus sem mattis et. Suspendisse ut purus sit amet arcu ultricies.',
          price: 759
        },
        {
          id: 3,
          title: 'Internal service',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac sodales est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Maecenas semper tempor nulla, id cursus sem mattis et. Suspendisse ut purus sit amet arcu ultricies.',
          price: 830
        },
        {
          id: 4,
          title: 'ERP',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac sodales est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Maecenas semper tempor nulla, id cursus sem mattis et. Suspendisse ut purus sit amet arcu ultricies.',
          price: 421
        }
      ]
    }
  },
  methods: {
    toggleMenu() {
      if (window.innerWidth < 450) {
        this.isMenu = !this.isMenu
        this.toggleMenuIcon()
      }
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
    },
    typingSlogan() {
      const current = this.currentPhraseIndex % this.phrases.length
      const fullPhrase = this.phrases[current]

      if (this.isDeleting) {
        // Remove a character
        this.slogan = fullPhrase.substring(0, this.slogan.length - 1)
      } else {
        // Add a character
        this.slogan = fullPhrase.substring(0, this.slogan.length + 1)
      }

      // Determine the typing speed
      let typeSpeed = this.typingSpeed
      if (this.isDeleting) {
        typeSpeed = this.deletingSpeed
      }

      // If phrase is complete, pause before starting to delete
      if (!this.isDeleting && this.slogan === fullPhrase) {
        // Pause at end
        typeSpeed = 2000
        this.isDeleting = true
      } else if (this.isDeleting && this.slogan === '') {
        this.isDeleting = false
        this.currentPhraseIndex++
        // Pause before start typing next phrase
        typeSpeed = 500
      }

      setTimeout(() => this.typingSlogan(), typeSpeed)
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    this.typingSlogan()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Inter:wght@100..900&display=swap');
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

html,
body {
  @apply bg-black text-white;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  max-width: 100vw;
  overscroll-behavior: none;
}
body {
  overscroll-behavior-y: none;
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
  @apply flex flex-col h-fit w-[100vw] h-[10vh] fixed items-end bg-black bg-opacity-[0.75];
  z-index: 10000;
}
#menuBtn {
  @apply scale-[200%] p-8;
  @apply sm:hidden;
  z-index: 999;
}
section {
  @apply relative w-[100vw] h-[100vh] overflow-hidden !important;
}
#main {
  @apply relative;
}

#mainBack {
  @apply absolute bottom-0 scale-[200%] -ml-[49vw] mb-[19%];
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
@media (min-width: 335px) {
  #partialCasesWrapper {
    @apply scale-[115%] -mr-[1.4rem] mb-14;
  }
}
@media (min-width: 382px) {
  #partialCasesWrapper {
    @apply -mr-7;
  }
}
#partialCasesWrapper > a {
  @apply relative w-[18vw];
}
#partialCasesWrapper > a > img {
  width: inherit;
}
@media (min-width: 390px) {
  #partialCasesWrapper > a {
    @apply w-[18vw] !important;
  }
  #case2 {
    right: 3vw !important;
  }
  #case3 {
    right: 3vw !important;
  }
  #case4 {
    right: 5.5vw !important;
  }
  #case5 {
    right: 9.5vw !important;
  }
}
#case1 {
  @apply relative;
  left: 0.2vw;
  top: 70vh;
}
#case2 {
  top: -66vh;
  left: -2.8vw;
}
#case3 {
  bottom: -50.5vh;
  left: -2.8vw;
  grid-column: 2;
  grid-row: 2;
}
#case4 {
  top: 70vh;
  left: -6vw;
}
#case5 {
  top: 70vh;
  right: 9vw;
}

#aboutBackPhone {
  @apply absolute scale-[200%]  -ml-[49vw] mt-[2vh];
}
#textOverlap {
  @apply absolute right-0 h-[20vh] w-[67vw] mix-blend-difference;
}
#aboutTitle {
  @apply text-[2.6rem] mt-[5vh] -ml-[31vw];
}
@media (max-width: 320px) {
  #aboutTitle {
    @apply text-[2.2rem] !important;
  }
}
@media (min-width: 400px) {
  #aboutTitle {
    @apply text-5xl;
  }
}
#aboutDesc {
  @apply text-lg w-[90vw] font-semibold mt-[20vh] ml-[6vw];
}
@media (max-width: 375px) {
  #portfolio {
    @apply mt-[20vh];
  }
}
#portfolioTitle {
  @apply text-4xl text-center;
  word-wrap: break-word;
  line-height: 1.5;
}
#portfolio {
  @apply h-fit pb-[20rem] !important;
}
#portfolioWrapper {
  @apply flex flex-row justify-around items-center h-fit mt-[5rem];
}
.portfolioColumn {
  @apply h-fit w-[80%] flex flex-col justify-center items-center gap-10;
}

#rightPortfolio {
  @apply mt-[-10rem];
}
@media (min-width: 391px) {
  #rightPortfolio {
    @apply -ml-2;
  }
  #leftPortfolio {
    @apply -mr-2;
  }
}
@media (min-width: 348px) {
  #leftPortfolio {
    @apply scale-[110%];
  }
  #rightPortfolio {
    @apply scale-[110%];
  }
}
@media (min-width: 376px) {
  #portfolioWrapper {
    @apply pt-[7vh];
  }
  #leftPortfolio {
    @apply scale-[120%];
  }
  #rightPortfolio {
    @apply scale-[120%];
  }
}
#services {
  @apply h-fit pb-[20rem] !important;
}
#servicesWrapper {
  @apply flex flex-col justify-center items-center gap-20 pt-20;
}
#servicesTitle {
  @apply text-[2.2rem] text-center;
}

@keyframes case1 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-58vh);
  }
}

@keyframes case2 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(70vh);
  }
}

@keyframes case3 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-53vh);
  }
}

@keyframes case4 {
  from {
    transform: translateY(0); /* Start from below the view */
  }
  to {
    transform: translateY(-58vh);
  }
}

@keyframes case5 {
  from {
    transform: translateY(0); /* Start from below the view */
  }
  to {
    transform: translateY(-70vh);
  }
}

.caseAnim1 {
  animation: case1 0.5s 0.5s ease forwards;
}

.caseAnim2 {
  animation: case2 0.6s 0.5s ease forwards;
}

.caseAnim3 {
  animation: case3 0.7s 0.5s ease forwards;
}

.caseAnim4 {
  animation: case4 0.8s 0.5s ease forwards;
}

.caseAnim5 {
  animation: case5 0.9s 0.5s ease forwards;
}
</style>
