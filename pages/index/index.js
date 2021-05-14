Page({
  data: {
    statisticalList: [
      {
        id: 1,
        name: '级联选择',
        imgUrl: '1',
      },
      {
        id: 2,
        name: '批量生图表',
        imgUrl: '2',
      },
      {
        id: 3,
        name: '表格',
        imgUrl: '7',
      },
      {
        id: 4,
        name: '分页加载',
        imgUrl: '5',
      },
      {
        id: 5,
        name: '设置显示项',
        imgUrl: '6',
      },
      {
        id: 6,
        name: 'loading',
        imgUrl: '4',
      },
      {
        id: 7,
        name: '暂无数据',
        imgUrl: '3',
      }
    ],
  },
  onLoad() { },
  // 跳转
  navigateToItem(e) {
    const { id } = e.target.dataset
    let url = ''
    switch (id) {
      case 1:
        url = 'cascade/cascade'
        break
      case 2:
        url = 'f2Interval/f2Interval'
        break
      case 3:
        url = 'table/table'
        break
      case 4:
        url = 'scrollView/scrollView'
        break
      case 5:
        url = 'setFields/setFields'
        break
      case 6:
        url = 'loading/loading'
        break
      case 7:
        url = 'noData/noData'
        break
    }
    if (url == '') {
      dd.alert({
        content: '开发中',
        buttonText: '我知道了',
      })
      return;
    }
    dd.navigateTo({
      url: `/pages/${url}`
    });
  },

});
