# egg-weibo-online-notice
一个用于尝试egg.js的微博用户上线自动提醒项目


使用：npm run dev
或者点击开始.bat。其内容同上。

参数修改：定时相关逻辑在app/schedule/second.js里，每3s一次查询
查询参数于service/status.js。

---


这个项目是为了尝试egg.js而写的。

最主要的逻辑就是每3s（时间设置在app/schedule/second.js中shcedule方法里的interval:"3s"）发一个请求查询目标用户的在线状态，时间间隔过短容易导致被微博封ip。

依赖的微博接口是“https://m.weibo.cn/api/container/getIndex” ，（位于app/service/status.js里的getStatus方法）当前这个测试参数是查询歌手“周深”的在线状态的，如果想查询其他人，自行获取参数替换data。  
这个接口是微博在名人动态处获取动态的，所以四舍五入，这个工具就是每三秒看一次微博的名人动态，在线了弹两个窗提示用户。

打开的页面在view/result/resultShow.tpl，是一个写死的静态页面。    
