<template>
  <v-container fluid>
    <v-layout row wrap>
      <Heading :title="$t('pages.notFound.TITLE')" />
      <Description :description="$t('pages.notFound.DESCRIPTION')"/>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'NotFound',

  components: {},

  data: () => ({
    //
  }),

  metaInfo() {
    return {
      title: this.$store.getters.appTitle,
      titleTemplate: `${this.$t('pages.notFound.TITLE')} - %s`
    }
  },
};
</script>
