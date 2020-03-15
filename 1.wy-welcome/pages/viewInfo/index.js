// pages/viewInfo/index.js
app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    currentSwiper: 0,
    des: [{
        txt1: '前端见面会',
        txt2: '由于疫情的原因，等待回校之后、再另行通知'
      },
      {
        txt1: '网园日常例会',
        txt2: '回校后安排'
      },
      {
        txt1: '两位同侪',
        txt2: '现在群里有xxx,xxx'
      },
      {
        txt1: '平静一下',
        txt2: '以后的日子还很长'
      }
    ],
    countCode: 0,
    swiperStyle: 'swiper4',
    nameImg: ['https://pictures-image.oss-cn-beijing.aliyuncs.com/lzh.png', 'https://pictures-image.oss-cn-beijing.aliyuncs.com/cca.png','https://pictures-image.oss-cn-beijing.aliyuncs.com/sxh.png'],
    opa: ['opa1',
      'opa2',
      'opa3',
      'opa4',
      'opa5',
      'opa6',
      'opa7',
      'opa8',
      'opa9',
      'opa10'
    ],
    jump: [
      'dojump1',
      'dojump2',
      'dojump3',
      'dojump4',
      'dojump5',
      'dojump6',
      'dojump7',
      'dojump8',
      'dojump9',
      'dojump10']
  },
  onLoad() {
    const des = this.data.des
    // 判断人物
    const name = wx.getStorageSync('userInfo').nickName
    if(name === '宝') {
      this.setData({
        name: '谢宝中'
      })
    } else if (name === 'L.文禧') {
      this.setData({
        name: 'L.文禧'
      })
    } else if (name === '访书') {
      this.setData({
        name: '李梓韩'
      })
    } else if (name === 'sing洛') {
      des[2].txt2 = '现在群里有陈诚安、孙学涵'
      this.setData({
        name: '罗泽豪',
        des
      })
    } else if (name === 'Kevin') {
      des[2].txt2 = '现在群里有罗泽豪、孙学涵'
      this.setData({
        name: '陈诚安',
        des
      })
    } else if (name.indexOf('水泡泡') !== -1) {
      des[2].txt2 = '现在群里有罗泽豪、陈诚安'
      this.setData({
        name: '孙学涵',
        des
      })
    }
      else {
      this.setData({
        name: '名字出错'
      })
    }

    for (let i = 0; i < this.data.jump.length; i++) {
      this.opacityHandle(this, this.data.opa[i], this.data.jump[i],~~(200 + 1500 * i))
    }
  },

  // 显示动画
  opacityHandle(that, param1, param2, time) {
    setTimeout(() => {
      var json = '{"' + param1 + '":""}'
      json = JSON.parse(json);
      json[param1] = 'opacity: 1'
      that.setData(json)
      if (param2) {
        setTimeout(() => {
          app.dojump(that, param2, 800, 500, 300)
        }, 200)
      }
    }, time)
  },
  swiperChange: function(e) {
    const that = this
    if (e.detail.current === 1) {
      // 第一个渐出
      app.slideupshow(this, 'move1', '40vh', 1)
      // 第2个渐出
      setTimeout(function() {
        app.slideupshow(this, 'move2', '47vh', 1)
      }.bind(this), 1000);
      // 第3个渐出
      setTimeout(function() {
        app.slideupshow(this, 'move3', '54vh', 1)
      }.bind(this), 2000);
      // 第4个渐出
      setTimeout(function() {
        app.slideupshow(this, 'move4', '61vh', 1)
        var countCode = 0
        const timer = setInterval(function () {
          countCode += 50
          if (that.data.name === '罗泽豪') {
            that.addNum(that, 'countCode',countCode,7530, timer)
          } else if (that.data.name === '陈诚安') {
            that.addNum(that,'countCode', countCode,6030, timer)
          } else if (that.data.name === '孙学涵') {
            that.addNum(that, 'countCode',countCode,3564, timer)
          }else {
            that.addNum(that,'countCode', countCode,10000, timer)
          }
        },30)
      }.bind(this), 3000);
      // 第5个渐出
      setTimeout(function() {
        app.slideupshow(this, 'move5', '68vh', 1)
      }.bind(this), 4000);
      // 6第个渐出
      setTimeout(function() {
        app.slideupshow(this, 'move6', '75vh', 1)
      }.bind(this), 5000);
    }

    if (e.detail.current === 2) {
      // 循环遍历注册动画事件
      var count = 0
      for(let i=0; i<11; i++) {
        count += 600
        setTimeout(() => {
          var json = '{"' + 'left' + i.toString() + '":""}'
          json = JSON.parse(json);
          json['left' + i.toString()] = 'left: 0'
          that.setData( json )
        }, count)
      }
      var countTime = 0
      
      this.opacityHandle(this, 'experience1', false, 200)
      this.opacityHandle(this, 'experience2', false, 3800)
      this.opacityHandle(this, 'experience3', false, 5500)
      this.opacityHandle(this, 'experience4', false, 6100)
      this.opacityHandle(this,'experience5',false,6700)

      // 最后一个历时
      setTimeout(() => {
        that.setData({
          left11: 'left: 0'
        })
        const timer = setInterval(function () {
          countTime += 2
          that.addNum(that, 'countTime', countTime, 175, timer)
        }, 30)
      }, 6705)
    }

    if (e.detail.current === 3) {
      this.setData({
        swiperStyle: 'swiper4 swiperStyle'
      })
    }
    this.setData({
      currentSwiper: e.detail.current
    })
  },

  // 动态加数
  addNum(that, param,countCode,totalCount,timer) {
    var json = '{"' + param + '":""}'
    json = JSON.parse(json);
    json[param] = countCode
    that.setData(json)
    if (countCode > totalCount) {
      json[param] = totalCount
      that.setData(json)
      clearInterval(timer)
    }
  }
})