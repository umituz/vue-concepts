import packageJson from '../../../package.json'

const state = {
  appTitle: packageJson.projectName,
}

const getters = {
  appTitle: (state) => state.appTitle,
}

const actions = {

}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
