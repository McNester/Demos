<template>
  <form @submit.prevent id="wrapper">
    <button
      @touchstart="toggleActive"
      @touchend="toggleActive(), clearInputs()"
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
      <textarea v-model="message" class="input" type="text" id="message" name="message"> </textarea>
    </div>
  </form>
</template>
<script>
export default {
  name: 'contactSmall',
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
#wrapper {
  @apply relative mt-[6vh] bg-[#131313] w-[90vw] h-[66vh] rounded-2xl flex flex-col justify-around items-center;
}
#send {
  @apply scale-[121%];
  @apply absolute top-0 right-0 p-5;
}

@media (hover: hover) {
  #send {
    transition: all 0.3s ease;
  }
  #send:hover {
    @apply scale-[151%];
  }
  #send:active {
    @apply scale-[121%];
  }
}
@media (hover: none) {
  .active {
    @apply scale-[111%] !important;
  }
}

.inputWrapper {
  @apply flex flex-col justify-center items-center h-fit w-full gap-5;
}
label {
  @apply text-[2rem];
}
.input {
  @apply bg-white bg-opacity-20 w-[80%] rounded-tr-xl rounded-bl-xl pl-3;
}
.input:focus {
  outline: none;
  border: 2px solid white; /* Example: adds a blue border on focus */
}
#name {
  @apply h-[5vh];
}
#message {
  @apply h-[30vh] pt-1;
}
</style>
