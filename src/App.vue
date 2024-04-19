<template>
  <header>
    <img id="logoImg" alt="Demos logo" loading="lazy" src="./assets/icons/logo.png" />
    <button id="menuBtn" aria-label="Menu button" @click="toggleMenu">
      <img id="menuImg" :src="menuBtn" alt="Menu button" />
    </button>
    <my-nav :isMenu="isMenu" @closeSideBar="toggleMenu"></my-nav>
  </header>

  <main>
    <section id="main">
      <div ref="logoWrapper" id="logoWrapper">
        <h1 id="logo" class="headingFont">Demos</h1>
        <h2 id="slogan" class="fira">{{ slogan + '|' }}</h2>
      </div>

      <spline-viewer
        id="host"
        v-once
        url="https://prod.spline.design/9yoCKQd-0-E6Tx1j/scene.splinecode"
      ></spline-viewer>
    </section>

    <section ref="cases" id="cases">
      <div ref="casesTitle" id="casesTitleWrapper">
        <h3 class="casesSlogan fira">Honored projects</h3>
        <h2 id="casesTitle" class="headingFont">CASES</h2>
        <h3 class="casesSlogan fira">Our principles. We’re partners, not providers</h3>
      </div>

      <div id="casesWrapper" ref="casesWrapper" @scroll="checkScroll">
        <case-card v-for="i in [1, 2, 3, 4, 5, 6]" ref="case" :key="i" class="case"></case-card>
      </div>
    </section>

    <section id="services">
      <transition name="fade">
        <service-info
          :title="currentService"
          @close="toggleServiceInfo"
          v-if="isService"
        ></service-info>
      </transition>

      <h2 ref="offer" class="headingFont" id="servicesTitle">WHAT WE OFFER?</h2>

      <div id="servicesWrapper">
        <service-card
          @toggleServiceInfo="toggleServiceInfo"
          v-for="service in services"
          :key="service.id"
          :title="service.title"
          :description="service.desc"
          :price="service.price"
          :current="currentService"
          :isService="isService"
          @infoOpen="currentService = service.title"
        ></service-card>
      </div>
    </section>
    <section id="about">
      <bento></bento>
    </section>
    <section id="contact">
      <legend class="headingFont" id="contactTitle">
        Our Team Is Ready To Help! Get started now!
      </legend>
      <contact-form></contact-form>
    </section>

    <my-footer></my-footer>
  </main>
</template>
<script setup>
import menuBtn from '../src/assets/icons/menuBtn.svg'
import closeBtn from '../src/assets/icons/closeBtn.svg'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
</script>

<script>
export default {
  data() {
    return {
      isService: false,
      isMenu: true,
      isMobile: false,
      tl: null,
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
      currentService: '',
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
          title: 'Services',
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
    toggleServiceInfo() {
      this.isService = !this.isService
    },
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
      if (window.innerWidth < 722) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
      if (this.tl != null) {
        this.tl.scrollTrigger.refresh()
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

    loadSpline() {
      if (
        !document.querySelector(
          'script[src="https://unpkg.com/@splinetool/viewer@1.1.1/build/spline-viewer.js"]'
        )
      ) {
        console.log('Adding Spline viewer script to the document.')
        const script = document.createElement('script')
        script.type = 'module'
        script.src = 'https://unpkg.com/@splinetool/viewer@1.1.1/build/spline-viewer.js'

        script.onload = () => {
          console.log('Spline viewer script loaded.')
          const shadowHost = document.getElementById('host')
          const shadowRoot = shadowHost.shadowRoot
          const logoElement = shadowRoot.querySelector('#logo')
          const canvas = shadowRoot.querySelector('#container')
          logoElement.style.cssText = 'opacity: 0 !important;'

          setTimeout(() => {
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
    },
    initScrollTrigger() {
      let pinnedContent = this.$refs.casesTitle
      let section = this.$refs.cases
      let offer = this.$refs.offer

      // Create a timeline for the animation
      if (this.isMobile == false) {
        this.tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top', // Animation starts when the top of the section hits the top of the viewport
            end: () => `+=${document.body.offsetHeight}`, // Ends when the bottom of the section leaves the top of the viewport
            scrub: true,
            pin: pinnedContent, // Pin the entire content section
            markers: false, // Optional, for debugging
            pinSpacing: false
          }
        })

        this.tl.to(pinnedContent, {
          scrollTrigger: {
            trigger: offer,
            start: 'bottom 70%', // Animation starts when the top of the section hits the top of the viewport
            end: 'bottom 45%', // Ends when the bottom of the section leaves the top of the viewport
            scrub: true,
            markers: false // Optional, for debugging
          },
          opacity: '0'
        })
      }
    },
    createObserver() {
      const options = {
        root: null,
        rootMargin: '-10% 0px -50% 0px',
        threshold: 0.95
      }

      let current = null
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          let sizeInFocus = document.getElementsByClassName('highlighted').length

          if (entry.isIntersecting) {
            if (sizeInFocus == 0) {
              current = entry.target
              current.classList.add('highlighted')
            }
            if (sizeInFocus == 1) {
              current.classList.remove('highlighted')
              entry.target.classList.add('highlighted')
              current = entry.target
            }
          }
        })
      }, options)

      // Observing the root element of each Vue component instance
      if (this.$refs.case && Array.isArray(this.$refs.case)) {
        this.$refs.case.forEach((componentInstance) => {
          observer.observe(componentInstance.$el) // Observing the actual element
        })
      } else {
        console.error('Refs not found or not an array:', this.$refs.case)
      }
    },
    startLogoAnimation() {
      const logoWrapper = this.$refs.logoWrapper
      logoWrapper.style.transition = 'transform 0.3s ease'
      logoWrapper.style.transform = 'translateX(0%)'
    }
  },
  mounted() {
    this.createObserver()

    //starts the animation for the navbar
    this.startLogoAnimation()

    //implementig the width handler so that we can see the navbar on bigger devices and it's not hidden
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    this.typingSlogan()

    //loading the 3d element
    this.loadSpline()

    //scroll trigger for the cases section
    this.initScrollTrigger()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300,700&family=Inter:wght@100..900&display=swap');
@font-face {
  font-family: Kurdis-extrawide-bold;
  src: url('../src/assets/fonts/kurdis-font-family/KurdisVariableFamilyTest-ExtraWideBold-BF64bf41e1032f4.otf');
}
@font-face {
  font-family: Kurdis-extrawide-extrabold;
  src: url('../src/assets/fonts/kurdis-font-family/KurdisVariableFamilyTest-ExtraWideExtraBold-BF64bf41e13a4b4.otf');
}
body::-webkit-scrollbar {
  background-color: black;
  width: 0.6rem;
}
body::-webkit-scrollbar-track {
  background-color: black;
}
body::-webkit-scrollbar-thumb {
  @apply rounded-full bg-[#0C0C0C];
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
#logoImg {
  @apply absolute left-0 top-0 mt-[1.5rem] ml-[1rem] h-[35%] w-auto;
  aspect-ratio: 7/1.5;
}
#menuBtn {
  @apply scale-[200%] p-8;
  z-index: 999;
}
section {
  @apply relative w-[100vw] h-[100vh] overflow-hidden !important;
}
#main {
  @apply relative;
}

#logoWrapper {
  @apply mt-[20vh] absolute flex flex-col justify-center items-start gap-5 ml-6;
  transform: translateX(-40%);
}
#logo {
  @apply text-6xl;
}
#slogan {
  @apply text-lg w-[70%] pl-1;
}

#host {
  @apply absolute right-0;
  /*mobile*/
  @apply scale-[120%] w-[200%] -mr-[110vw] mt-[6rem];
}

#cases {
  @apply h-fit mb-[10rem] !important;
}
#casesTitle {
  @apply text-[4rem] self-center text-white text-center mt-[15rem];
}
#casesTitleWrapper {
  @apply flex flex-col justify-start items-start;
  width: 100% !important;
}
.casesSlogan {
  @apply hidden;
}

#casesWrapper {
  @apply flex flex-col gap-14 justify-start items-center w-full h-full pt-[1vh] pb-[50vh] mt-[9rem];
}
#casesWrapper::-webkit-scrollbar {
  display: none;
}

#services {
  @apply h-fit pb-[20rem] !important;
}
#servicesWrapper {
  @apply flex flex-col justify-center items-center gap-[1rem] pt-20;
}
#servicesWrapper::-webkit-scrollbar {
  display: none;
}

#servicesTitle {
  @apply text-[2.2rem] text-center;
}

#about {
  @apply h-fit !important;
}

#contact {
  @apply flex flex-col mt-[10rem] h-fit pb-20 justify-start items-center gap-10 !important;
}
#contactTitle {
  @apply text-center w-[80%] text-3xl;
}

/*min-width*/

/*500px*/

@media (min-width: 500px) {
  #logoImg {
    @apply hidden;
  }
  header {
    @apply h-fit;
  }
  #menuBtn {
    @apply hidden;
  }
}

/*560px*/

@media (min-width: 560px) {
  #logoWrapper {
    @apply mt-[10vh];
  }
}

/*722px*/

@media (min-width: 722px) {
  #services {
    @apply -mt-[30rem];
  }
  #logoWrapper {
    @apply ml-[5.5rem] mt-[16vh];
    scale: 134%;
  }
  #slogan {
    @apply w-[80%] h-[10vh];
  }
  #host {
    @apply scale-[100%] w-[100%] -mr-[20vw] mt-[6rem] !important;
  }
  #cases {
    @apply flex justify-center mt-[10rem] px-[1rem] !important;
  }
  #casesWrapper {
    @apply w-[55vw] gap-[1.5rem];
  }

  #casesTitleWrapper {
    @apply mt-[8rem];
  }
  #casesTitle {
    @apply mt-0 self-start;
  }
  .casesSlogan {
    @apply block font-light text-[#777777];
  }
}

/*1000px*/

@media (min-width: 1000px) {
  #cases {
    @apply gap-[5rem] !important;
  }
  #casesTitleWrapper {
    @apply ml-[1%];
  }
  #about {
    @apply mb-[30rem] scale-[120%];
  }

  #casesTitle {
    @apply text-[5rem];
  }
  .casesSlogan {
    @apply text-[1.3rem];
    width: 100% !important;
  }
}

/*1024px*/

@media (min-width: 1024px) {
  #logoWrapper {
    @apply mt-[23vh] ml-[11.5rem];
    scale: 200%;
  }
  #slogan {
    @apply w-[18rem];
  }
}

/*1100px*/

@media (min-width: 1100px) {
  #casesTitleWrapper {
    @apply w-[37%] ml-0 !important;
  }
  #casesWrapper {
    @apply w-[37vw] !important;
    scale: 120%;
  }
  #contact {
    @apply flex-row items-start mb-[10rem] !important;
  }
  #contactTitle {
    @apply text-[3rem] w-[100%] text-left ml-5;
    line-height: 3.9rem !important;
  }
  #casesTitle {
    @apply text-[5.5rem];
  }
  .casesSlogan {
    @apply text-[1.3rem];
    width: 170% !important;
  }
}

/*1200px*/

@media (min-width: 1200px) {
  #servicesWrapper {
    @apply overflow-visible gap-[2rem];
    white-space: nowrap;
  }
  #servicesTitle {
    @apply text-left text-[3rem] mb-[2rem] pl-[2vw];
  }
  #about {
    @apply scale-[140%];
  }

  #contactTitle {
    @apply text-[4rem];
    line-height: 4.9rem !important;
  }
  #casesTitle {
    @apply text-[5.9rem];
  }
  .casesSlogan {
    @apply text-[1.3rem];
    width: 170% !important;
  }
}

/*1400*/
@media (min-width: 1400px) {
  #about {
    @apply scale-[150%];
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 0;
    transform: translateY(50%);
  }
}
.fade-enter-active {
  animation: fadeIn 0.4s ease;
}
.fade-leave-active {
  animation: fadeOut 0.4s ease forwards;
}
</style>
