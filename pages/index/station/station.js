// pages/index/station/station.js
Page({
  data: {
    formHolderText:'请选择查询的城市',
    serviceHolderText:'客服中心',
    region: [
      '广东省',
      '中山市',
      '石歧区街道'
      ],
    arrow:'images/arrow.png',
    numImg:'images/num.png',
    itemsNumber:[
      '1',
      '2'
    ],
    customItem: '全部',
    itemsName: [
      '中山市石岐区客服中心',
      '中山市石岐区客服中心2'
      ],
    place: [
      '中山市石岐区龙腾路大信溢彩荟9楼910卡',
      '中山市石岐区大信新都会莲塘北路3号14卡物联科技二楼（天明花园A区）'
      ],
    time: [
      '09:00-17:30',
      '09:00-17:30'
      ],
    phone: [
      '0760-89988180',
      '0760-00000000'
      ],
    map:'地图导航'
  },
  bindRegionChange:function(e){
    this.setData({
      region:e.detail.value
    })
  },
  onLoad: function (options) {
    var b = options.id
    console.log(b)
  },

  
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