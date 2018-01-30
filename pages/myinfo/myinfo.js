// pages/myinfo/myinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerBgImg:'./images/bg.png',
    logo:'./images/mylogo.jpeg',
    logoText:'三菱',
    itemsImgUrl:[
      './images/order.png',
      './images/local.png',
      './images/vip.png'
    ],
    navText:[
      '我的订单',
      '我的收货地址',
      '物联会员'
    ]
  },
  upload:function(){
    wx.chooseImage({
      count:1,
      success: function(res) {
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'https://ideacom.applinzi.com/',
          filePath: tempFilePaths[0],
          name: 'image',
          success:function(){
            console.log("成功")
          },
          fail:function(){
            console.log("失败")
          }
        })
      },
    })
  },
  
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