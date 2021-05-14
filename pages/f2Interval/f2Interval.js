Page({
  data: {
    tabs: [
      {
        id: 1001, // id：设置成后台数据给定的id值，方便与后台返回的数据进行匹配，插入data
        title: 'aaa', // 图表标题
        data: [], // 图表数据：从后台获取的数据赋值
      },
      {
        id: 1002, // id：设置成后台数据给定的id值，方便与后台返回的数据进行匹配，插入data
        title: 'bbb', // 图表标题
        data: [], // 图表数据：从后台获取的数据赋值
      },
    ],
  },
  onLoad() {
    this.getData()
  },
  getData() {
    // 模拟后台返回数据
    const data = {
      1001: [
        {
          NodeId: 1,
          NodeName: 'a',
          count: Math.round(Math.random() * 100) // 设置成（1-100）随机数方便模拟变化的数据
        },
        {
          NodeId: 2,
          NodeName: 'b',
          count: Math.round(Math.random() * 100)
        },
        {
          NodeId: 3,
          NodeName: 'c',
          count: Math.round(Math.random() * 100)
        },
      ],
      1002: [
        {
          NodeId: 1,
          NodeName: 'e',
          count: Math.round(Math.random() * 100)
        },
        {
          NodeId: 2,
          NodeName: 'f',
          count: Math.round(Math.random() * 100)
        },
        {
          NodeId: 3,
          NodeName: 'g',
          count: Math.round(Math.random() * 100)
        },
      ]
    }
    const tabs = this.data.tabs
    tabs.forEach((el, index) => {
      this.setData({
        [`tabs[${index}].data`]: data[el.id]
      })
    })
  },

  // 刷新
  handleRefresh() {
    this.getData()
  }
});
