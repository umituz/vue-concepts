import Vue from 'vue'
import * as VeeValidate from 'vee-validate'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import en from '../locales/en'
import tr from '../locales/tr'
import { localize, extend } from 'vee-validate'
import { required, email, min } from 'vee-validate/dist/rules'

extend('required', required)
extend('email', email)
extend('min', min)

localize('en', {
  en,
  messages: {
    required: (v ) => `${v} is required`,
    email: (v ) => `${v} must be valid e-mail address`,
    min: (v ) => `${v} must be minimum 3 characters`,
  },
});

localize('tr', {
  tr,
  messages: {
    required: (v ) => `${v} doldurulması zorunlu alandır`,
    email: (v ) => `${v} gerçerli bir adres olmak zorundadır `,
    min: (v ) => `${v} minimum 3 karakter olmak zorundadır`,
  },
});

Vue.use(VeeValidate)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
export default VeeValidate
