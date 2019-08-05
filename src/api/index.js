const api = {
  articleGet: '/api/article/get', // 根据id获取文章
  articleUpdate: '/api/article/update', // 更新文章
  articleCreate: '/api/article/create', // 创建文章
  articleGetList: '/api/article/getList', // 获取文章列表
  articleDel: '/api/article/delete', // 删除文章

  userCommon: '/api/user/comment', 
  userReply: '/api/user/reply', 
  user: '/api/user',
  userGetList: '/api/user/getUserList',
  userDel: '/api/user/delete',

  login: '/api/login',
  register: '/api/register',

  tagList: '/api/tags/getList',

  categoriesList: '/api/categories/getList', // 分类

  commonDel: '/api/comment/del', // 删除评论
  replyDel: '/api/reply/del',
  CommentAbout: '/api/comment/getAboutComments',

}
export default api;