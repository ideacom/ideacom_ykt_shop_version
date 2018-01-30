// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:[
      //图片宽高比例额定：46：28
      'images/1.jpg',
      'images/2.jpg',
      'images/3.jpg'
    ],
    tagImg:[
      'images/localtion.png',
      'images/search.png',
      'images/tools.png',
      'images/safe.png',
      'images/rmb.png',
      'images/reserve.png'
    ],
    tagText:[
      {
        a:1,
        b:2
      },
      '服务网点查询',
      '配件价格查询',
      '维修进度查询',
      '延长保',
      '话费流量',
      '预约服务'
    ],
    logo:"images/store.png",
    storeName:"物联科技有限公司",
    localtionBtn:"立即前往"
  },
  imgTap: function () {
    wx.navigateTo({
      url: 'alternateDetil/alternateDetil',
    })
  },
  tag1:function(){
    var a = 3
    console.log("Object" === { a: "1", b: "2" }.constructor)
    wx.navigateTo({
      url: 'station/station?id='+a,
    })
  },
  tag2: function () {
    wx.navigateTo({
      url: 'peijian/peijian',
    })
  },
  tag3: function () {
    wx.navigateTo({
      url: 'progress/progress',
    })
  },
  tag4: function () {
    wx.navigateTo({
      url: 'safe/safe',
    })
  },
  tag5: function () {
    wx.navigateTo({
      url: 'charge/charge',
    })
  },
  tag6: function () {
    wx.navigateTo({
      url: 'reserve/reserve',
    })
  },
  localMainBtn:function(){
    wx.openLocation({
      latitude: 22.53,
      longitude: 113.39,
      name: '物联科技有限公司',
      address: '石岐区龙腾路溢彩荟9-910卡',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})