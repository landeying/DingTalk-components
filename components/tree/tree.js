Component({
  mixins: [],
  data: {},
  props: {
    list: Object,
    icon: '',
    direction: 'row',
    pid: 0,
    cid: 0,
    onSelect: () => {
    },
    onChildSelect: () => {
    }
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