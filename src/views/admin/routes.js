
import * as utils from '@/utils'

const Layout = utils.AsyncComponent(() => import(/* webpackChunkName:'adminLayout' */ '@/components/admin/layout'))
const PageNotFound = utils.AsyncComponent(() => import(/* webpackChunkName:'admin404' */ '@/components/404'))
const Home = utils.AsyncComponent(() => import(/* webpackChunkName:'adminHome' */ './home'))
const Edit = utils.AsyncComponent(() => import(/* webpackChunkName:'edit' */ './article/edit'))
const Login = utils.AsyncComponent(() => import(/* webpackChunkName:'login' */ './login'))
const ArticleManage = utils.AsyncComponent(() => import(/* webpackChunkName:'manage' */ './article/manage'))
const UserManage = utils.AsyncComponent(() => import(/* webpackChunkName:'user' */ './user'))

export default {
  path: 'admin',
  component: Layout,
  childRoutes: [
    {
      path: '',
      icon: 'home',
      name: '首页',
      component: Home
    },
    {
      path: 'articles',
      icon: 'edit',
      name: '文章管理',
      childRoutes: [
        { path: 'edit', icon: 'edit', name: '新增文章', component: Edit },
        { path: 'manage', icon: 'folder', name: '管理文章', component: ArticleManage }
      ]
    },
    { path: 'usermanage', name: '用户管理', icon: 'user', component: UserManage },
    { path: 'login', component: Login },
    { path: '*', component: PageNotFound }
  ]
}
