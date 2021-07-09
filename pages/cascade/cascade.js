Page({
  data: {
    clear: false, // 清空标记
    typeName: '', // 名称
    show: false, // 显示级联弹窗
    treeList: [], // 树形结构列表
    list: [
      { TypeId: 1, TypeName: "一级 1", Superior: 0 },
      { TypeId: 2, TypeName: "一级 2一级 1一级 1一级 1一级 1一级 1", Superior: 0 },
      { TypeId: 3, TypeName: "一级 3", Superior: 0 },
      { TypeId: 4, TypeName: "一级 4", Superior: 0 },
      { TypeId: 5, TypeName: "二级 2-1", Superior: 2 },
      { TypeId: 6, TypeName: "二级 2-2", Superior: 2 },
      { TypeId: 7, TypeName: "二级 1-1", Superior: 1 },
      { TypeId: 8, TypeName: "二级 1-2", Superior: 1 },
      { TypeId: 9, TypeName: "二级 1-3", Superior: 1 },
      { TypeId: 10, TypeName: "三级 2-1-1", Superior: 5 },
      { TypeId: 11, TypeName: "四级 2-1-1-1", Superior: 10 },
      { TypeId: 12, TypeName: "四级 2-1-1-2", Superior: 10 },
      { TypeId: 13, TypeName: "四级 2-1-1-3", Superior: 10 },
      { TypeId: 14, TypeName: "四级 2-1-1-4", Superior: 10 },
      { TypeId: 15, TypeName: "五级 2-1-1-4-1", Superior: 14 },
      { TypeId: 16, TypeName: "五级 2-1-1-4-2", Superior: 14 },
      { TypeId: 17, TypeName: "五级 2-1-1-4-3", Superior: 14 },
      { TypeId: 18, TypeName: "四级 2-1-1-5", Superior: 10 },
      { TypeId: 19, TypeName: "四级 2-1-1-6", Superior: 10 },
      { TypeId: 20, TypeName: "三级 2-1-2", Superior: 5 },
      { TypeId: 21, TypeName: "三级 1-1-1", Superior: 7 },
      { TypeId: 22, TypeName: "三级 1-1-2", Superior: 7 },
      { TypeId: 23, TypeName: "三级 1-2-1", Superior: 8 },
      { TypeId: 24, TypeName: "三级 1-2-2", Superior: 8 }],
  },
  onLoad() {
    this.getParentList()
  },

  // 显示级联
  handleShow() {
    this.setData({ show: true })
  },

  // 清空操作
  handleClear() {
    this.setData({ clear: true, typeName: '' })
  },

  // 关闭级联
  onClose(data) {
    const { show } = data
    this.setData({ show })
  },

  // 清空 - 设置清空标记
  onClear(data) {
    const { clear } = data
    this.setData({ clear })
  },

  // 获取选择的内容
  getName(data) {
    const { typeName } = data
    this.setData({ typeName })
  },

  /**
* @description 转换为树结构
* @param {array} list 扁平数据结构列表
*/
  getParentList() {
    const { list } = this.data
    const parentList = list.filter(item => item.Superior == 0);
    const treeList = this.getOrderTreeList(list, parentList);
    this.setData({ treeList })
  },

  /**
   * @description 转换为树结构
   * @param {array} data 子列表
   * @param {array} dataArr 父列表
   */
  getOrderTreeList(data, dataArr) {
    for (let i = 0; i < dataArr.length; i++) {
      let childrenArr = data.filter(item => item.Superior == dataArr[i].TypeId);
      if (dataArr[i].Superior === 0)
        dataArr[i].icon = childrenArr.length > 0 ? 'files' : 'file'
      else
        dataArr[i].icon = childrenArr.length > 0 ? 'files2' : 'file1'
      if (childrenArr.length > 0) {
        dataArr[i].children = childrenArr;
        this.getOrderTreeList(data, childrenArr);
      }
    }
    return dataArr
  }

});
