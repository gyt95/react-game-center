## React Game Center
基于React构建一个实用游戏资讯App

## 技术栈
react + react-router + redux(暂用mobx代替) + scss + es6

## 项目运行
```
git clone git@github.com:gyt95/react-game-center.git

cd react-game-center

npm install  //安装依赖包

npm run start  //开启本地服务器localhost:3000

npm run build //发布环境
```

## 说明
> 希望通过项目实践加深对React编程思想的理解，以及对React&Redux工作原理有更好的认识。如单纯停留在“会用React全家桶”层面上，本项目失去了意义

> 开发环境 [Nodejs](https://nodejs.org/zh-cn/) 8.4.0

> 使用了Facebook官方推出的 [create-react-app](https://github.com/facebookincubator/create-react-app) 脚手架来快速构建React应用

> 使用了[react-app-rewired](https://github.com/timarney/react-app-rewired)对脚手架进行重写（增加sass预编译等）

> 目前先用[MobX](https://github.com/mobxjs/mobx)实现状态管理，后续才改用[Redux](https://github.com/reactjs/redux)

### 开发计划：
```
1.编写静态页面  
2.为页面增加动画  
3.注册登录  
4.mock数据  
5.koa或者express写后台  
6.连接数据库  
7.后台页面  
8.数据改为访问后台获取
9.增加表单等交互操作，丰富项目功能
```

### 学习流程：

-> 深入理解React思想及特点
-> 学习MobX，搞懂工作原理
-> 大致了解一下Redux
-> 关于Nodejs开发，先学会Koa2框架的使用
-> 学习RESTful API，理解设计思路，实现前后端分离开发
-> 改写MobX为Redux

### 目前开发状态
  
> 暂时用[json-server](https://github.com/typicode/json-server)作为RESTful API，方便进行注册登录等操作  
> 步骤：npm install json-server -g
> 运行：npm run mock
  
无限优化组件代码、不断熟悉MobX

## 项目结构

```

.
├─ public                             //存放入口html文件等
│    ...
├─ screenshots                        //项目截图
│    ...
│
├─ server                             //后台部分
│    ...
│
├─ src
│  ├─ assets                          //静态资源文件
│  │    ...
│  │
│  ├─ components
│  │  ├─ Billboard                    //榜单页
│  │  │    ...
│  │  |
│  │  ├─ Category                     //种类页
│  │  │    ...
│  │  |
│  │  ├─ Enhance                      //高阶组件
│  │  │    ...
│  │  |
│  │  ├─ Footer                       //底部组件
│  │  │    ...
│  │  |
│  │  ├─ Header                       //顶部组件
│  │  │    ...
│  │  |
│  │  ├─ Home                         //首页
│  │  │    ...
│  │  |
│  │  ├─ Loading                      //加载组件
│  │  │    ...
│  │  |
│  │  ├─ Login                        //登录页
│  │  │    ...
│  │  |
│  │  ├─ My                           //个人中心页
│  │  │    ...
│  │  |
│  │  ├─ Profile                      //个人详情页
│  │  │    ...
│  │  |
│  │  ├─ Search                       //搜索页
│  │  │    ...
│  │  |
│  │  └─ Tips                         //文字提示组件
│  │
│  ├─ config
│  │  └─ config.js                    //工具函数
│  │
│  ├─ images                          //图片
│  │    ...
│  │
│  ├─ mock                            //Mock数据
│  │    ...
│  │
│  ├─ stores                          //状态管理
│  │    ...
│  ├─ style                           //公共样式
│  │    ...
│  │
│  ├─ App.js                          //入口组件
│  ├─ App.test.js                     //
│  ├─ index.js                        //入口js文件
│  ├─ logo.svg                        //
│  └─ registerServiceWorker.js        //

├─ .gitignore
├─ README.md
├─ config-overrides.js
├─ jsconfig.json
├─ package.json
├─ package-lock.json
└─ yarn.lock


```