<template>
  <v-dialog  v-model="dialog" persistent max-width="600px">
    <template  v-slot:activator="{ on, attrs }">
      <v-btn text v-bind="attrs" v-on="on" v-if="authUser === ''">
        <v-icon>mdi-account-circle</v-icon> &nbsp;
        {{ $t('dialogs.login.TITLE') }}
      </v-btn>
      <v-btn text v-else @click="logout">
        <v-icon>mdi-logout</v-icon> &nbsp;
        {{ $t('dialogs.logout.TITLE') }}
      </v-btn>
    </template>
    <v-card >
      <ValidationObserver v-slot="{ handleSubmit,reset }" ref="auth">
        <form @submit.prevent="handleSubmit(submit)" @reset.prevent="reset">

          <v-card-text align="right">
            <LocaleChanger/>
          </v-card-text>

          <v-card-text>
            {{ $t('dialogs.login.DESCRIPTION')}}
          </v-card-text>

          <v-card-text>
            <v-row>
              <v-col cols="12">
                <ValidationProvider :name="$t('validation.FULL_NAME')" rules="required|min:3" v-slot="{ errors }">
                  <v-text-field
                      name="loginName"
                      type="text"
                      v-model="formData.loginName"
                      :label="$t('placeholder.FULL_NAME')"
                      :error="errors.length > 0"
                      :error-messages="errors[0]"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col cols="12">
                <ValidationProvider :name="$t('validation.EMAIL')" rules="required|email" v-slot="{ errors }">
                  <v-text-field
                      name="loginEmail"
                      type="email"
                      v-model="formData.loginEmail"
                      :label="$t('placeholder.EMAIL')"
                      :error="errors.length > 0"
                      :error-messages="errors[0]"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col cols="12">
                <ValidationProvider :name="$t('validation.PASSWORD')" rules="required|min:3" v-slot="{ errors }">
                  <v-text-field
                      name="password"
                      type="password"
                      v-model="formData.password"
                      :label="$t('placeholder.PASSWORD')"
                      :error="errors.length > 0"
                      :error-messages="errors[0]"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="blue darken-1"
                text
                @click="closeDialog()"
            >
              {{ $t('general.CLOSE') }}
            </v-btn>
            <SubmitButton :buttonText="$t('dialogs.login.SUBMIT_BUTTON')"/>
          </v-card-actions>
        </form>
      </ValidationObserver>
    </v-card>
  </v-dialog>
</template>

<script>
import {mapGetters} from 'vuex'
import LocaleChanger from '@/components/core/LocaleChanger'

export default {
  name: "Login",
  data() {
    return {
      dialog: false,
      formData: {
        loginName: '',
        loginEmail: '',
        password: ''
      }
    }
  },
  components: {
    LocaleChanger
  },
  computed: {
    ...mapGetters(['authUser']),
    authUser() {
      return this.$store.getters.authUser;
    }
  },
  methods: {
    closeDialog() {
      this.$refs.auth.reset();
      this.formData = {};
      this.dialog = false
    },
    submit() {
      alert(`${this.$t('dialogs.login.MESSAGE')}`);
      this.dialog = false;
      this.$store.dispatch('setAuthUser', this.formData)
    },
    logout() {
      this.$store.dispatch('setAuthUser', '');
      alert(`${this.$t('dialogs.logout.MESSAGE')}`);
    }
  }
}
</script>

<style scoped>

</style>
