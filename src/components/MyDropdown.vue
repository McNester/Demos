<template>
  <ul :class="{ expanded: isExpanded }" class="headingFont" id="dropdownWrapper">
    <p class="expandTitle" @click="expand"> Hey, expand me</p>
    <slot></slot>
  </ul>


</template>

<script>
export default {
  name: 'my-dropdown',
  data() {
    return {
      isExpanded: false,
    }
  },
  methods: {
    expand() {
      if (this.isExpanded) {
        this.isExpanded = false
        return;
      }
      this.$emit('expanded', this.num)
      this.isExpanded = true

    }
  }
}

</script>


<style scoped>
#dropdownWrapper {
  @apply p-2 border-l-2 border-l-[#373737] text-lg text-[#373737] h-10 overflow-hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.expanded {
  @apply text-white h-60 !important;
}

.expandTitle {
  transition: all 0.3s ease;
}
</style>
