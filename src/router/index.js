import { createRouter, createWebHistory } from 'vue-router'
// 获取当前目录下所有 .router.js为后缀的路由文件
const files = import.meta.globEager('./*.router.js')
let modules = []
// 循环文件，把所有路由文件里的路由配置整合到 modules数组中
for (const key in files) {
  modules = [
    ...modules,
    ...files[key].default
  ]
}
const routes = [
  {
    'path': '/'
  },
  ...modules
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
})
export default router
