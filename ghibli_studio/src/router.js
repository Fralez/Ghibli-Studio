import Vue from 'vue'
import Router from 'vue-router'
//Component Imports
import MainBoard from '@/components/MainBoard'
import MovieDetails from '@/components/MovieDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainBoard',
      component: MainBoard
    },
    {
      path: '/:movieID',
      name: 'MovieDetails',
      component: MovieDetails
    }
  ]
})
