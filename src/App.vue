<template>
  <header>
    <button id="menuBtn" aria-label="Menu button" @click="toggleMenu">
      <img id="menuImg" :src="menuBtn" alt="Menu button" />
    </button>
    <my-nav :currentSection="currentSection" :isMenu="isMenu" @closeSideBar="toggleMenu"></my-nav>
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
      <img class="aboutBack" id="aboutBackPhone" src="../src/assets/icons/aboutBackPhone.svg" />
      <img class="aboutBack" id="aboutBackBig" src="../src/assets/icons/aboutBackBig.svg" />

      <div id="textOverlap">
        <h2 class="headingFont" id="aboutTitle">Who we are?</h2>
      </div>

      <div id="hostRestriction"></div>

      <spline-viewer
        id="host"
        v-once
        url="https://prod.spline.design/JIBI-FbPkFFge6AL/scene.splinecode"
      ></spline-viewer>
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
    <section id="contact">
      <h2 class="headingFont" id="contactTitle">Ready to discuss your ideas</h2>

      <contact-small></contact-small>
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
      ],
      currentSection: 0
    }
  },
  methods: {
    toggleMenu() {
      if (window.innerWidth < 500) {
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
      if (window.innerWidth < 500) {
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
    },
    handleScroll() {
      var current = this.currentSection
      var getSection = this.getSectionById
      var t = this
      document.querySelectorAll('section').forEach(function (section) {
        var sectionTop = section.offsetTop
        var sectionHeight = section.offsetHeight
        var scrollPosition = window.scrollY || document.documentElement.scrollTop

        if (sectionTop <= scrollPosition && sectionTop + sectionHeight > scrollPosition) {
          t.currentSection = t.getSectionById(section.getAttribute('id'))
        }
      })
    },
    getSectionById(sectionId) {
      switch (sectionId) {
        case 'main':
          return 0
        case 'about':
          return 1
        case 'portfolio':
          return 2
        case 'services':
          return 3
        case 'contact':
          return 3
      }
    },
    loadSpline() {
      if (
        !document.querySelector(
          'script[src="https://unpkg.com/@splinetool/viewer@1.0.47/build/spline-viewer.js"]'
        )
      ) {
        console.log('Adding Spline viewer script to the document.')
        const script = document.createElement('script')
        script.type = 'module'
        script.src = 'https://unpkg.com/@splinetool/viewer@1.0.47/build/spline-viewer.js'

        script.onload = () => {
          console.log('Spline viewer script loaded.')
          console.log('must be here111:')
          const shadowHost = document.getElementById('host')
          const shadowRoot = shadowHost.shadowRoot
          const logoElement = shadowRoot.querySelector('#logo')
          console.log(logoElement)
          logoElement.style.cssText = 'opacity: 0 !important;'

          setTimeout(() => {
            console.log('must be here2:')
            //console.log(document.getElementById('logo'))

            const shadowHost = document.getElementById('host')

            // Access the shadow root from the host element
            const shadowRoot = shadowHost.shadowRoot

            // Query inside the shadow root for the #logo element
            const logoElement = shadowRoot.querySelector('#logo')

            logoElement.style.cssText = 'display: none !important;'
          }, 1000)
        }

        document.head.appendChild(script)
      }
    }
  },
  mounted() {
    //implementig the width handler so that we can see the navbar on bigger devices and it's not hidden
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    this.typingSlogan()

    //implementing the section handler to notify user with current section
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll() // Initialize on component mount

    this.loadSpline()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', this.handleScroll)
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
@media (min-width: 500px) {
  header {
    @apply h-fit;
  }
}
#menuBtn {
  @apply scale-[200%] p-8;
  z-index: 999;
}
@media (min-width: 500px) {
  #menuBtn {
    @apply hidden;
  }
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
@media (min-width: 722px) {
  #mainBack {
    @apply -ml-[8vw] -mt-[10rem] mb-0;
    --tw-scale-x: 120%;
    --tw-scale-y: 110%;
  }
}

@media (min-width: 1288px) {
  #mainBack {
    --tw-scale-x: 139%;
  }
}
@media (min-width: 1328px) {
  #mainBack {
    --tw-scale-x: 170%;
  }
}
#logoWrapper {
  @apply mt-[20vh] absolute flex flex-col justify-center items-start gap-5 ml-6;
}
@media (min-width: 560px) {
  #logoWrapper {
    @apply mt-[10vh];
  }
}
@media (min-width: 722px) {
  #logoWrapper {
    @apply scale-[134%] ml-[5.5rem] mt-[16vh];
  }
}
@media (min-width: 1024px) {
  #logoWrapper {
    @apply scale-[200%] mt-[23vh] ml-[11.5rem];
  }
}
#logo {
  @apply text-6xl;
}
#slogan {
  @apply text-lg w-[70%] pl-1;
}
@media (min-width: 722px) {
  #slogan {
    @apply w-[80%] h-[10vh];
  }
}
@media (min-width: 1024px) {
  #slogan {
    @apply w-[18rem];
  }
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
@media (min-width: 500px) {
  #partialCasesWrapper {
    @apply -mr-10 mb-[5rem] !important;
  }
}
@media (min-width: 560px) {
  #partialCasesWrapper {
    @apply mb-[9rem] !important;
  }
}
@media (min-width: 722px) {
  #partialCasesWrapper {
    @apply mb-[5rem] !important;
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

@media (min-width: 722px) {
  #case1 {
    top: 90vh;
    left: 10vw;
  }
  #case2 {
    top: -86vh;
    left: 0.4vw;
  }
  #case3 {
    bottom: -70.5vh;
    left: 0.4vw;
  }
  #case4 {
    top: 90vh;
    left: -9.2vw;
  }
  #case5 {
    top: 90vh;
    left: -18.7vw;
  }
}
@media (min-width: 1328px) {
  #case1 {
    cursor: unset;
  }
  #case2 {
    left: -0.6vw;
  }
  #case3 {
    left: -0.6vw;
  }
  #case4 {
    left: -11.2vw;
  }
  #case5 {
    left: -21.7vw;
  }
}
@media (min-width: 1377px) {
  #case1 {
    left: 9vw;
  }
}
@media (min-width: 1440px) {
  #case1 {
    left: 7vw;
  }
  #case2 {
    left: -2.1vw;
  }
  #case3 {
    bottom: -68vh;
    left: -2.1vw;
  }
}
.aboutBack {
  @apply absolute;
}
#aboutBackPhone {
  @apply scale-[200%] -ml-[49vw] mt-[2vh];
}
#aboutBackBig {
  @apply hidden;
}
@media (min-width: 722px) {
  #aboutBackPhone {
    @apply hidden !important;
  }
  #aboutBackBig {
    @apply block scale-[121%] -ml-[8vw] -mt-[1vh] !important;
    --tw-scale-y: 100% !important;
  }
}
@media (min-width: 1300px) {
  #aboutBackBig {
    --tw-scale-x: 171% !important;
    --tw-scale-y: 98% !important;
  }
}

#host {
  @apply absolute right-0 hidden  scale-[0.35]  h-[100vh] w-[120vw] -mr-[40.7vw] -mt-[30vh];
}

#textOverlap {
  @apply absolute right-0 h-[20vh] w-[67vw] mix-blend-difference;
}
@media (min-width: 1200px) {
  #hostRestriction {
    @apply block absolute w-[23vw] h-[50vh] mr-[38vw];
    z-index: 20;
    right: 0;
  }
}

@media (min-height: 1000px) {
  #host {
    @apply -mt-[36vh];
  }
}
@media (min-width: 722px) {
  #host {
    @apply block;
  }
}
@media (min-width: 820px) {
  #host {
    @apply -mt-[35vh];
  }
}
@media (min-width: 900px) {
  #host {
    @apply scale-[0.4];
  }
}
@media (min-width: 1000px) {
  #host {
    @apply -mr-[41.7vw] -mt-[26vh];
  }
}
@media (min-width: 1024px) {
  #host {
    @apply -mt-[35vh];
  }
}
@media (min-width: 1200px) {
  #host {
    @apply -mt-[27vh] scale-[0.5];
  }
}
@media (min-width: 1400px) {
  #host {
    @apply scale-[0.6];
  }
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
@media (min-width: 722px) {
  #aboutTitle {
    @apply text-[3.2rem] mt-[8vh];
  }
}
@media (min-width: 1440px) {
  #aboutTitle {
    @apply text-[6rem];
  }
}
#aboutDesc {
  @apply text-lg w-[90vw] font-semibold mt-[20vh] ml-[6vw];
}
@media (min-width: 500px) {
  #aboutDesc {
    @apply mt-[24vh];
  }
}
@media (min-width: 722px) {
  #aboutDesc {
    @apply w-[54vw] ml-[3vw];
  }
}
@media (min-width: 1440px) {
  #aboutDesc {
    @apply text-2xl font-normal;
  }
}
@media (max-width: 375px) {
  #portfolio {
    @apply mt-[20vh];
  }
}
@media (min-width: 1200px) {
  #portfolio {
    @apply gap-[26vw] !important;
  }
}
#portfolioTitle {
  @apply text-4xl text-center;
  word-wrap: break-word;
  line-height: 1.5;
}
@media (min-width: 722px) {
  #portfolioTitle {
    @apply text-left w-[49vw] text-[3.9rem] -mr-[8vw] mt-[13vh];
  }
}
@media (min-width: 1200px) {
  #portfolioTitle {
    @apply text-[5rem];
  }
}
@media (min-width: 1440px) {
  #portfolioTitle {
    @apply text-[6.5rem];
  }
}
#portfolio {
  @apply h-fit pb-[20rem] !important;
}
@media (min-width: 722px) {
  #portfolio {
    @apply flex flex-row-reverse justify-center items-start gap-[21vw];
  }
}
@media (min-width: 1440px) {
  #portfolio {
    @apply gap-[30vw] !important;
  }
}
#portfolioWrapper {
  @apply flex flex-row justify-around items-center h-fit mt-[5rem];
}
@media (min-width: 500px) {
  #portfolioWrapper {
    @apply mt-[6rem];
  }
}
@media (min-width: 546px) {
  #portfolioWrapper {
    @apply mt-[8rem];
  }
}
.portfolioColumn {
  @apply h-fit w-[80%] flex flex-col justify-center items-center gap-10;
}
@media (min-width: 500px) {
  .portfolioColumn {
    @apply gap-[4.5rem];
  }
}
@media (min-width: 546px) {
  .portfolioColumn {
    @apply gap-[7rem];
  }
}
@media (min-width: 722px) {
  .portfolioColumn {
    scale: 70% !important;
  }
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
@media (min-width: 722px) {
  #portfolioWrapper {
    @apply mt-0 pt-0 gap-[8vw] -mr-[15vw];
  }
}
@media (min-width: 820px) {
  #portfolioWrapper {
    @apply mt-[3vh] -mr-[14vw];
    scale: 110%;
  }
}
@media (min-width: 1200px) {
  #portfolioWrapper {
    @apply gap-[5vw] mt-[11vh];
    scale: 130%;
  }
}
@media (min-width: 1440px) {
  #portfolioWrapper {
    @apply mt-[24vh];
    scale: 160%;
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
#contact {
  @apply flex flex-col justify-center items-center pb-[5vh] h-fit !important;
}
#contactTitle {
  @apply text-[2rem] text-center;
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

@media (min-width: 722px) {
  @keyframes case1 {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-78vh);
    }
  }

  @keyframes case2 {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(90vh);
    }
  }

  @keyframes case3 {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-73vh);
    }
  }

  @keyframes case4 {
    from {
      transform: translateY(0); /* Start from below the view */
    }
    to {
      transform: translateY(-78vh);
    }
  }

  @keyframes case5 {
    from {
      transform: translateY(0); /* Start from below the view */
    }
    to {
      transform: translateY(-90vh);
    }
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
