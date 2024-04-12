<template>
  <form @submit.prevent>
    <fieldset>
      <input
        v-model="name"
        type="text"
        id="name"
        required
        aria-required="true"
        placeholder="Your name"
      />
      <input
        v-model="social"
        type="text"
        id="social"
        required
        aria-required="true"
        placeholder="Your telegram or whatsapp"
      />

      <input
        v-model="email"
        type="email"
        id="email"
        required
        aria-required="true"
        placeholder="Your email"
      />

      <textarea
        id="message"
        name="message"
        v-model="message"
        rows="4"
        required
        aria-required="true"
        placeholder="How can we help you"
      ></textarea>

      <transparent-button id="submitBtn" @click.prevent="clearInputs" aria-label="Submit button"
        >Submit</transparent-button
      >
    </fieldset>
  </form>
</template>
<script>
export default {
  name: 'contact-form',
  data() {
    return {
      name: '',
      social: '',
      email: '',
      message: ''
    }
  },
  methods: {
    clearInputs() {
      this.name = ''
      this.social = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>
<style scoped>
form {
  @apply w-full h-fit;
}
fieldset {
  @apply flex flex-col justify-center items-center gap-10;
}
input,
textarea {
  @apply w-[80%] h-[4rem] rounded-full border border-white bg-transparent pl-5 !important;
  outline: none;
}

textarea {
  @apply pt-[1rem] overflow-y-hidden;
}
input:focus,
textarea:focus {
  outline: 0.1rem solid white;
}

#submitBtn {
  @apply w-[40%] border-2 scale-110;
}
@media (min-width: 1100px) {
  #submitBtn {
    @apply mr-[35%] text-[1rem] mt-[2rem];
  }
}
</style>
