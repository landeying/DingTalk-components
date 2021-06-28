Component({
  mixins: [],
  data: {
    list: [], // 列表
    // 选中树节点数据
    treeData: {
      typeId: 0, // 选择节点id
      typeName: '', // 选择节点名称
    },
    // 初始选中树节点数据
    initTreeData: {
      typeId: 0, // 选择节点id
      typePid: 0, // 选择节点父id
      typeName: '', // 选择节点名称
    },
    pid: 0, // 父节点id
    initSelectList: [], // 初始选项切换列表
    selectList: [], // 选项切换列表
    showSelect: false, // 展示选项切换列表
    lock: false, // 级联显示时锁定子组件handleShow方法
  },
  props: {
    show: false, // 显示弹窗
    className: '', // 类名
    treeList: Array, // 树列表
    clear: false, // 清空标记
    onClose: () => { }, // 关闭
    onClear: () => { }, // 清空
    onGetName: () => { }, // 获取选中的名字
  },
  didMount() {
  },
  didUpdate() {
    if (!this.data.lock && this.props.show) this.handleshow()
    if (this.props.clear) this.handleClear()
  },
  didUnmount() { },
  methods: {
    /**
    * @description 根节点选择
    * @param {object} data 组件数据 name：节点名称, pid：父节点id, cid：子节点id, len：子节点长度
    */
    select(data) {
      this.handleSelectTree(data)
    },

    /**
    * @description 父/子节点选择
    * @param {object} data 组件数据 name：节点名称, pid：父节点id, cid：子节点id, len：子节点长度
    */
    childSelect(data) {
      this.handleSelectTree(data)
    },

    /**
    * @description 节点选择
    * @param {object} data 组件数据 name：节点名称, pid：父节点id, cid：子节点id, len：子节点长度
    */
    handleSelectTree(data) {
      // len=0表示点击项没有有子节点
      const { name, pid, cid, len } = data
      let selectList = this.data.selectList
      if (len !== 0) {
        selectList.push({
          name,
          cid,
          pid
        })
      }
      this.setData({
        'treeData.typeName': len ? '' : name,
        'treeData.typeId': len ? 0 : cid,
        showSelect: len ? true : false,
        pid: cid,
        selectList: [...selectList]
      }, () => {
        if (len === 0) {
          this.onClose()
          this.setData({
            'initTreeData.typeName': name,
            'initTreeData.typeId': cid,
            'initTreeData.typePid': pid,
            pid,
            initSelectList: [...selectList],
          })
          this.props.onGetName({ typeName: this.data.initTreeData.typeName })
        }
      })
    },

    // 选项返回
    selectBack(e) {
      const { pid, index } = e.target.dataset
      let selectList = this.data.selectList
      selectList.splice(index)
      this.setData({
        pid,
        showSelect: pid ? true : false,
        selectList: [...selectList]
      })
    },

    // 显示
    handleshow() {
      const { show } = this.props
      if (show) {
        const { initTreeData: { typeId, typePid }, initSelectList } = this.data
        this.setData({
          lock: true,
          pid: typePid,
          showSelect: !(typeId === 0),
          selectList: typeId === 0 ? [] : [...initSelectList], // 选项切换列表
        })
      }
    },

    // 关闭
    onClose() {
      this.setData({ lock: false })
      this.props.onClose({ show: false })
    },

    // 清空
    handleClear() {
      this.setData({
        'treeData.typeId': 0, // 选择节点id
        'treeData.typeName': '', // 选择节点名称
        'initTreeData.typeId': 0, // 选择节点id
        'initTreeData.typePid': 0, // 选择节点父id
        'initTreeData.typeName': '', // 选择节点名称
        pid: 0, // 产品类型-父节点id
        initSelectList: [], // 产品类型-初始选项切换列表
        selectList: [], // 产品类型-选项切换列表
      })
      this.props.onClear({ clear: false })
    }
  },
});
