import Vue from 'vue'
import Router from 'vue-router'
import Tags from '@/components/Tags'
import Text from '@/components/Text'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tags',
      component: Tags,
      data:
      {
        msg: "C'est la page des Tags"
      }
    },
     {
      path: '/text',
      name: 'Text',
      component: Text,
      data:
      {
        msg: "C'est la page des Texts"
      }
    }
  ]
})
