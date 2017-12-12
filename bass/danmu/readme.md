## 弹幕
[source](https://github.com/WildDogTeam/demo-js-danmu/blob/master/app/index.html)
- 野狗sync 
  配置 wilddog-auth.js  wilddog-sync
  ``` js
    var config = {
      authDomain: "wd2218102665ulldvn.wilddog.com",
      syncURL: "https://wd2218102665ulldvn.wilddogio.com"
    };
    wilddog.initializeApp(config);
    var ref = wilddog.sync().ref();

    ref.child('message').on('child_added', function(snapshot) {
    }
  ```
- jquery api
  1. 事件
    dom ready 比onload 更早
    oncontentready，这时DOM树完成
    script defer，这时开始执行设定了defer属性的script
    ondocumentready complete，这时可以使用HTC组件与XHR
    html.doScroll 这时可以让HTML元素使用doScroll方法
    window.onload 这时图片flash等资源都加载完毕
    [司徒正美](https://www.cnblogs.com/rubylouvre/archive/2009/12/30/1635645.html)
  
  2. $(html) 生成dom结点
    更方便
  
  3. width height 方法
