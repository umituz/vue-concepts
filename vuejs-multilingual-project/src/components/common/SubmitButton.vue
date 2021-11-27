<template>
  <v-btn
    :color="colorString"
    type="submit"
    :class="customClass"
    :text="text"
    >{{ buttonText }}</v-btn
  >
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    color: String,
    buttonText: String,
    customClass: String,
    text: Boolean
  },
  computed: {
    colorString() {
      return this.color ? this.color : 'secondary'
    }
  }
}
</script>
