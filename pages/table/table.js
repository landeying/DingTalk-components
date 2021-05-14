Page({
  data: {
    // 表头数据
    labelList: [
      {
        label: '序号',
        prop: 'id'
      },
      {
        label: '姓名',
        prop: 'name'
      },
      {
        label: '年龄',
        prop: 'age'
      },
    ],
    summationData: [], // 合计数据
    propList: [], // 表格数据
    labelList1: [
      {
        label: '序号',
        prop: 'id'
      },
      {
        label: '姓名',
        prop: 'name'
      },
      {
        label: '年龄',
        prop: 'age'
      },
      {
        label: '日期',
        prop: 'date'
      },
      {
        label: '号码',
        prop: 'num'
      },
    ],
    summationData1: [], // 合计数据
    propList1: [], // 表格数据
  },
  onLoad() {
    this.getData()
  },
  getData() {
    // 模拟后台获取数据
    const propList = [
      {
        id: '1',
        name: '张三',
        age: '18'
      },
      {
        id: '2',
        name: '李四',
        age: '25'
      },
      {
        id: '3',
        name: '王五',
        age: '40'
      },
      {
        id: '4',
        name: '王五',
        age: '40'
      },
      {
        id: '5',
        name: '王五',
        age: '40'
      },
      {
        id: '6',
        name: '王五',
        age: '40'
      },
      {
        id: '7',
        name: '王五',
        age: '40'
      },
      {
        id: '8',
        name: '王五',
        age: '40'
      },
      {
        id: '9',
        name: '王五',
        age: '40'
      },
      {
        id: '10',
        name: '王五',
        age: '40'
      },
    ],
      summationData = ['合计', '', '']
    const propList1 = [
      {
        id: '1',
        name: '张三',
        age: '18',
        date: '2020',
        num: '2323',
      },
      {
        id: '2',
        name: '李四',
        age: '25',
        date: '2020',
        num: '2323',
      },
      {
        id: '3',
        name: '王五',
        age: '40',
        date: '2020',
        num: '2323',
      },
    ],
      summationData1 = ['合计', '', '', '', '']
    this.setData({ propList, summationData, propList1, summationData1 })
  },
});
