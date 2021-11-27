<template v-slot:activator="{ on }">
  <div>
    <v-app-bar flat>
      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
      </span>
        <Icon class="hidden-sm-and-down"/>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
            text
            v-for="(item, index) in menuItems"
            :key="index"
            :to="{ name: item.link }"
            exact
            :class="['hidden-sm-and-down', item.class]"
        >
          <v-icon>{{ item.icon }}</v-icon>
          &nbsp;{{ item.title }}
        </v-btn>
        <Login/>
        <LocaleChanger/>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="sidebar" absolute disable-resize-watcher>
      <v-list>
        <v-list-item>
            <Icon/>
          <v-list-item-action>
            <v-btn icon @click.stop="sidebar = !sidebar">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-list-item
            v-for="(item, index) in menuItems"
            :key="index"
            :to="{ name: item.link }"
            exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import LocaleChanger from '@/components/core/LocaleChanger'
import ResizeText from 'vue-resize-text'
import Login from '@/components/Login'
import Icon from '@/components/common/Icon'

export default {
  name: 'Toolbar',
  components: {
    LocaleChanger, Login, Icon
  },
  directives: {
    ResizeText
  },
  data() {
    return {
      sidebar: false,
    }
  },
  computed: {
    ...mapGetters(['locale']),
    appTitle() {
      return this.$store.getters.appTitle
    },
    menuItems() {
      return [
        {
          title: this.$t('menuItems.HOME'),
          link: 'home',
          icon: 'mdi-home'
        },
        {
          title: this.$t('menuItems.CONTACT'),
          link: 'contact',
          icon: 'mdi-help-circle-outline',
          class: 'btnContact'
        }
      ]
    }
  }
}
</script>
