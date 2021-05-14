Page({
  data: {
    list: [],
    // 展示项列表
    fields: [
      {
        field: 'a',
        value: 'aa'
      },
      {
        field: 'b',
        value: 'bb'
      },
      {
        field: 'c',
        value: 'cc'
      },
      {
        field: 'd',
        value: 'dd'
      },
      {
        field: 'e',
        value: 'ee'
      },
      {
        field: 'f',
        value: 'ff'
      },
      {
        field: 'g',
        value: 'gg'
      },
    ],
    selectFields: ['a', 'b', 'c', 'd'], // 默认展示项
    showSelectFields: false, // 显示展示项弹窗
  },
  onLoad() {
    this.getData()
  },
  getData() {
    // 模拟后台返回数据
    const list = [
      {
        a: '99',
        b: '88',
        c: '66',
        d: '99',
        e: '66',
        f: '33',
        g: '77',
      }
    ]
    this.setData({ list })
  },
  
  // 显示项设置
  handleShowFields() {
    this.setData({ showSelectFields: true })
  },

  // 关闭显示项设置
  handleCloseFields(data) {
    const { selectedFields, show } = data
    this.setData({
      showSelectFields: show,
      selectFields: selectedFields
    })
  }
});
