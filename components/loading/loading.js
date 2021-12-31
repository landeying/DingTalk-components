Component({
  mixins: [],
  data: {
    height: 0
  },
  props: {
    show: true, // 显示loading
    className: '', // loading类名
    content: '加载中...', // loading文字
  },
  didMount() {
    dd.getSystemInfo({
      success: (res) => {
        this.setData({
          height: res.windowHeight
        })
        console.log(this.data.height)
      }
    })
  },
  didUpdate() { },
  didUnmount() { },
  methods: {},
});
