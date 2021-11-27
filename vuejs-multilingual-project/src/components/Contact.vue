<template>
  <v-container fluid>
    <v-layout row wrap>
      <Heading :title="$t('pages.contact.TITLE')"/>
      <Description :description="$t('pages.contact.DESCRIPTION')"/>
      <v-flex xs12 sm6 offset-sm3>
        <ValidationObserver v-slot="{ handleSubmit,reset }" ref="contact">
          <form @submit.prevent="handleSubmit(submit)" @reset.prevent="reset">
            <v-layout column>
              <ValidationProvider :name="$t('validation.FULL_NAME')" rules="required|min:3" v-slot="{ errors }">
                <v-flex>
                  <v-text-field
                      id="fullname"
                      name="fullname"
                      type="text"
                      :label="$t('placeholder.FULL_NAME')"
                      v-model="name"
                      :error="errors.length > 0"
                      :error-messages="errors[0]"
                  ></v-text-field>
                </v-flex>
              </ValidationProvider>
            </v-layout>

            <v-flex>
              <ValidationProvider :name="$t('validation.EMAIL')" rules="required|email" v-slot="{ errors }">
                <v-text-field
                    id="email"
                    name="email"
                    type="email "
                    :label="$t('placeholder.EMAIL')"
                    v-model="email"
                    :error="errors.length > 0"
                    :error-messages="errors[0]"
                ></v-text-field>
              </ValidationProvider>
            </v-flex>
            <v-layout column>
              <ValidationProvider :name="$t('validation.SUBJECT')" rules="required" v-slot="{ errors }">
                <v-flex>
                  <v-text-field
                      id="subject"
                      name="subject"
                      type="text"
                      :label="$t('placeholder.SUBJECT')"
                      v-model="contactFormData.subject"
                      :error="errors.length > 0"
                      :error-messages="errors[0]"
                  ></v-text-field>
                </v-flex>
              </ValidationProvider>
            </v-layout>
            <v-layout column>
              <ValidationProvider :name="$t('validation.PHONE')" rules="required">
                <VuePhoneNumberInput v-model="contactFormData.phone"/>
              </ValidationProvider>
            </v-layout>
            <br>
            <v-layout column>
              <ValidationProvider :name="$t('validation.COUNTRY')" rules="required" v-slot="{ errors }">
                <v-flex class="overflow-hidden">
                  <v-autocomplete
                      :items="countries"
                      :filter="customFilter"
                      color="white"
                      v-model="contactFormData.country"
                      item-text="name"
                      :label="$t('validation.COUNTRY')"
                      :error="errors.length > 0"
                      :error-messages="errors[0]"
                  ></v-autocomplete>
                </v-flex>
              </ValidationProvider>
            </v-layout>
            <br>
            <v-layout column>
              <ValidationProvider :name="$t('validation.MESSAGE')" rules="required" v-slot="{ errors }">
                <v-flex>
                  <v-textarea
                      id="message"
                      name="message"
                      :label="$t('placeholder.MESSAGE')"
                      auto-grow
                      v-model="contactFormData.message"
                      :error="errors.length > 0"
                      :error-messages="errors[0]"
                  ></v-textarea>
                </v-flex>
              </ValidationProvider>
            </v-layout>
            <v-flex text-xs-center mt-5 mb-3>
              <SubmitButton :buttonText="$t('pages.contact.SUBMIT_BUTTON')"/>
            </v-flex>
          </form>
        </ValidationObserver>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import {mapGetters} from 'vuex'

export default {
  name: 'Contact',

  metaInfo() {
    return {
      title: this.$store.getters.appTitle,
      titleTemplate: `${this.$t('pages.contact.TITLE')} - %s`
    }
  },

  components: {
    VuePhoneNumberInput
  },

  computed: {
    ...mapGetters(['authUser']),

    name: {
      get() {
        return this.$store.getters.authUser.loginName ?? this.contactFormData.fullname;
      },
      set(value) {
        this.contactFormData.fullname = value;
      }
    },

    email: {
      get() {
        return this.$store.getters.authUser.loginEmail ?? this.contactFormData.email;
      },
      set(value) {
        this.contactFormData.email = value;
      }
    }
  },

  data: () => ({
    contactFormData: {
      fullname: '',
      email: '',
      subject: '',
      message: '',
      phone: '',
      country: '',
    },
    countries:[]
  }),

  created() {
    this.countries = this.getCountries();
  },

  methods: {
    submit() {
      this.$refs.contact.reset();
      alert(`${this.$t('general.SUBMIT_MESSAGE')}`);
      this.$store.dispatch('sendContactInfo', this.contactFormData);
      this.contactFormData = {};
    },
    customFilter(item, queryText) {
      const textOne = item.name.toLowerCase()
      const textTwo = item.abbr.toLowerCase()
      const searchText = queryText.toLowerCase()
      return textOne.indexOf(searchText) > -1 ||
          textTwo.indexOf(searchText) > -1
    },
    getCountries() {
      return [
        {id: 1, abbr: "TR", name: this.$t('countries.TR')},
        {id: 2, abbr: "US", name: this.$t('countries.US')},
        {id: 3, abbr: "GB", name: this.$t('countries.GB')},
        {id: 4, abbr: "DE", name: this.$t('countries.DE')},
        {id: 5, abbr: "SE", name: this.$t('countries.SE')},
        {id: 6, abbr: "KE", name: this.$t('countries.KE')},
        {id: 7, abbr: "BR", name: this.$t('countries.BR')},
        {id: 8, abbr: "ZW", name: this.$t('countries.ZW')}
      ];
    }
  },
};
</script>
