Component({
  mixins: [],
  data: {
    selectedFields: [], // 选择的设置项
  },
  props: {
    fields: Array, // 显示需要设置的项
    selectFields: Array, // 选择的设置项
    onClose: () => { }, // 关闭设置项
    show: false, // 显示设置项弹窗
  },
  didMount() {
    this.setData({
      selectedFields: this.props.selectFields
    })
  },
  didUpdate() { },
  didUnmount() { },
  methods: {
    // 选择设置项
    handleSelectedFields(e) {
      const { field } = e.target.dataset // 获取
      const { selectedFields } = this.data
      // 如果默认展示项不包含选择的字段，则将选择的字段插入到默认展示项中。反之删除
      if (selectedFields.indexOf(field) === -1) selectedFields.push(field)
      else selectedFields.splice(selectedFields.indexOf(field), 1)
      this.setData({
        selectedFields
      })
    },

    // 关闭选择设置项
    handleClose() {
      const { selectedFields } = this.data
      if (selectedFields.length === 0) {
        dd.alert({
          title: '提示',
          content: '至少选择一项',
          buttonText: '我知道了',
        });
        return
      }
      this.props.onClose({ selectedFields, show: false })
    }
  },
});
