import * as types from '@/store/mutation-types'
import i18n from '@/plugins/i18n'
import * as Validator from 'vee-validate'

const state = {
  locale: navigator.language
}

const getters = {
  locale: (state) => state.locale
}

const actions = {
  setLocale({ commit }, payload) {
    i18n.locale = payload
    Validator.localize(payload)
    window.sessionStorage.setItem('locale', JSON.stringify(payload))
    commit(types.SET_LOCALE, payload)
  }
}

const mutations = {
  [types.SET_LOCALE](state, value) {
    state.locale = value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
