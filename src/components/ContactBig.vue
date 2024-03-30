<template>
  <form @submit.prevent>
    <div id="wrapper">
      <button
        @touchstart="toggleActive"
        @touchend="toggleActive(), clearInputs()"
        @click="clearInputs"
        :class="{ active: isActive }"
        id="send"
        aria-label="Send button"
      >
        <img id="sendImg" src="../assets/icons/sendBtn.svg" alt="Send button" />
      </button>
      <div class="inputWrapper">
        <label class="headingFont" for="name">Name</label>
        <input v-model="name" class="input" type="text" id="name" name="name" />
      </div>
      <div class="inputWrapper">
        <label class="headingFont" for="message">Message</label>
        <textarea v-model="message" class="input" type="text" id="message" name="message">
        </textarea>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  name: 'contact-big',
  data() {
    return {
      isActive: false,
      name: '',
      message: ''
    }
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive
    },
    clearInputs() {
      this.name = ''
      this.message = ''
    }
  }
}
</script>
<style scoped>
form {
  @apply hidden w-[100vw] h-[80vh] justify-start;
  background-image: url('../assets/icons/contactForm.svg');
  background-position: bottom left;
  background-size: cover;
}

#send {
  @apply scale-[241%] self-end;
}
#wrapper {
  @apply flex flex-col w-[41vw] h-[90vh] mt-[5vh]  mix-blend-difference;
}
@media (hover: hover) {
  #send {
    transition: all 0.3s ease;
  }
  #send:hover {
    @apply scale-[271%];
  }
  #send:active {
    @apply scale-[241%];
  }
}
@media (hover: none) {
  .active {
    @apply scale-[111%] !important;
  }
}

.inputWrapper {
  @apply flex flex-col justify-center items-center h-fit w-full gap-5 mt-[2vh] ml-[1vw];
}
label {
  @apply text-[3rem] self-start pl-[4vw];
}
.input {
  @apply bg-white bg-opacity-20 w-[80%] rounded-tr-xl rounded-bl-xl pl-3;
}
.input:focus {
  outline: none;
  border: 2px solid white; /* Example: adds a blue border on focus */
}
#name {
  @apply h-[6vh];
}
#message {
  @apply h-[38vh] pt-1;
}

@media (min-width: 1200px) {
  form {
    @apply flex;
  }
}
@media (min-height: 700px) {
  form {
    @apply h-[129vh];
  }
  #message {
    @apply h-[75vh];
  }
}
@media (min-height: 750px) {
  form {
    @apply h-[120vh];
  }
  #message {
    @apply h-[66vh];
  }
}
@media (min-height: 800px) {
  form {
    @apply h-[111vh];
  }
  #message {
    @apply h-[57vh];
  }
}
@media (min-height: 900px) {
  form {
    @apply h-[102vh];
  }
  #message {
    @apply h-[48vh];
  }
}
@media (min-height: 1000px) {
  form {
    @apply h-[93vh];
  }
  #message {
    @apply h-[49vh];
  }
}
@media (min-height: 1100px) {
  form {
    @apply h-[84vh];
  }
  #message {
    @apply h-[40vh];
  }
}
@media (min-height: 1200px) {
  form {
    @apply h-[75vh];
  }
  #message {
    @apply h-[31vh];
  }
}
</style>
