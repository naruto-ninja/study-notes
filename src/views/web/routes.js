import * as utils from '@/utils'

/**
 * @AsyncComponent {func} 实现动态加载路由（按需加载） dynamic router方法
 *
 */

 export default {
  path: '/',
  name: 'home',
  component: utils.AsyncComponent(() => import(/* webpackChunkName:'webLayout' */ '@/components/web/layout')),
  // component: Layout,
  childRoutes: [
    { path: '', component: utils.AsyncComponent(() => import(/* webpackChunkName:'home' */ './home')) },
    { path: 'archives', component: utils.AsyncComponent(() => import(/* webpackChunkName:'archives' */ './archives')) },
    { path: 'article/:id', component: utils.AsyncComponent(() => import(/* webpackChunkName:'article' */ './article')) },
    { path: 'categories', component: utils.AsyncComponent(() => import(/* webpackChunkName:'categories' */ './categories')) },
    { path: 'categories/:name', component: utils.AsyncComponent(() => import(/* webpackChunkName:'list1' */ './list')) },
    { path: 'tags/:name', component: utils.AsyncComponent(() => import(/* webpackChunkName:'list2' */ './list')) },
    { path: '*', component: utils.AsyncComponent(() => import(/* webpackChunkName:'404' */ '@/components/404')) }
  ]
}
