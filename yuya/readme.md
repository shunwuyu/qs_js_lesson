## 羽牙专栏
  - [copy](https://github.com/mqyqingfeng/Blog/issues/32)
    > [slice](http://www.w3school.com.cn/jsref/jsref_slice_array.asp)
    > 对象数组使用slice 或 concat 不行，不是真正的拷贝
      - 如果是简单类型，就会拷贝，如果是复杂类型，就会引用
      - 浅拷贝 复制引用的拷贝方法 concat 和 slice 属于
      - 深拷贝 即例嵌套了对象， 也不会影响
    > JSON.parse(JSON.stringify()) 简单粗暴
      - 不能拷贝函数
    > 浅拷贝函数 shallowCopy for in 
    > 深拷贝函数如果是对象， 递归调用
      - 性能问题， 递归
      - 视情况而定， 深或浅
