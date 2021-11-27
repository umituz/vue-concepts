<!--<template>-->
<!--  <v-footer dark padless>-->
<!--    <v-card class="flex" flat tile>-->
<!--      <v-card-text class="py-2 white&#45;&#45;text text-center">-->
<!--        {{ new Date().getFullYear() }} — <strong>Ümit UZ</strong>-->
<!--      </v-card-text>-->
<!--    </v-card>-->
<!--  </v-footer>-->
<!--</template>-->

<template>
  <v-footer
      dark
      padless
  >
    <v-card
        class="flex"
        flat
        tile
    >
      <v-card-title class="grey">
        <strong class="subheading">{{ $t('general.FOOTER_MESSAGE')}}</strong>
        <v-spacer></v-spacer>
        <v-btn
            v-for="(icon,index) in icons"
            :href="icon.href"
            target="_blank"
            :key="index"
            class="mx-4"
            dark
            icon
        >
          <v-icon size="24px">
            {{ icon.class }}
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Ümit Kenan UZ</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        class: 'mdi-facebook',
        href: 'https://www.facebook.com'
      },
      {
        class: 'mdi-twitter',
        href: 'https://www.twitter.com'
      },
      {
        class: 'mdi-linkedin',
        href: 'https://www.linkedin.com'
      },
      {
        class: 'mdi-instagram',
        href: 'https://www.instagram.com'
      },
    ],
  }),
}
</script>
