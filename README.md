# 王者荣耀全栈项目





# 准备



## Monorepo

根目录下新建 `pnpm-workspace.yaml` 文件

```yaml
packages: 
    - "web/**"
    - "admin/**"
    - "server/**"
```

安装全局开发依赖

```sh
pnpm add typescript -w -D
```


### 参考

1. [基于pnpm从0搭建Monorepo工程 - 掘金](https://juejin.cn/post/7104545520625909774)
2. [pnpm + workspace + changesets 构建你的 monorepo 工程 - 掘金](https://juejin.cn/post/7098609682519949325)



## Element Plus

安装 Element Plus

```sh
pnpm add element-plus -F admin
pnpm add unplugin-vue-components unplugin-auto-import -F admin -D
```

在 `/admin/vite.config.ts` 文件中配置按需引入

```typescript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ]
});
```





```sh
pnpm add vue-router@4 ant-design-vue unplugin-vue-components axios @vueup/vue-quill -F admin
pnpm add vue-router@4 axios -F mobile
```


### 



## 服务端

创建 `/server` 文件夹并初始化

```js
pnpm init
```

安装相关依赖：

```sh
pnpm add express mongoose cors -F server
```





### 数据库

[视频安装流程](https://www.bilibili.com/video/BV1wr4y1e7rw)



## 技术栈

```
TypeScript
Less
Vue.js
Vue Router
Element Plus
Vant
Express
MongoDB
ESLint/Prettier
```

## 性能优化
- [x] HTTP2/HTTPS
- [x] 精灵图，减少HTTP请求
- [x] 图片懒加载/长列表渲染
- [ ] 服务端渲染（SSR）和预渲染
- [ ] 静态资源使用CDN
- [ ] 阿里云OSS云存储上传文件
- [ ] 资源缓存
- [ ] 文件压缩
- [x] webp 格式图片
- [x] 使用CSS3效果代替图片
- [x] 事件委托
- [x] 路由懒加载
- [x] 组件懒加载
- [ ] requestAnimationFrame（解决页面卡顿）
- [ ] 首屏渲染
- [x] 防抖节流


## 页面
### 移动端应用
- [x] 首页
- [x] 攻略中心
- [x] 赛事中心
- [x] IP新游
- [x] 新闻列表
- [x] 新闻详情
- [x] 英雄列表
- [ ] 英雄详情
- [x] 英雄皮肤
- [x] 英雄介绍
- [x] 视频详情

### 后台管理系统
- [x] 登录
- [x] 英雄编辑
- [x] 装备编辑
- [x] 文章编辑
- [x] 视频编辑
- [x] 管理员编辑
- [ ] 批量处理
- [ ] 搜索功能（模糊查询）

### 后端接口
#### 移动端应用
- [x] 首页轮播图
- [x] 首页新英雄轮播图
- [x] 首页新闻资讯分类列表
- [ ] 指定分类的文章列表
- [x] 文章详情
- [ ] 英雄列表
- [ ] 英雄详情

#### 后台管理系统
- [x] token 验证中间件
- [ ] 图片上传至 OSS
- [x] 增删改查
- [ ] 批量处理
- [ ] 以树形结构返回所有分类列表