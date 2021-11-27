<template>
  <router-link :to="{ name:'home' }" class="noUnderline">
    <v-icon large color="blue darken-2">mdi-bird</v-icon>
  </router-link>
</template>

<script>
export default {
  name: "Icon"
}
</script>

<style scoped>
  .noUnderline {
    text-decoration: none;
    color: inherit;
  }
</style>