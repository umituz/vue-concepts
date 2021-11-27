<template>
  <v-app>
    <Header/>
    <v-main class="text-center">
      <v-container fluid>
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Header from '@/components/core/Header.vue'
import Footer from '@/components/core/Footer.vue'

export default {
  name: 'App',

  metaInfo() {
    return {
      title: this.appTitle,
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    }
  },

  components: {
    Header,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
