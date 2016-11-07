## 该目录为一个完整的移动端h5页面开发的基础轮子
## 基于淘宝[flexible.js](https://github.com/amfe/lib-flexible)做移动端布局开发
## js lib: 自选
## css lib: [less](https://github.com/less) or [sass](https://github.com/sass/sass)
## 该项目配置基于[node](https://github.com/nodejs/node)环境
[gulp](https://github.com/gulpjs/gulp) 功能列表
[watch](https://github.com/floatdrop/gulp-watch)
[livereload](https://github.com/vohof/gulp-livereload)
[less](https://github.com/less)
[minify-css]()
[autoprefixer]()
[gulp-postcss]()
[postcss-px2rem]()
[px2rem]()(该库为实现rem--->px的依赖库)
[gulp-jshint]()
[jshint]()(该库为实现代码压缩，的依赖库)
[uglify]()
1.js代码压缩，混淆，输出
2.less（sass）编译为css，压缩，auto-prefix（css:px--->rem基于flexible.js布局理念)
3.html,js,css ----->hot load(基于gulp livereload，watch module 和chrome liveReload插件)
###less or sass 编写规则
1. 文件内不能使用'//'进行注释，而必须使用'/**/'（px2rem 规则）
2. 例如border，应在声明后进行'/*no*/'注释以避免被编译为rem单位
3. 例如font-size 应该声明后进行 '/*px*/'注释以在编译时，根据设备dpr进行自适应处理，并且阻止其被编译为rem单位使得样式超出预设
4. margin,padding,width...均不添加注释

###less or js 编译
项目中有jsLib,less文件夹均作为less，js源文件的存放地址
在编译后输出至'assets/css', 'assets/js'目录下
js编译:shell --> gulp js
less编译:shell --> gulp less

### hot reload
1.node环境下,shell --> gulp ,开启代码变动监听，配合chrome插件实现页面有文件改动即可刷新（延长F5或者 command+R按键寿命）