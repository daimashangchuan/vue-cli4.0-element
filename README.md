# vue+element

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```


### 项目介绍
```
api 存放接口文件
  axios 做一些全局的设置

assets 静态资源存放文件
  image 图片
  style 公共样式/默认的样式

components 公共组件
  app-header.vue 公共头部
  app-footer.vue 公共底部
  app-aside.vue 公共侧边栏

filter 全局过滤器文件
  index.js 过滤器

plugins 使用的插件文件
  element.js 按需导入的组件
  plugins.js 使用的插件

router 项目的路由文件
  index.js 路由的入口

store 项目的全局状态管理文件（vuex）
  index.js 状态入口  
  appStores 公共的状态存放

utils 公共的方法文件
  caches.js 数据缓存方法
  util.js 公共的方法

views 项目中的页面（组件）
  index   页面的主入口
  errorPages/404.vue 404报错页面
  userEnter/login 登录
  userEnter/register 注册

App.vue 组件入口
main.js js入口

.env.development  开发配置
.env.production   生产配置
```




