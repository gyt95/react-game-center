## React Game Center
基于React构建的一个游戏资讯App

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
> 希望通过项目实践加深对React编程思想的理解，以及对React&Redux工作原理有更好的认识。

> 开发环境 [Nodejs](https://nodejs.org/zh-cn/) 8.4.0

> 使用了Facebook官方推出的 [create-react-app](https://github.com/facebookincubator/create-react-app) 脚手架来快速构建React应用

> 使用了[react-app-rewired](https://github.com/timarney/react-app-rewired)对脚手架进行重写（增加sass预编译等）

> 目前先用[MobX](https://github.com/mobxjs/mobx)实现状态管理，后续才改用[Redux](https://github.com/reactjs/redux)

## 项目结构

```

.
├─ public                             //存放入口html文件等
│    ...
│
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
│  │  ├─ 404                        //404组件
│  │  │    ...
│  │  |
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
│  ├─ config                          //工具函数
│  │    ...
│  ├─ images                          //图片
│  │    ...
│  ├─ mock                            //Mock数据
│  │    ...
│  ├─ stores                          //状态管理
│  │    ...
│  ├─ style                           //公共样式
│  │    ...
│  │
│  ├─ App.js                          //入口组件
│  ├─ App.test.js
│  ├─ index.js                        //入口js文件
│  ├─ logo.svg
│  └─ registerServiceWorker.js
│
├─ .gitignore
├─ README.md
├─ config-overrides.js
├─ jsconfig.json
├─ package.json
├─ package-lock.json
└─ yarn.lock


```
