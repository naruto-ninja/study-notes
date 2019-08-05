const router = require('koa-router')()
const ArticleRouter = require('./article')
const UserRouter = require('./user')
const TagController = require('../controllers/tag')
const CategoryController = require('../controllers/category')
const UserController = require('../controllers/user')
const CommentController = require('../controllers/comment')

router.use('/api/article', ArticleRouter.routes())
router.use('/api/user', UserRouter.routes())

// 登录注册
router.post('/api/login', UserController.login)
router.post('/api/register', UserController.register)

// 获取所有标签以及每个标签的总数
router.get('/api/tags/getList', TagController.getTags)
//根据标签的名字获取文章
router.get('/api/tags/getArticles', TagController.getArticlesByTag)

// 获取所有分类以及分类的总数
router.get('/api/categories/getList', CategoryController.getCategories)
router.get('/api/categories/getArticles', CategoryController.getArticlesByCate)

// 删除评论
router.delete('/api/comment/del', CommentController.del)
router.delete('/api/reply/del', CommentController.del)
router.get('/api/comment/getAboutComments', CommentController.getAboutComments)

router.get('/', async ctx => {
  ctx.body = 'hello koa2'
})

module.exports = router
