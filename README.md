## React Game Center
基于React构建一个实用游戏资讯App

## 技术栈
react + react-router + redux(目前暂时用Mobx代替) + scss + ES6

## 项目运行
```
git clone git@github.com:gyt95/react-game-center.git

cd react-game-center

npm install  //安装依赖包

npm run start  //开启本地服务器localhost:3000

npm run build //发布环境
```

## 说明
> 希望通过项目实践加深对React编程思想的理解，以及对React&Redux工作原理有更好的认识。因此，如果单纯停留在“如何运用React全家桶进行开发”层面上，本项目就失去了意义

> 开发环境 [nodejs](https://nodejs.org/zh-cn/) 8.4.0

> 使用了Facebook官方推出的 [Create React App](https://github.com/facebookincubator/create-react-app) 脚手架来快速构建React应用

> 附上一个vue2.0构建的目前做得比较完善的个人开源项目—— [地址](https://github.com/gyt95/vue2.0-douban-movie)


### 计划开发流程：
```
1.最普通的几个静态页面  
2.有效果的页面  
3.注册登录  
4.mock数据  
5.koa或者express写后台  
6.连接数据库  
7.后台页面  
8.数据改为访问后台获取  
```

### 要求不变

搞清楚react和redux思想、工作基本原理，才弄后台部分

对react和redux的理解要记录成文

### 目前进度

> 先用[Mobx](https://github.com/mobxjs/mobx)实现状态管理，后续再改用[Redux](https://github.com/reactjs/redux)

> 由于create-react-app不支持sass，所以原本是本地开发用sass进行预编译，导入的是编译后的.css文件。后来找到了解决方案，利用[react-app-rewired](https://github.com/timarney/react-app-rewired)对create-react-app脚手架进行重写