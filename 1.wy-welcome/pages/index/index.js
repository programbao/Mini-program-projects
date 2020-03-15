//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  onLoad() {
    const userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      wx.redirectTo({
        url: '../viewInfo/index',
      })
    }else {
      alert('请重新进入')
    }
  },
   // 处理
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
      // 判断用户是否点击允许
    if (e.detail.rawData) {
      console.log('点击了允许')
      wx.setStorageSync('userInfo', e.detail.userInfo)
      wx.redirectTo({
        url: '../viewInfo/index',
      })
    }else{
      console.log('没有点击')
    }
  }
})
