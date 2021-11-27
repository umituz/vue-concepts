import camelCase from 'lodash/camelCase'
const requireModule = require.context('.', false, /\.js$/) // modules klasörünün içindeki js dosyalarını getirir
const modules = {}

requireModule.keys().forEach((fileName) => {
  // index.js dosyasını yoksay
  if (fileName === './index.js') {
    return
  }
  const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ''))
  modules[moduleName] = requireModule(fileName).default
})

export default modules
