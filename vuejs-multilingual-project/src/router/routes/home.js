export default [
  {
    path: '/',
    name: 'home',
    component: () =>
        import(/* webpackChunkName: "home" */ '@/components/Home.vue')
  },
]
