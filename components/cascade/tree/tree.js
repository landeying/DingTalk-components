Component({
  mixins: [],
  data: {},
  props: {
    list: Object, // 列表数据
    icon: '', // 节点图标
    direction: 'row', // 排列方式，row: 横向排列 column：纵向排列
    pid: 0, // 父节点id
    cid: 0, // 子节点id
    onSelect: () => { }, //  根节点选择
    onChildSelect: () => { } // 其他节点选择
  },
  didMount() {
  },
  didUpdate() {
  },
  didUnmount() { },
  methods: {
    select(e) {
      const { cid, name, pid, len } = e.target.dataset
      this.props.onSelect({ cid, name, pid, len })
    },
    childSelect(data) {
      this.props.onChildSelect(data)
    }
  },
});