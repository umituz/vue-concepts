<template>
  <v-container fluid>
    <v-layout row wrap>
      <Heading :title="$t('pages.home.TITLE')"/>
      <Description :description="$t('pages.home.DESCRIPTION')"/>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Contact',

  components: {},

  data: () => ({
    //
  }),

  metaInfo() {
    return {
      title: this.$store.getters.appTitle,
      titleTemplate: `${this.$t('pages.home.TITLE')} - %s`
    }
  },
};
</script>
