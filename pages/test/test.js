// pages/test/test.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    content: "我是交互界面元素"
  },
  /**
    * 点我触发事件button的事件函数
    */
  clickEvent: function (options) {
    this.setData({
      content: "当用户点击按钮后，事件改变数据，数据改变交互界面元素的显示内容"
    })
  },
})